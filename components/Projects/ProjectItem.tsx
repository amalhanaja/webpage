import { ProjectModel } from "@libs/projects";
import { FC } from "react";

interface ProjectTagProps {
    tag: string
}

const ProjectTag: FC<ProjectTagProps> = ({ tag }) => {
    return (
        <div className="py-2 px-3 text-xs border-solid rounded-lg border-slate-200 border-2 m-1">
            #{tag}
        </div>
    )
}

interface ProjectItemProps {
    project: ProjectModel
}

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
    return (
        <a href={project.projectUrl} target="__blank" className="bg-slate-50 rounded-lg border-slate-100 border-1 hover:shadow-xl">
            { project.thumbnailUrl && <img alt={project.title} src={project.thumbnailUrl} className="w-full max-h-48 ml-auto mr-auto object-cover rounded-t-lg" />}
            <div className="px-4 py-6">
                <h4 className="font-bold text-lg">{project.title}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
            </div>
            <div className="px-4 pb-4 flex flex-wrap">
                {project.tags.map((tag, i) => (<ProjectTag key={tag} tag={tag} />))}
            </div>
        </a>
    )
}