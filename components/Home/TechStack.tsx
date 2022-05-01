import { TechStackModel } from "@libs/techstack";
import Image from "next/image";
import { FC } from "react";

const StackItem: FC<{ model: TechStackModel }> = ({ model }) => {
    return (
        <div key={model.name} className="flex items-center py-4 px-4 bg-slate-50 rounded-lg border-slate-100 border-1">
            {/* <img className="w-8 h-8" alt={model.name} src={model.icon} /> */}
            <Image width={32} height={32} alt={model.name} src={model.icon} title={model.name}/>
            <span className="ml-4 truncate">{model.name}</span>
        </div>
    )
}


interface TechStackProps {
    stacks: TechStackModel[]
}

export const TechStack: FC<TechStackProps> = ({ stacks }) => {
    return (
        <section className="px-4 py-4 mb-8">
            <h3 className="mt-16 text-2xl font-bold">What I do</h3>
            <p className="mt-6">Crazy developer who wants to explore every tech stack</p>
            <div className="grid grid-cols-2 grid-flow-row gap-4 mt-6">
                {stacks.map((stack) => (<StackItem key={stack.name} model={stack} />))}
            </div>
        </section>
    )
}