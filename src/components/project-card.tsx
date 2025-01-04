"use client"

import {Project} from '@/service/project';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {SiGithub} from 'react-icons/si';
import {ExternalLink} from 'lucide-react';
import {Badge} from "@/components/ui/badge";

type Props = {
    project: Project,
}

export const ProjectCard = ({project}: Props) => {
    return (
        <motion.div
            className="bg-card border-4 border-netral-foreground shadow-xl p-6 rounded-lg relative overflow-hidden flex flex-col"
        >
            <div className="w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={800}
                    className="w-full h-40 object-cover mb-4 rounded border-2 border-netral-foreground relative z-10"
                />
            </div>
            <h2 className="text-2xl font-bold mb-2 tracking-wide">{project.title}</h2>
            <div className="flex-1">{project.content}</div>
            {project.tags && (<div className="flex flex-wrap flex-row gap-1 mt-4">{project.tags.map(tag => (
                <Badge key={tag} variant="neutral">{tag}</Badge>))}</div>)}
            <div className="flex gap-x-4 relative mt-4">
                <motion.a
                    href={project.github}
                    target="_blank"
                    aria-label="github"
                    rel="noopener noreferrer"
                    className="flex items-center text-card-foreground hover:text-primary transition-colors duration-150"
                >
                    <SiGithub className="mr-2" size={20}/>
                    <span className="font-bold" style={{fontFamily: '"Space Mono", monospace'}}>GitHub</span>
                </motion.a>
                {project.link && (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="live"
                        className="flex items-center text-card-foreground hover:text-primary transition-colors"
                    >
                        <ExternalLink className="mr-2" size={20}/>
                        <span className="font-bold" style={{fontFamily: '"Space Mono", monospace'}}>Live</span>
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};