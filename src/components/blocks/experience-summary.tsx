'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Experience} from '@/service/experience';
import Image from 'next/image';
import {Building2} from 'lucide-react';

type Props = {
    experiences: Experience[];
}

export const ExperienceSummary = ({experiences}: Props) => {
    return (
        <Card className="shadow-none col-span-12 sm:col-span-6">
            <CardHeader>
                <CardTitle><h2 className="text-3xl font-bold uppercase">Experience</h2></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                {experiences.map((experience: Experience, index: number) => {
                    return (
                        <Card key={index} className="shadow-sm bg-netral">
                            <div className="flex flex-row gap-6 p-4">
                                <div
                                    className="h-12 aspect-square shadow-sm border-2 rounded-full flex items-center justify-center bg-card">
                                    {experience.logo ? (
                                        <Image src={experience.logo}
                                               alt={experience.company}
                                               width={24}
                                               height={24}
                                               className="size-6 object-center"
                                               title={experience.company}/>
                                    ) : (<Building2 size={24} aria-label="Building"/>)}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold tracking-wider text-lg">{experience.title}</h3>
                                    <div className="font-medium">{experience.company}</div>
                                    <div className="font-normal">{experience.workingRange}</div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </CardContent>
        </Card>
    );
};