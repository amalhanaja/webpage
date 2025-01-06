'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import dynamic from "next/dynamic";
import {motion, useAnimate, useInView} from "motion/react";
import {useEffect} from "react";

const DynamicIconCloud = dynamic(() => import('../ui/icon-cloud'), {ssr: false})

const icons = [
    'typescript',
    'dart',
    'react',
    'flutter',
    'android',
    'html5',
    'css3',
    'nodedotjs',
    'bun',
    'kotlin',
    'drizzle',
    'postgresql',
    'firebase',
    'supabase',
    'nginx',
    'vercel',
    'docker',
    'git',
    'jira',
    'androidstudio',
    'sonarqube',
    'figma',
    'sqlite',
    'go',
    'rust',
    'mysql',
    'miro',
    'github',
    'bitbucket',
    'gitlab',
    'mongodb',
    'nextdotjs',
    'svelte',
    'anytype',
    'arc',
    'python',
    'pandas',
    'tensorflow',
    'jupyter',
    'notion',
    'strapi',
    'jetpackcompose',
    'shadcnui',
    'tailwindcss',
    'graphql',
    'apachekafka',
    'jenkins',
    'podman'
];

export const Tools = () => {
    return (
        <Card
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: 'spring', stiffness: 100, damping: 15, delay: 0.4}}
            className="shadow-none col-span-12 flex flex-col gap-4 sm:col-span-4 sm:row-span-2"
        >
            <CardHeader>
                <CardTitle>
                    <motion.h2
                        className="text-3xl font-bold"
                        initial={{transform: 'translateY(40px)', opacity: 0}}
                        animate={{transform: 'translateY(0)', opacity: 1}}
                        transition={{duration: 0.2, ease: 'easeIn', delay: 0.65}}
                    >
                        TOOLS
                    </motion.h2>
                </CardTitle>
                <CardDescription
                    className="tools-description"
                    initial={{opacity: 0, transform: "translateY(60px)"}}
                    animate={{transform: 'translateY(0)', opacity: 1}}
                    transition={{duration: 0.2, ease: 'easeIn', delay: 0.75}}
                >
                    Continuously learning and adapting to new tools and technologies, with
                    expertise in Android Development using Kotlin
                </CardDescription>
            </CardHeader>
            <CardContent
                className="lg:h-[400px] lg:mb-12"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.2, ease: 'easeIn', delay: 0.85}}
            >
                <DynamicIconCloud iconSlugs={icons}/>
            </CardContent>
        </Card>
    );
};