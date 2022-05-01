import { Articles } from '@components/Home/Articles'
import { Projects } from '@components/Home/Projects'
import { Layout } from '@components/Layout'
import type { NextPage } from 'next'
import { Hero } from '../components/Home/Hero'
import { TechStack } from '../components/Home/TechStack'
import { getProjects, ProjectModel } from '@libs/projects'
import { getTechStacks, TechStackModel } from '@libs/techstack'
import { ArticleListItemModel, getArticleList } from '@libs/articles'

interface HomeProps {
  projects: ProjectModel[]
  techStacks: TechStackModel[]
  articles: ArticleListItemModel[]
}

const Home: NextPage<HomeProps> = ({ projects, techStacks, articles }) => {
  return (
    <Layout>
      <Hero />
      <TechStack stacks={techStacks} />
      <Projects projects={projects} />
      <Articles articles={articles} />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const projects = await getProjects()
  const techStacks = await getTechStacks()
  const articles = await getArticleList()
  return {
    props: {
      projects: projects,
      techStacks: techStacks,
      articles: articles
    }
  }
}
