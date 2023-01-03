import { readdirSync, readFileSync } from "fs"
import matter from "gray-matter"
import path from "path"

export interface ProjectModel {
    title: string
    description: string
    tags: string[]
    thumbnailUrl: string
    projectUrl: string
}

export async function getProjects(): Promise<ProjectModel[]> {
    const root = process.cwd()
    const files = readdirSync(path.join(root, "contents", "projects"))
    const projects: ProjectModel[]= files.map((filename) => {
        const file = readFileSync(path.join(root, "contents", "projects", filename), "utf-8")
        const { content, data } = matter(file)
        return {
            title: data.title,
            description: content,
            tags: data.tags,
            thumbnailUrl: data.thumbnailUrl,
            projectUrl: data.projectUrl
        }
    })
    return projects
}