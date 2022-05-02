import { ContactModel } from "@libs/contacts";
import Link from "next/link";
import { FC, ReactElement } from "react";

interface ContactItemProps {
    contact: ContactModel,
    icon: ReactElement
}

export const ContactItem: FC<ContactItemProps> = ({ contact, icon }) => {
    return (
        <a href={contact.accountUrl} target="__blank" title={contact.name}>
            <div className="bg-slate-50 rounded-lg flex items-center px-4 py-6 hover:cursor-pointer border-1 text-primary-color border-slate-100 hover:shadow-xl hover:bg-primary hover:text-on-primary hover:border-primary-dark">
                <div className="text-3xl">
                    {icon}
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-lg text-col">{contact.name}</h4>
                    <div className="">{contact.accountId}</div>
                </div>
            </div>
        </a>
    )
}