'use client';

import {SectionTitle} from '@/components/blocks/section-title';
import {Card, CardContent, CardDescription, CardTitle} from '@/components/ui/card';
import {Briefcase, Building2, ExternalLink, MapPin} from 'lucide-react';
import {Separator} from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import {ArrowLeftToBottom} from '@/components/ui/arrow-left-to-bottom';
import {Experience} from '@/service/experience';
import {HeroHighlight} from '@/components/ui/hero-highlight';
import {motion} from 'motion/react';

type ExperiencesProps = {
    experiences: Experience[]
}

export const ExperienceItem = ({experience, index, isLast}: {
    experience: Experience,
    index: number,
    isLast: boolean,
}) => {
    const oddVariants = {
        initial: {opacity: 0, transform: 'translateX(-50px)'},
        show: {opacity: 1, transform: 'translateX(0)'},
    }
    const evenVariants = {
        initial: {opacity: 0, transform: 'translateX(50px)'},
        show: {opacity: 1, transform: 'translateX(0)'},
    }
    return (
        <motion.div className="flex flex-row items-center relative"
                    variants={index % 2 == 0 ? oddVariants : evenVariants}>
            {index % 2 === 1 && !isLast && (<div className="hidden xl:block"><ArrowLeftToBottom
                className="absolute stroke-stone-600 dark:stroke-stone-300 scale-y-[400%] scale-x-[400%] translate-x-[250%] left-0 bottom-12"/>
            </div>)}
            <Card
                className={cn('flex flex-col bg-card w-full max-w-4xl justify-self-end', index % 2 === 0 ? 'me-auto' : 'ms-auto')}>
                <div className="flex flex-row gap-6 p-4">
                    <div
                        className="h-16 aspect-square shadow border-2 rounded-full flex items-center justify-center bg-card">
                        {experience.logo ? (
                            <Image src={experience.logo} alt={experience.company} title={experience.company} width={24}
                                   height={24}
                                   className="size-8 object-center"/>) : (
                            <Building2 size={32} aria-label={experience.company}/>)}
                    </div>
                    <div>
                        <CardTitle><h3 className="font-semibold tracking-wider">{experience.title}</h3></CardTitle>
                        <CardDescription className="text-foreground">
                            <div className="font-medium">{experience.company}</div>
                            <div className="font-normal mt-1">{experience.workingRange}</div>
                        </CardDescription>
                    </div>
                </div>
                <Separator/>
                <CardContent className="py-6 flex flex-col gap-4">
                    <div className="flex flex-row gap-x-4 gap-y-1 flex-wrap">
                        <div className="flex flex-row gap-1 items-center text-sm">
                            <span className="text-primary"><MapPin size={14}/></span>
                            {experience.location}
                        </div>
                        {experience.links.map(link => (
                            <Link key={link.href} href={link.href} aria-label={link.label} title={link.label}
                                  className="flex flex-row gap-1 items-center text-sm text-primary underline">
                                <span className="text-primary"><ExternalLink size={14}/></span>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        {experience.content}
                    </div>
                </CardContent>
            </Card>
            {index % 2 == 0 && !isLast && (<div className="hidden xl:block"><ArrowLeftToBottom
                className="absolute stroke-stone-600 dark:stroke-stone-300 scale-y-[400%] -scale-x-[400%] -translate-x-[250%] right-0 bottom-12"/>
            </div>)}
        </motion.div>
    );
};

export const Experiences = ({experiences}: ExperiencesProps) => {
    const sectionTitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)'},
    }
    const sectionSubtitleVariants = {
        initial: {opacity: 0, transform: 'translateX(-60px)'},
        show: {opacity: 1, transform: 'translateX(0)', transition: {delay: 0.1}},
    }
    const experiencesContainerVariants = {
        initial: {opacity: 0, transform: 'translateY(60px)'},
        show: {
            opacity: 1,
            transform: 'translateY(0)',
            transition: {delay: 0.2, ease: 'easeIn', staggerChildren: 0.2, delayChildren: 0.4},
        },
    }
    return (
        <HeroHighlight className="w-full max-w-screen-xl mx-auto px-4 py-32 flex flex-col">
            <SectionTitle className="uppercase bg-card" variants={sectionTitleVariants} initial="initial"
                          animate="show">
                <Briefcase/>
                <h1>Work Experiences</h1>
            </SectionTitle>
            <motion.h2
                className="text-4xl tracking-wider font-bold mt-6"
                variants={sectionSubtitleVariants}
                initial="initial"
                animate="show"
            >
                A summary of my professional experience.
            </motion.h2>
            <motion.div
                className="flex flex-col gap-8 mt-16 w-full"
                variants={experiencesContainerVariants}
                initial="initial"
                animate="show"
            >
                {experiences.map((experience, index) => {
                    return (
                        <ExperienceItem
                            key={index}
                            index={index}
                            experience={experience}
                            isLast={experiences.length - 1 == index}
                        />
                    );
                })}
            </motion.div>
            <motion.div className="mt-8 flex flex-col items-center"
                        variants={{
                            ...sectionSubtitleVariants,
                            show: {...sectionTitleVariants.show, transition: {delay: 1.4}}
                        }}
                        initial="initial"
                        animate="show">
                <Button className="uppercase w-fit" variant="primary" size="lg" asChild>
                    <Link href="/alfian-resume.pdf" target="_blank" title="resume">
                        <span>View Full Resume</span>
                        <ExternalLink/>
                    </Link>

                </Button>
            </motion.div>
        </HeroHighlight>
    );
};