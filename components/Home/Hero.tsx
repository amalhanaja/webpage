import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";
import { OutlinedButton } from "../Button";

export const Hero: FC = () => {
    return (
        <section className="bg-white relative min-h-screen sm:min-h-0 flex flex-col py-4 px-4">
            <div className="h-20 mb-4"></div>
            <h1 className="text-primary-color text-4xl font-bold mt-8">🙋‍♂️ Hi, I'm Alfian</h1>
            <h2 className="mt-2 text-primary text-2xl font-bold">Android Developer</h2>
            <div className="mt-6 text-base">
                <p>
                    I'm an android Developer with specializing in architecture, UX, design, and performance of Android applications with over 5 years of experience.
                </p>
                <p className="mt-2">
                    Currently I'm focused on building UI Kit, libraries, and leading different developer experience-oriented projects to help engineers build features faster at 
                    <span className="text-primary font-bold"> LinkAja</span>.
                </p>
            </div>
            <Link href="/contacts">
                <OutlinedButton className="mt-16">Contact Me</OutlinedButton>
            </Link>
        </section>
    )
}