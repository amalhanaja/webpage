import { ImageAssets } from "@libs/helpers/ImageAssets"

export interface TechStackModel {
    name: string
    icon: any
}

const TECH_STACKS: TechStackModel[] = [
    { name: "Android", icon: ImageAssets.ANDROID },
    { name: "Kotlin", icon: ImageAssets.KOTLIN },
    { name: "Java", icon: ImageAssets.JAVA },
    { name: "Gradle", icon: ImageAssets.GRADLE },
    { name: "SQLite", icon: ImageAssets.SQLITE },
    { name: "PostgreSQL", icon: ImageAssets.POSTGRESQL },
    { name: "MongoDB", icon: ImageAssets.MONGODB },
    { name: "Swift", icon: ImageAssets.SWIFT },
    { name: "Go", icon: ImageAssets.GO },
    { name: "Typescript", icon: ImageAssets.TYPESCRIPT },
    { name: "Git", icon: ImageAssets.GIT },
    { name: "Figma", icon: ImageAssets.FIGMA },
    { name: "HTML", icon: ImageAssets.HTML },
    { name: "CSS", icon: ImageAssets.CSS3 },
    { name: "React", icon: ImageAssets.REACT },
    { name: "Tailwind", icon: ImageAssets.TAILWIND },
]

export async function getTechStacks(): Promise<TechStackModel[]> {
    return TECH_STACKS
}