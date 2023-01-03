import { OutlinedButton } from "@components/Button";
import { ProjectList } from "@components/Projects/ProjectList";
import { ProjectModel } from "@libs/projects";
import { FC } from "react";

interface ProjectsProps {
  projects: ProjectModel[];
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="p-4">
      <h3 className="text-secondary text-2xl font-bold">
        Some Things I&apos;ve Built
      </h3>
      <ProjectList projects={projects} className="mt-4" />
    </section>
  );
};
