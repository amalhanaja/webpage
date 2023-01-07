import { ContactItem } from "@components/Contacts/ContactItem";
import { Layout } from "@components/Layout";
import { ContactModel, getContacts } from "@libs/contacts";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { MetaTags } from "@components/SEO/MetaTags";
import { getSocialIcon } from "@libs/helpers/SocialIcons";

interface PageProps {
  contacts: ContactModel[];
  url: string;
  siteUrl: string;
}

const Page: NextPage<PageProps> = ({ contacts, url, siteUrl }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Contacts</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Contacts"
          description={`I'm Alfian Akmal Hanantio. a software engineer specializing in android development based in Sidoarjo, Indonesia 🇮🇩 with rock-solid experience in building complex applications with modern technologies. I'm currently learning everything. I'm passionate about software engineering and love to stay updated with the latest technology trends. Apart from programming, I love to play video games like Mobile Legend Bang Bang with my friends and play guitar. I also love to watch movies, anime, and TV series.`}
          url={url}
          siteUrl={siteUrl}
        />
      </Head>
      <Layout contacts={contacts}>
        <h2 className="font-bold text-2xl text-primary px-4 mt-8">/Contacts</h2>
        <p className="mt-2 px-4">Feel free to contacts me</p>
        <div className="grid grid-cols-1 gap-2 py-4 px-4">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.accountUrl}
              contact={contact}
              icon={getSocialIcon(contact.name)}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Page;

export async function getStaticProps(): Promise<GetStaticPropsResult<PageProps>> {
  const contacts = await getContacts();
  const siteUrl: string = process.env.SITE_URL ?? ""
  return {
    props: {
      contacts: contacts,
      url: process.env.SITE_URL + "/contacts",
      siteUrl: siteUrl
    },
  };
}
