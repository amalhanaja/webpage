import { Articles } from "@components/Home/Articles";
import { Projects } from "@components/Home/Projects";
import { Layout } from "@components/Layout";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import Head from "next/head";
import { Hero } from "../components/Home/Hero";
import { TechStack } from "../components/Home/TechStack";
import { getProjects, ProjectModel } from "@libs/projects";
import { getTechStacks, TechStackModel } from "@libs/techstack";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";
import { url } from "inspector";
import { ArticleList } from "@components/Articles/ArticleList";

interface HomeProps {
  projects: ProjectModel[];
  techStacks: TechStackModel[];
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
}

const Home: NextPage<HomeProps> = ({
  projects,
  techStacks,
  articles,
  contacts,
  url,
}) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Sr. Android Developer</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Sr. Android Developer"
          description="I'm an Android Developer with specializing in architecture, UX, design, and performance of Android applications with over 5 years of experience."
          url={url}
        />
      </Head>
      <Layout contacts={contacts}>
        <h2 className="text-primary text-2xl font-bold mt-8 px-2">
          /Posts
        </h2>
        <ArticleList articles={articles} className="px-2 py-4" />
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
