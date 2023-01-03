import { ContactModel } from "@libs/contacts";
import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { AppBar } from "./AppBar";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";

interface LayoutProps {
    contacts: ContactModel[]
    children: ReactNode,}

export const Layout: FC<LayoutProps> = ({ contacts, children }) => {
    return (
        <>
            <AppBar className=" bg-background-dark" />
            <section className={classNames("flex flex-col items-center px-2 mt-32")}>
                <div className="max-w-xl w-full bg-editor-dark">
                    {children}
                </div>
            </section>
            <Footer contacts={contacts}/>
        </>
    )
}