'use client';

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import dynamic from "next/dynamic";
import {useAnimate, useInView} from "motion/react";
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
    const [cardRef, animate] = useAnimate()
    const performAnimateWhileInView = async () => {
        await animate(cardRef.current, {opacity: 1, scale: 1}, {type: "spring", stiffness: 100, damping: 15});
    }
    useEffect(() => {
        performAnimateWhileInView()
    }, [])
    return (
        <Card
            ref={cardRef}
            initial={{opacity: 0, scale: 0}}
            className="shadow-none col-span-12 flex flex-col gap-4 sm:col-span-4 sm:row-span-2"
        >
            <CardHeader>
                <CardTitle><h2 className="text-3xl font-bold">TOOLS</h2></CardTitle>
                <CardDescription>
                    Continuously learning and adapting to new tools and technologies, with
                    expertise in Android Development using Kotlin
                </CardDescription>
            </CardHeader>
            <CardContent className="lg:h-[400px] lg:mb-12">
                <DynamicIconCloud iconSlugs={icons}/>
            </CardContent>
        </Card>
    );
};