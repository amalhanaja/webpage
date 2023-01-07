import { Layout } from "@components/Layout";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { ArticleListItemModel, getArticleList } from "@libs/articles";
import { MetaTags } from "@components/SEO/MetaTags";
import { ContactModel, getContacts } from "@libs/contacts";
import { ArticleList } from "@components/Articles/ArticleList";

interface PageProps {
  articles: ArticleListItemModel[];
  contacts: ContactModel[];
  url: string;
  siteUrl: string;
}

const Page: NextPage<PageProps> = ({ articles, contacts, url, siteUrl }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Posts</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩`}
          url={url}
          siteUrl={siteUrl}
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

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const articles = await getArticleList();
  const contacts = await getContacts();
  const siteUrl: string = process.env.SITE_URL ?? "";
  return {
    props: {
      articles: articles,
      contacts: contacts,
      url: siteUrl + "/posts",
      siteUrl: siteUrl,
    },
  };
}
