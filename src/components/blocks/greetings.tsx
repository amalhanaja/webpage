"use client"
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FileUser} from 'lucide-react';
import {motion, useAnimate, useInView} from 'motion/react';
import {useEffect} from "react";

export const Greetings = ({name, title}: { name: string, title: string }) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope)
    const performAnimateWhileInView = async () => {
        await animate(scope.current, {scale: 1, opacity: 1}, {type: "spring", stiffness: 100, damping: 10});
        await animate("h1", {x: 0, opacity: 1}, {duration: 0.15, ease: 'easeIn', delay: 0.3});
        await animate("h2", {x: 0, opacity: 1}, {duration: 0.15, ease: 'easeIn'});
        await animate("p", {y: 0, opacity: 1}, {duration: 0.1, ease: 'easeIn'});
        await animate('a', {y: 0, opacity: 1}, {duration: 0.1, ease: 'easeIn'});
    }
    useEffect(() => {
        performAnimateWhileInView()
    }, [isInView])
    return (
        <Card
            ref={scope}
            className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4 sm:col-span-8 lg:justify-center"
            initial={{scale: 0.85, opacity: 0}}
        >
            <motion.h1
                initial={{x: -20, opacity: 0}}
                className="text-5xl font-black uppercase">
                {name}
            </motion.h1>
            <motion.h2
                initial={{x: -60, opacity: 0}}
                className="font-bold text-3xl text-primary uppercase">
                {title}
            </motion.h2>
            <motion.p
                className="text-xl tracking-wide leading-8"
                initial={{y: 60, opacity: 0}}
            >
                Building secure, scalable, and accessible digital products for enterprises and fintech industries since
                2017.
                I am currently working as a <span
                className="border-b-4 font-bold border-primary">Senior Android Developer</span> at Digital
                Daya Teknologi.
            </motion.p>
            <Button className="uppercase mt-6 sm:w-fit" size="lg" asChild>
                <motion.a href="/alfian-resume.pdf" target="_blank" aria-label="resume" title="resume"
                          initial={{y: 60, opacity: 0}}>
                    <FileUser/>
                    <span>Download Resume</span>
                </motion.a>
            </Button>
        </Card>
    );
};