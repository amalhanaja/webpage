import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { AppBar } from "./AppBar";
import { Drawer } from "./Drawer";
import { Footer } from "./Footer";

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false)
    return (
        <>
            <AppBar onMenuClick={() => { setIsDrawerVisible(true) }} />
            <Drawer isVisible={isDrawerVisible} onClose={() => { setIsDrawerVisible(false) }} />
            <section className={classNames("flex flex-col items-center")}>
                <div className="max-w-xl w-full">
                    {children}
                </div>
            </section>
            <Footer />
        </>
    )
}