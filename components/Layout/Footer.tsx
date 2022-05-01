import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="p-4 flex justify-center bg-primary text-on-primary">
            <div className="max-w-xl">
                Designed &amp; Built by 
                <span> <a href="https://github.com/amalahanaja" target="__blank" className="font-bold hover:underline"> Alfian Akmal Hanantio</a> </span>
                using 
                <span> <a href="https://nextjs.org/" target="__blank" className="text-slate-100 font-bold hover:underline">NextJS</a> &amp; </span>
                <span> <a href="https://tailwindcss.com/" target="__blank" className="font-bold text-blue-100 hover:underline">TailwindCSS</a> </span>
            </div>
        </footer>
    )
}