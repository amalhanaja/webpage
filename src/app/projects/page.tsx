import {SectionTitle} from "@/components/blocks/section-title";
import {FolderGit} from "lucide-react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import {getProjects} from "@/service/project";
import {ProjectCard} from "@/components/project-card";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full">
                {projects.map((item) => (
                    <ProjectCard project={item} key={item.id}/>
                ))}
            </div>
        </HeroHighlight>
    )
}