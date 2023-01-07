import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";
import { OutlinedButton } from "../Button";

export const Hero: FC = () => {
  const router = useRouter();
  return (
    <section className="relative flex flex-col p-4 mt-4">
      <h2 className="text-primary text-2xl font-bold">Hello world</h2>
      <p className="mt-2 text-primary-text">
        I&apos;m Alfian Akmal Hanantio. I&apos;m a software engineer specialized
        in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid
        experience in building complex applications with modern technologies.
        I&apos;m currently learning everything.
      </p>
    </section>
  );
};
