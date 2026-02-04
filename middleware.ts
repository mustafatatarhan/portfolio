// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/request";

export default createMiddleware({
    locales: [...locales],
    defaultLocale: "en",
    localeDetection: false,
    localePrefix: "always", // /en ve /tr zorunlu
});

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};