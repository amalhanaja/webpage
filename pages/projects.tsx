import { Layout } from "@components/Layout";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { getProjects, ProjectModel } from "@libs/projects";
import { TechStackModel } from "@libs/techstack";
import { ArticleListItemModel } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";
import { ProjectList } from "@components/Projects/ProjectList";

interface PageProps {
  projects: ProjectModel[];
  contacts: ContactModel[];
  url: string;
  siteUrl: string;
}

const Page: NextPage<PageProps> = ({ projects, contacts, url, siteUrl }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Projects</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid experience in building complex applications with modern technologies. I'm currently learning everything. I'm passionate about software engineering and love to stay updated with the latest technology trends. Apart from programming, I love to play video games like Mobile Legend Bang Bang with my friends and play guitar. I also love to watch movies, anime, and TV series.`}
          url={url}
          siteUrl={siteUrl}
        />
      </Head>
      <Layout contacts={contacts}>
        <h2 className="text-primary text-2xl font-bold mt-8 px-4">/Projects</h2>
        <ProjectList projects={projects} className="py-4 px-4" />
      </Layout>
    </>
  );
};

export default Page;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const projects = await getProjects();
  const contacts = await getContacts();
  const siteUrl: string = process.env.SITE_URL ?? "";
  return {
    props: {
      projects: projects,
      contacts: contacts,
      url: siteUrl + "/projects",
      siteUrl: siteUrl,
    },
  };
}
