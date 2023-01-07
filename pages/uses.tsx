import { Layout } from "@components/Layout";
import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { MetaTags } from "@components/SEO/MetaTags";
import { getUsesContent } from "@libs/uses";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ContactModel, getContacts } from "@libs/contacts";

interface PageProps {
  contacts: ContactModel[];
  content: string;
  url: string;
  siteUrl: string;
}

const Page: NextPage<PageProps> = ({ contacts, content, url, siteUrl }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Uses</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Software Engineer"
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid experience in building complex applications with modern technologies. I'm currently learning everything. I'm passionate about software engineering and love to stay updated with the latest technology trends. Apart from programming, I love to play video games like Mobile Legend Bang Bang with my friends and play guitar. I also love to watch movies, anime, and TV series.`}
          url={url}
          siteUrl={siteUrl}
        />
      </Head>
      <Layout contacts={contacts}>
        <h2 className="text-primary text-2xl font-bold mt-8 px-4">/Uses</h2>
        <ReactMarkdown
          className="px-4 py-4"
          components={{
            h2: ({ ...props }) => (
              <h2
                className="text-xl text-secondary font-semibold"
                {...props}
              ></h2>
            ),
            ul: ({ ...props }) => (
              <ul
                {...props}
                className="py-1 mb-4"
                style={{ listStyle: "inside" }}
              ></ul>
            ),
            li: ({ ...props }) => (
              <li className="text-base text-content-200-dark" {...props}></li>
            ),
            a: ({ ...props }) => (
              <a
                {...props}
                className="hover:text-primary"
                target={"_blank"}
              ></a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </Layout>
    </>
  );
};

export default Page;

export async function getStaticProps(): Promise<GetStaticPropsResult<PageProps>> {
  const usesContents = await getUsesContent();
  const contacts = await getContacts();
  const siteUrl: string = process.env.SITE_URL ?? ""
  return {
    props: {
      content: usesContents,
      contacts: contacts,
      url: siteUrl + "/uses",
      siteUrl: siteUrl
    },
  };
}
