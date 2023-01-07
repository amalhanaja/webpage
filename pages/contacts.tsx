import { ContactItem } from "@components/Contacts/ContactItem";
import { Layout } from "@components/Layout";
import { ContactModel, getContacts } from "@libs/contacts";
import { NextPage } from "next";
import Head from "next/head";
import { MetaTags } from "@components/SEO/MetaTags";
import { getSocialIcon } from "@libs/helpers/SocialIcons";

interface ContactProps {
  contacts: ContactModel[];
  url: string;
}

const Contacts: NextPage<ContactProps> = ({ contacts, url }) => {
  return (
    <>
      <Head>
        <title>Alfian Akmal Hanantio - Contacts</title>
        <MetaTags
          title="Alfian Akmal Hanantio - Contacts"
          description="Feel free to contacts me"
          url={url}
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

export default Contacts;

export async function getStaticProps() {
  const contacts = await getContacts();
  return {
    props: {
      contacts: contacts,
      url: process.env.SITE_URL + "/contacts",
    },
  };
}
