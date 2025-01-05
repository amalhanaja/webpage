import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {FileUser} from 'lucide-react';
import Link from "next/link";

export const Greetings = ({name, title}: { name: string, title: string }) => {
    return (
        <Card className="shadow-none col-span-12 px-6 py-12 flex flex-col gap-4 sm:col-span-8 lg:justify-center">
            <h1 className="text-5xl font-black uppercase">{name}</h1>
            <h2 className="font-bold text-3xl text-primary uppercase">{title}</h2>
            <p className="text-xl tracking-wide leading-8">
                Building secure, scalable, and accessible digital products for enterprises and fintech industries since
                2017.
                I am currently working as a <span
                className="border-b-4 font-bold border-primary">Senior Android Developer</span> at Digital
                Daya Teknologi.
            </p>
            <Button className="uppercase mt-6 sm:w-fit" size="lg" asChild>
                <Link href="/alfian-resume.pdf" target="_blank" aria-label="resume" title="resume">
                    <FileUser/>
                    <span>Download Resume</span>
                </Link>
            </Button>
        </Card>
    );
};