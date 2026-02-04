// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectDetail } from "@/data/projectDetails";
import ProjectDetailPage from "@/components/ProjectDetailPage";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return notFound();

    const detail = getProjectDetail(slug);
    return <ProjectDetailPage project={project} detail={detail} />;
}