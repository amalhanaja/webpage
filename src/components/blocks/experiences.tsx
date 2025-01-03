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

type ExperiencesProps = {
    experiences: Experience[]
}

export const ExperienceItem = ({experience, index, isLast}: {
    experience: Experience,
    index: number,
    isLast: boolean
}) => {
    return (
        <div className="flex flex-row items-center relative">
            {index % 2 === 1 && !isLast && (<div className="hidden xl:block"><ArrowLeftToBottom
                className="absolute stroke-stone-600 dark:stroke-stone-300 scale-y-[400%] scale-x-[400%] translate-x-[250%] left-0 bottom-12"/>
            </div>)}
            <Card
                className={cn('flex flex-col bg-card w-full max-w-4xl justify-self-end', index % 2 === 0 ? 'me-auto' : 'ms-auto')}>
                <div className="flex flex-row gap-6 p-4">
                    <div
                        className="h-16 aspect-square shadow border-2 rounded-full flex items-center justify-center bg-card">
                        {experience.logo ? (
                            <Image src={experience.logo} alt={experience.company} width={24} height={24}
                                   className="size-8 object-center"/>) : (
                            <Building2 size={32}/>)}
                    </div>
                    <div>
                        <CardTitle><h4 className="font-semibold tracking-wider">{experience.title}</h4></CardTitle>
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
                            <Link key={link.href} href={link.href}
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
        </div>
    );
};

export const Experiences = ({experiences}: ExperiencesProps) => {
    return (
        <HeroHighlight className="w-full max-w-screen-xl mx-auto px-4 py-32 flex flex-col">
            <SectionTitle className="uppercase bg-card">
                <Briefcase/>
                <h2>Work Experiences</h2>
            </SectionTitle>
            <h3 className="text-4xl tracking-wider font-bold mt-6">A summary of my professional experience.</h3>
            <div className="flex flex-col gap-8 mt-16 w-full">
                {experiences.map((experience, index) => {
                    return (
                        <ExperienceItem
                            key={index}
                            index={index}
                            experience={experience}
                            isLast={experiences.length - 1 == index}/>);
                })}
            </div>
            <div className="mt-8 flex flex-col items-center">
                <Button className="uppercase w-fit" variant="primary">View Full Resume <ExternalLink/></Button>
            </div>
        </HeroHighlight>
    );
};