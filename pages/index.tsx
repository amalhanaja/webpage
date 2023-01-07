import { Articles } from "@components/Home/Articles";
import { Projects } from "@components/Home/Projects";
import { Layout } from "@components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Home/Hero";
import { getProjects, ProjectModel } from "@libs/projects";
import { getTechStacks, TechStackModel } from "@libs/techstack";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";

interface HomeProps {
  projects: ProjectModel[];
  techStacks: TechStackModel[];
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
}

const Home: NextPage<HomeProps> = ({ projects, articles, contacts, url }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Software Engineer</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. I'm a software engineer specialized in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid experience in building complex applications with modern technologies. I'm currently learning everything.`}
          url={url}
        />
      </Head>
      <Layout contacts={contacts}>
        <Hero />
        <Articles articles={articles} />
        <Projects projects={projects} />
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const projects = await getProjects();
  const techStacks = await getTechStacks();
  const articles = await getArticleList();
  const contacts = await getContacts();
  return {
    props: {
      projects: projects,
      techStacks: techStacks,
      articles: articles,
      contacts: contacts,
      url: process.env.SITE_URL + "/",
    },
  };
}
