import { Layout } from "@components/Layout";
import type {
  NextPage,
} from "next";
import Head from "next/head";
import { getProjects, ProjectModel } from "@libs/projects";
import { getTechStacks, TechStackModel } from "@libs/techstack";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";
import { ProjectList } from "@components/Projects/ProjectList";

interface PageProps {
  projects: ProjectModel[];
  techStacks: TechStackModel[];
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
}

const Page: NextPage<PageProps> = ({
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
        <h2 className="text-primary text-2xl font-bold mt-8 px-4">/Projects</h2>
        <ProjectList projects={projects} className="py-4 px-4"/>
      </Layout>
    </>
  );
};

export default Page;

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
