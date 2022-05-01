import { ProjectModel } from "@libs/projects";
import classNames from "classnames";
import { FC } from "react";
import { ProjectItem } from "./ProjectItem";

interface ProjectListProps {
    projects: ProjectModel[]
    className?: string
}

export const ProjectList: FC<ProjectListProps> = ({ projects, className }) => {
    return (
        <div className={classNames("grid", "grid-cols-1", "gap-2", className)}>
            {projects.map((project, i) => (<ProjectItem key={project.title} project={project} />))}
        </div>
    )
}