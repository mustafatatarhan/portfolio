"use client";

import { useEffect, useMemo, useState } from "react";

type TokenType =
    | "comment"
    | "string"
    | "keyword"
    | "type"
    | "number"
    | "fn"
    | "punc"
    | "plain";

type Token = { type: TokenType; value: string };

const DART_KEYWORDS = new Set([
    "import",
    "void",
    "class",
    "const",
    "final",
    "return",
    "new",
    "extends",
    "override",
    "super",
]);

const DART_TYPES = new Set([
    "MaterialApp",
    "StatelessWidget",
    "BuildContext",
    "Widget",
    "Scaffold",
    "Center",
    "Text",
]);

function tokenizeDart(code: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;

    const push = (type: TokenType, value: string) => {
        if (!value) return;
        tokens.push({ type, value });
    };

    while (i < code.length) {
        const rest = code.slice(i);

        // Newline
        if (rest[0] === "\n") {
            push("plain", "\n");
            i += 1;
            continue;
        }

        // Whitespace
        const ws = rest.match(/^[ \t\r]+/);
        if (ws) {
            push("plain", ws[0]);
            i += ws[0].length;
            continue;
        }

        // Line comment //
        if (rest.startsWith("//")) {
            const end = rest.indexOf("\n");
            const val = end === -1 ? rest : rest.slice(0, end);
            push("comment", val);
            i += val.length;
            continue;
        }

        // Block comment /* ... */
        if (rest.startsWith("/*")) {
            const end = rest.indexOf("*/", 2);
            const val = end === -1 ? rest : rest.slice(0, end + 2);
            push("comment", val);
            i += val.length;
            continue;
        }

        // Strings '...' or "..."
        if (rest[0] === "'" || rest[0] === '"') {
            const quote = rest[0];
            let j = 1;
            let escaped = false;
            while (j < rest.length) {
                const ch = rest[j];
                if (escaped) {
                    escaped = false;
                    j++;
                    continue;
                }
                if (ch === "\\") {
                    escaped = true;
                    j++;
                    continue;
                }
                if (ch === quote) {
                    j++;
                    break;
                }
                j++;
            }
            const val = rest.slice(0, j);
            push("string", val);
            i += val.length;
            continue;
        }

        // Numbers
        const num = rest.match(/^\d+(\.\d+)?/);
        if (num) {
            push("number", num[0]);
            i += num[0].length;
            continue;
        }

        // Identifiers / words
        const word = rest.match(/^[A-Za-z_]\w*/);
        if (word) {
            const w = word[0];
            const nextChar = rest[w.length] ?? "";

            // function-ish if followed by "("
            const isFn = nextChar === "(";

            if (DART_KEYWORDS.has(w)) push("keyword", w);
            else if (DART_TYPES.has(w)) push("type", w);
            else if (isFn) push("fn", w);
            else push("plain", w);

            i += w.length;
            continue;
        }

        // Punctuation / operators
        const punc = rest.match(/^[()[\]{}<>,.;:=+\-*/!&|?@#%^~]+/);
        if (punc) {
            push("punc", punc[0]);
            i += punc[0].length;
            continue;
        }

        // Fallback: single char
        push("plain", rest[0]);
        i += 1;
    }

    return tokens;
}

function classFor(type: TokenType) {
    switch (type) {
        case "comment":
            return "code-token-comment";
        case "string":
            return "code-token-string";
        case "keyword":
            return "code-token-keyword";
        case "type":
            return "code-token-type";
        case "number":
            return "code-token-number";
        case "fn":
            return "code-token-fn";
        case "punc":
            return "code-token-punc";
        default:
            return "code-token-plain";
    }
}

export default function HeroCodePreview() {
    const FULL_CODE_STRING = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: Text(
          'Production-ready Flutter apps.',
        ),
      ),
    );
  }
}`;
    const code = useMemo(
        () => FULL_CODE_STRING,
        []
    );

    const tokens = useMemo(() => tokenizeDart(code), [code]);
    const totalChars = useMemo(() => code.length, [code]);

    // typing
    const [visibleChars, setVisibleChars] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        setVisibleChars(0);
        setDone(false);

        // speed: 10–18ms arası güzel; 14ms “tık tık” hissi verir
        const speedMs = 14;

        const id = window.setInterval(() => {
            setVisibleChars((v) => {
                const next = v + 1;
                if (next >= totalChars) {
                    window.clearInterval(id);
                    setDone(true);
                    return totalChars;
                }
                return next;
            });
        }, speedMs);

        return () => window.clearInterval(id);
    }, [totalChars]);

    // render tokens partially by visibleChars
    let remaining = visibleChars;

    return (
        <div className="relative hidden md:block w-full">
            <div className="relative rounded-2xl border border-white/10 code-surface p-5 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between text-xs text-white/60">
                    <span>lib/main.dart</span>
                    <span className="rounded-md bg-white/5 px-2 py-0.5">Flutter</span>
                </div>

                {/* ====== HEIGHT PLACEHOLDER (invisible) ====== */}
                <pre
                    className="text-sm leading-6 pr-2 select-none pointer-events-none opacity-0"
                    aria-hidden="true"
                >
                    <code className="font-mono">
                        {/* burada FULL kodu düz string olarak bas */}
                        {FULL_CODE_STRING}
                    </code>
                </pre>

                {/* ====== VISIBLE TYPING LAYER (absolute overlay) ====== */}
                <pre className="absolute left-5 right-5 bottom-5 top-[56px] text-sm leading-6 overflow-hidden pr-2">
                    <code className="font-mono">
                        {tokens.map((t, idx) => {
                            if (remaining <= 0) return null;

                            const take = Math.min(remaining, t.value.length);
                            remaining -= take;

                            const part = t.value.slice(0, take);

                            return (
                                <span key={idx} className={classFor(t.type)}>
                                    {part}
                                </span>
                            );
                        })}

                        {!done && <span className="code-caret" aria-hidden="true" />}
                    </code>
                </pre>
            </div>

            {/* Glow (dar) */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-500/5 blur-xl" />
        </div>
    );
}