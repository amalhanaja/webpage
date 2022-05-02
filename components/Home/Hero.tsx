import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";
import { OutlinedButton } from "../Button";

export const Hero: FC = () => {
    const router = useRouter()
    return (
        <section className="bg-white relative min-h-screen sm:min-h-0 flex flex-col py-4 px-4">
            <div className="h-20 mb-4"></div>
            <h2 className="text-primary-color text-4xl font-bold mt-8">🙋‍♂️ Hi, I&apos;m Alfian</h2>
            <h2 className="mt-2 text-primary text-2xl font-bold">Android Developer</h2>
            <div className="mt-6 text-base">
                <p>
                    I&apos;m an Android Developer with specializing in architecture, UX, design, and performance of Android applications with over 5 years of experience.
                </p>
                <p className="mt-2">
                    Currently I&apos;m focused on building UI Kit, libraries, and leading different developer experience-oriented projects to help engineers build features faster at
                    <span className="text-primary font-bold"> LinkAja</span>.
                </p>
            </div>
            <OutlinedButton className="mt-16" onClick={() => { router.push("/contacts") }}>Contact Me</OutlinedButton>
        </section>
    )
}