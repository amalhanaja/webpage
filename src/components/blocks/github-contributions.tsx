"use client"

import {useTheme} from 'next-themes';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import GitHubCalendar from 'react-github-calendar';
import {motion} from 'motion/react';

export const GithubContributions = () => {
    const {theme} = useTheme();
    return (
        <Card
            className="shadow-none col-span-12 sm:col-span-8"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "spring", stiffness: 100, damping: 15, delay: 0.75}}
        >
            <CardHeader>
                <CardTitle>
                    <motion.h2
                        className="text-3xl font-bold uppercase"
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2, ease: 'easeIn', delay: 0.95}}
                    >
                        My Github activities
                    </motion.h2>
                </CardTitle>
            </CardHeader>
            <CardContent initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                         transition={{duration: 0.5, ease: 'easeIn', delay: 1.05}}>
                <GitHubCalendar username="amalhanaja" colorScheme={theme === 'dark' ? 'dark' : 'light'} blockSize={12}
                                blockMargin={3}/>
            </CardContent>
        </Card>
    );
};