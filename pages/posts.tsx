import { Layout } from "@components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import { ProjectModel } from "@libs/projects";
import { TechStackModel } from "@libs/techstack";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";
import { ArticleList } from "@components/Articles/ArticleList";

interface PageProps {
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
}

const Page: NextPage<PageProps> = ({ articles, contacts, url }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Posts</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. I'm a software engineer specialized in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid experience in building complex applications with modern technologies. I'm currently learning everything.`}
          url={url}
        />
      </Head>
      <Layout contacts={contacts}>
        <h2 className="text-primary text-2xl font-bold mt-8 px-4">/Posts</h2>
        <ArticleList articles={articles} className="px-4 py-4" />
      </Layout>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const articles = await getArticleList();
  const contacts = await getContacts();
  return {
    props: {
      articles: articles,
      contacts: contacts,
      url: process.env.SITE_URL + "/",
    },
  };
}
