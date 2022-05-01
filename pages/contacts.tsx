import { ContactItem } from "@components/Contacts/ContactItem"
import { Layout } from "@components/Layout"
import { ContactModel, getContacts } from "@libs/contacts"
import { NextPage } from "next"
import Head from "next/head"
import { MetaTags } from "@components/SEO/MetaTags"
import { getSocialIcon } from "@libs/helpers/SocialIcons"

interface ContactProps {
    contacts: ContactModel[]
}

const Contacts: NextPage<ContactProps> = ({ contacts }) => {

    return (
        <>
            <Head>
                <title>Alfian Akmal Hanantio - Contacts</title>
                <MetaTags
                    title='Alfian Akmal Hanantio - Contacts'
                    description='Feel free to contacts me'
                    url="https://amalhanaja.com/contacts"
                />
            </Head>
            <Layout contacts={contacts}>
                <section id="contacts" className="px-4 py-8 mt-20">
                    <h2 className="font-bold text-2xl">Contacts</h2>
                    <p className="mt-2">Feel free to contacts me</p>
                    <div className="grid grid-cols-1 gap-2 mt-6">
                        {contacts.map((contact) => (<ContactItem key={contact.accountUrl} contact={contact} icon={getSocialIcon(contact.name)} />))}
                    </div>

                </section>
            </Layout>
        </>
    )
}

export default Contacts

export async function getStaticProps() {
    const contacts = await getContacts()
    return {
        props: {
            contacts: contacts
        }
    }
}