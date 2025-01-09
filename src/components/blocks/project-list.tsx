"use client"

import {SectionTitle} from "@/components/blocks/section-title";
import {FolderGit} from "lucide-react";
import {motion} from "motion/react";
import {ProjectCard} from "@/components/project-card";
import {Project} from "@/service/project";

export const Projects = ({projects}: { projects: Project[] }) => {
    const sectionTitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)'},
    }
    const sectionSubtitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)', transition: {delay: 0.1}},
    }
    const projectsContainer = {
        initial: {opacity: 0, transform: 'translateY(60px)'},
        show: {
            opacity: 1,
            transform: 'translateY(0)',
            transition: {delay: 0.2, ease: 'easeIn', staggerChildren: 0.2, delayChildren: 0.3},
        },
    }
    return (
        <div className="flex flex-col">
            <SectionTitle
                className="uppercase bg-card"
                variants={sectionTitleVariants}
                initial="initial"
                animate="show">
                <FolderGit/>
                <h1>Projects</h1>
            </SectionTitle>
            <motion.h2
                variants={sectionSubtitleVariants}
                initial="initial"
                animate="show"
                className="text-4xl tracking-wider font-bold mt-6">A showcase of my creative coding projects and
                experiments, exploring the intersection of technology and design.
            </motion.h2>
            <motion.div
                variants={projectsContainer}
                initial="initial"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full"
            >
                {projects.map((item) => (
                    <ProjectCard project={item} key={item.id}/>
                ))}
            </motion.div>
        </div>
    )

}