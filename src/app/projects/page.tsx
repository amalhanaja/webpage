import {SectionTitle} from "@/components/blocks/section-title";
import {FolderGit} from "lucide-react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {getProjects} from "@/service/project";
import {ProjectCard} from "@/components/project-card";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Projects - Alfian Akmal Hanantio",
    description: "Explore my creative coding projects and experiments, pushing the boundaries of technology and design. Discover how I blend technical skills with artistic vision to create innovative and engaging solutions.",
    openGraph: {
        title: "Projects - Alfian Akmal Hanantio",
        description: "Explore my creative coding projects and experiments, pushing the boundaries of technology and design. Discover how I blend technical skills with artistic vision to create innovative and engaging solutions."
    }
}

export default async function ProjectsPage() {
    const projects = await getProjects()
    return (
        <HeroHighlight className="w-full max-w-screen-xl mx-auto px-4 py-32 flex flex-col">
            <SectionTitle className="uppercase bg-card">
                <FolderGit/>
                <h1>Projects</h1>
            </SectionTitle>
            <h2 className="text-4xl tracking-wider font-bold mt-6">A showcase of my creative coding projects and
                experiments, exploring the intersection of technology and design.</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 mt-16 w-full">
                {projects.map((item) => (
                    <ProjectCard project={item} key={item.id}/>
                ))}
            </div>
        </HeroHighlight>
    )
}