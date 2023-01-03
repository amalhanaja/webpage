import { ProjectModel } from "@libs/projects";
import Image from "next/image";
import { FC } from "react";

interface ProjectTagProps {
  tag: string;
}

const ProjectTag: FC<ProjectTagProps> = ({ tag }) => {
  return (
    <div className="py-2 px-3 text-xs border-solid rounded-lg border-slate-200 border-2 m-1">
      #{tag}
    </div>
  );
};

interface ProjectItemProps {
  project: ProjectModel;
}

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => (
  <a href={project.projectUrl} target="__blank" className="hover:bg-background-dark hover:rounded-lg">
    <div className="p-2 flex flex-col">
      <h4 className="font-semibold text-lg">{project.title}</h4>
      <div className="mt-1 text-content-200-dark">{project.description}</div>
      <div className="pb-4 mt-2 flex flex-wrap">
        {project.tags.map((tag, i) => (
          <ProjectTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  </a>
);
