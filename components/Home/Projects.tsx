import { OutlinedButton } from "@components/Button";
import { ProjectList } from "@components/Projects/ProjectList";
import { ProjectModel } from "@libs/projects";
import { FC } from "react";

interface ProjectsProps {
    projects: ProjectModel[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
    return (
        <section id="projects" className="px-4 py-6">
            <h3 className="font-bold text-2xl">Some Things I’ve Built</h3>
            <ProjectList projects={projects} className="mt-6" />
        </section>
    )
}