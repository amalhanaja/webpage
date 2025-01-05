import {Experiences} from '@/components/blocks/experiences';
import {getExperiences} from '@/service/experience';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Experiences | Alfian Akmal Hanantio',
    description: "Learn how I've contributed to successful projects throughout my career. Explore my professional journey and see how my skills and experience have helped me achieve impactful results.",
    openGraph: {
        title: 'Experiences | Alfian Akmal Hanantio',
        description: "Learn how I've contributed to successful projects throughout my career. Explore my professional journey and see how my skills and experience have helped me achieve impactful results."
    },
    keywords: [
        "projects",
        "alfian",
        "akmal",
        "hanantio",
        "kotlin",
        "java",
        "scalable",
        "efficiency",
        "key role",
        "development",
        "android",
        "android developer",
        "android engineer",
        "software engineer",
        "software",
        "deliver",
        "streamline",
        "application",
        "leadership",
        "team"
    ]
}

export default async function ExperiencesPage() {
    const experiences = await getExperiences();
    return (
        <Experiences experiences={experiences}/>
    );
};