"use client"
import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FileUser} from 'lucide-react';
import {motion} from 'motion/react';

export const Greetings = ({name, title}: { name: string, title: string }) => {
    return (
        <Card
            className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4 sm:col-span-8 lg:justify-center"
            initial={{scale: 0.85, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: 'spring', stiffness: 100, damping: 15, staggerChildren: 0.5}}
        >
            <motion.h1
                initial={{transform: 'translateX(-60px)', opacity: 0}}
                animate={{transform: 'translateX(0)', opacity: 1}}
                transition={{duration: 0.2, ease: 'easeIn', delay: 0.2}}
                className="text-5xl font-black uppercase">
                {name}
            </motion.h1>
            <motion.h2
                className="font-bold text-3xl text-primary uppercase"
                initial={{transform: 'translateX(-60px)', opacity: 0}}
                animate={{transform: 'translateX(0)', opacity: 1}}
                transition={{duration: 0.2, ease: 'easeIn', delay: 0.3}}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-xl tracking-wide leading-8"
                initial={{transform: 'translateY(60px)', opacity: 0}}
                animate={{transform: 'translateY(0)', opacity: 1}}
                transition={{duration: 0.2, ease: 'easeIn', delay: 0.4}}
            >
                Building secure, scalable, and accessible digital products for enterprises and fintech industries since
                2017.
                I am currently working as a <span
                className="border-b-4 font-bold border-primary">Senior Android Developer</span> at Digital
                Daya Teknologi.
            </motion.p>
            <Button className="uppercase mt-6 sm:w-fit" size="lg" asChild>
                <motion.a href="/alfian-resume.pdf" target="_blank" aria-label="resume" title="resume"
                          initial={{transform: 'translateY(60px)', opacity: 0}}
                          animate={{transform: 'translateY(0)', opacity: 1}}
                          transition={{duration: 0.2, ease: 'easeIn', delay: 0.5}}
                >
                    <FileUser/>
                    <span>Download Resume</span>
                </motion.a>
            </Button>
        </Card>
    );
};