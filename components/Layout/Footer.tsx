import { ContactModel } from "@libs/contacts";
import { getSocialIcon } from "@libs/helpers/SocialIcons";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
  contacts: ContactModel[];
}

export const Footer: FC<FooterProps> = ({ contacts }) => {
  return (
    <footer className="flex flex-col items-center justify-center mb-4">
      <div className="max-w-xl w-full flex-col flex p-2 bg-window-footer-dark rounded-b-xl">
        <div className="self-center">
          Designed &amp; Built by
          <span>
            {" "}
            <a
              href="https://github.com/amalhanaja"
              target="__blank"
              className="font-bold hover:underline"
            >
              {" "}
              Alfian Akmal Hanantio
            </a>{" "}
          </span>
          using
          <span>
            {" "}
            <a
              href="https://nextjs.org/"
              target="__blank"
              className="font-bold hover:underline"
            >
              NextJS
            </a>{" "}
            &amp;{" "}
          </span>
          <span>
            {" "}
            <a
              href="https://tailwindcss.com/"
              target="__blank"
              className="font-bold hover:underline"
            >
              TailwindCSS
            </a>{" "}
          </span>
        </div>
        <div className="flex self-center">
          {contacts.map((contact) => {
            return (
              <Link key={contact.accountUrl} href={contact.accountUrl} passHref>
                <a
                  className="text-primary-color hover:text-primary hover:cursor-pointer text-2xl p-2"
                  href={contact.accountUrl}
                  title={contact.name}
                >
                  {getSocialIcon(contact.name)}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
