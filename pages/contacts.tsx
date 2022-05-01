import { ContactItem } from "@components/Contacts/ContactItem"
import { Layout } from "@components/Layout"
import { Account, ContactModel, getContacts } from "@libs/contacts"
import { NextPage } from "next"
import { ReactElement } from "react"
import { FiMail } from "react-icons/fi"
import { FaCodepen, FaDev, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import { IconType } from "react-icons"

interface ContactProps {
    contacts: ContactModel[]
}

const Contacts: NextPage<ContactProps> = ({ contacts }) => {
    function getAccountFromAccount(account: Account): ReactElement {
        switch (account) {
            case Account.EMAIL:
                return <FiMail />
            case Account.DEV_TO:
                return <FaDev />
            case Account.TELEGRAM:
                return <FaTelegram />
            case Account.TWITTER:
                return <FaTwitter />
            case Account.LINKED_IN:
                return <FaLinkedin />
            case Account.GITHUB:
                return <FaGithub />
            case Account.CODEPEN:
                return <FaCodepen />
        }
    }

    return (
        <Layout>
            <section id="contacts" className="px-4 py-8 mt-20">
                <h2 className="font-bold text-2xl">Contacts</h2>
                <p className="mt-2">Feel free to contacts me</p>
                <div className="grid grid-cols-1 gap-2 mt-6">
                    {contacts.map((contact) => (<ContactItem key={contact.accountUrl} contact={contact} icon={getAccountFromAccount(contact.name)} />))}
                </div>

            </section>
        </Layout>
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