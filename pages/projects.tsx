import { Layout } from "@components/Layout";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { getProjects, ProjectModel } from "@libs/projects";
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
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩`}
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
