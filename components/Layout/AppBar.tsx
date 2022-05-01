import Link from "next/link"
import { FC, Fragment } from "react"
import { Logo } from "../Logo"
import { FiMenu } from 'react-icons/fi'

interface AppBarProps {
    onMenuClick: () => void
}

export const AppBar: FC<AppBarProps> = ({ onMenuClick }) => {
    return (
        <>
            <nav className="fixed flex justify-between items-center px-4 py-4 bg-white top-0 left-0 right-0 z-10 drop-shadow-sm">
                <Link href="/#">
                    <button className="flex items-center text-primary-color hover:text-primary">
                        <Logo size={40} />
                        <h1 className="grow px-4 text-xl font-semibold">
                            Alfian Hanantio
                        </h1>
                    </button>
                </Link>
                <button className="flex items-center px-2 py-2 text-primary-color rounded-full hover:bg-primary hover:bg-opacity-20" aria-label="Menu" onClick={onMenuClick}>
                    <FiMenu className="w-6 h-6 block" />
                </button>
            </nav>
        </>
    )
}