import {HeroHighlight} from "@/components/ui/hero-highlight";
import {getProjects} from "@/service/project";
import {Metadata} from "next";
import {Projects} from "@/components/blocks/project-list";

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
            <Projects projects={projects}/>
        </HeroHighlight>
    )
}