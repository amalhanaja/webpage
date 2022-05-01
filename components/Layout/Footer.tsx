import { ContactModel } from "@libs/contacts";
import { getSocialIcon } from "@libs/helpers/SocialIcons";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {
    contacts: ContactModel[]
}

export const Footer: FC<FooterProps> = ({ contacts }) => {
    return (
        <footer className="p-4 flex items-center bg-slate-200 text-primary-color text-center flex-col">
            <div className="max-w-xl">
                Designed &amp; Built by
                <span> <a href="https://github.com/amalhanaja" target="__blank" className="font-bold hover:underline"> Alfian Akmal Hanantio</a> </span>
                using
                <span> <a href="https://nextjs.org/" target="__blank" className="text-slate-700 font-bold hover:underline">NextJS</a> &amp; </span>
                <span> <a href="https://tailwindcss.com/" target="__blank" className="font-bold text-blue-600 hover:underline">TailwindCSS</a> </span>
            </div>
            <div className="flex max-w-xl mt-4">
                {contacts.map((contact) => {
                    return (
                        <Link key={contact.accountUrl} href={contact.accountUrl} passHref>
                            <a className="text-primary-color hover:text-primary hover:cursor-pointer text-2xl p-2" href={contact.accountUrl}>
                                {getSocialIcon(contact.name)}
                            </a>
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}