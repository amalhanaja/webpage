import { Layout } from "@components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import { MetaTags } from "@components/SEO/MetaTags";
import { getUsesContent } from "@libs/uses";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ContactModel, getContacts } from "@libs/contacts";
import Contacts from "./contacts";

interface PageProps {
  contacts: ContactModel[];
  content: string;
  url: string;
}

const Page: NextPage<PageProps> = ({ contacts, content, url }) => {
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

export async function getStaticProps() {
  const usesContents = await getUsesContent();
  const contacts = await getContacts();
  return {
    props: {
      content: usesContents,
      contacts: contacts,
      url: process.env.SITE_URL + "/",
    },
  };
}
