import { Articles } from "@components/Home/Articles";
import { Projects } from "@components/Home/Projects";
import { Layout } from "@components/Layout";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Home/Hero";
import { getProjects, ProjectModel } from "@libs/projects";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";

interface PageProps {
  projects: ProjectModel[];
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
  siteUrl: string;
}

const Page: NextPage<PageProps> = ({
  projects,
  articles,
  contacts,
  url,
  siteUrl,
}) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Software Engineer</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩`}
          url={url}
          siteUrl={siteUrl}
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

export default Page;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const projects = await getProjects();
  const articles = await getArticleList();
  const contacts = await getContacts();
  const siteUrl: string = process.env.SITE_URL ?? "";
  return {
    props: {
      projects: projects,
      articles: articles,
      contacts: contacts,
      url: siteUrl + "/",
      siteUrl: siteUrl,
    },
  };
}
