import { Articles } from '@components/Home/Articles'
import { Projects } from '@components/Home/Projects'
import { Layout } from '@components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/Home/Hero'
import { TechStack } from '../components/Home/TechStack'
import { getProjects, ProjectModel } from '@libs/projects'
import { getTechStacks, TechStackModel } from '@libs/techstack'
import { ArticleListItemModel, getArticleList } from '@libs/articles'
import { MetaTags } from '@components/SEO/MetaTags'
import { ContactModel, getContacts } from '@libs/contacts'

interface HomeProps {
  projects: ProjectModel[]
  techStacks: TechStackModel[]
  articles: ArticleListItemModel[],
  contacts: ContactModel[]
}

const Home: NextPage<HomeProps> = ({ projects, techStacks, articles, contacts }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Sr. Android Developer</title>
        <MetaTags
          title='Alfian Akmal Hanantio - Sr. Android Developer'
          description='I&apos;m an Android Developer with specializing in architecture, UX, design, and performance of Android applications with over 5 years of experience.'
          url="https://amalhanaja.com/"
        />
      </Head>
      <Layout contacts={contacts}>
        <Hero />
        <TechStack stacks={techStacks} />
        <Projects projects={projects} />
        <Articles articles={articles} />
      </Layout>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const projects = await getProjects()
  const techStacks = await getTechStacks()
  const articles = await getArticleList()
  const contacts = await getContacts()
  return {
    props: {
      projects: projects,
      techStacks: techStacks,
      articles: articles,
      contacts: contacts
    }
  }
}
