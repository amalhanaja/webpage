import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode } from "react";
import { OutlinedButton } from "../Button";

export const Hero: FC = () => {
  const router = useRouter();
  return (
    <section className="relative flex flex-col p-4 mt-4">
      <h2 className="text-primary text-2xl font-bold">Hello world</h2>
      <p className="mt-2 text-content-100-dark">
        I&apos;m Alfian Akmal Hanantio. a software engineer based in Sidoarjo,
        Indonesia 🇮🇩 with rock-solid experience in building complex applications
        with modern technologies. I&apos;m currently learning everything.
      </p>
      <p className="mt-2 text-content-100-dark">
        I&apos;m passionate about software engineering and love to stay updated
        with the latest technology trends. Apart from programming, I love to
        play video games like Mobile Legend Bang Bang with my friends and play
        guitar. I also love to watch movies, anime, and TV series.
      </p>
    </section>
  );
};
