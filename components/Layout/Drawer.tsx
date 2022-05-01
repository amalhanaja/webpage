import Link from "next/link"
import { FC, Fragment, ReactElement } from "react"
import { FaPeopleArrows, FaPeopleCarry, FaPersonBooth } from "react-icons/fa"
import { FiBook, FiHome, FiX } from "react-icons/fi"
import { GoPerson, GoRepo } from "react-icons/go"
import { OutlinedButton } from "../Button"

interface MenuItemProps {
    link: string
    title: string
    isActive: boolean
    icon: ReactElement
    onItemClick: () => void
}

const MenuItem: FC<MenuItemProps> = ({ link, title, isActive, icon, onItemClick }) => {
    return (
        <li className="w-auto">
            <Link href={link} passHref>
                <button className="flex items-center px-4 py-4 rounded-lg text-primary-color w-full hover:bg-primary hover:text-on-primary" onClick={onItemClick}>
                    {icon}
                    <span className="px-4">{title}</span>
                </button>
            </Link>
        </li>
    )
}

const Menu: FC<{ items: MenuItemProps[] }> = ({ items }) => {
    return (
        <ul className="py-8 grid grid-cols-1 gap-y-4">
            {
                items.map((item) =>
                    (<MenuItem key={item.title} link={item.link} title={item.title} isActive={item.isActive} icon={item.icon} onItemClick={item.onItemClick} />)
                )
            }
        </ul>
    )
}

interface DrawerProps {
    isVisible: boolean
    onClose: () => void
}

export const Drawer: FC<DrawerProps> = ({ isVisible, onClose }) => {
    if (!isVisible) {
        return (<></>)
    }
    return (
        <div className="z-50 fixed h-full top-0 left-0 right-0 flex">
            <section className="bg-slate-800 opacity-60 grow h-auto" onClick={onClose} />
            <section className="bg-white h-auto px-4 py-4 flex flex-col w-80">
                <button className="flex px-2 py-2 self-end text-primary-color rounded-full hover:bg-primary hover:bg-opacity-20" aria-label="Close Menu" onClick={onClose}>
                    <FiX className="w-6 h-6 block" />
                </button>
                <Menu items={[
                    {
                        link: "/#",
                        title: "Home",
                        isActive: false,
                        icon: <FiHome />,
                        onItemClick: onClose
                    },
                    {
                        link: "/#projects",
                        title: "Projects",
                        isActive: false,
                        icon: <GoRepo />,
                        onItemClick: onClose
                    },
                    {
                        link: "/#articles",
                        title: "Article",
                        isActive: false,
                        icon: <FiBook />,
                        onItemClick: onClose
                    },
                    {
                        link: "/contacts",
                        title: "Contacts",
                        isActive: false,
                        icon: <GoPerson />,
                        onItemClick: onClose
                    },
                ]} />
                <div className="flex grow items-end">
                    <OutlinedButton
                        className="grow"
                        onClick={() => {
                            window.open("/Alfian_Akmal_Hanantio_Resume.pdf", "__blank")
                        }}
                    >
                        Resume
                    </OutlinedButton>
                </div>
            </section>
        </div>
    )
}