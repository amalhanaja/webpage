import { ImageAssets } from "@libs/helpers/ImageAssets"

export enum Account {
    EMAIL = "E-mail",
    DEV_TO = "DEV.to",
    TELEGRAM = "Telegram",
    TWITTER = "Twitter",
    LINKED_IN = "LinkedIn",
    GITHUB = "Github",
    CODEPEN = "Codepen"
}

export interface ContactModel {
    name: Account
    accountId: string
    accountUrl: string
}

const MY_CONTACTS: ContactModel[] = [
    {
        name: Account.EMAIL,
        accountId: "amalhanaja@gmail.com",
        accountUrl: "mailto:amalhanaja@gmail.com"
    },
    {
        name: Account.TELEGRAM,
        accountId: "@amalhanaja",
        accountUrl: "https://t.me/amalhanaja"
    },
    {
        name: Account.TWITTER,
        accountId: "@amalhanaja",
        accountUrl: "https://twitter.com/amalhanaja"
    },
    {
        name: Account.LINKED_IN,
        accountId: "@amalhanaja",
        accountUrl: "https://linkedin.com/in/amalhanaja"
    },
    {
        name: Account.GITHUB,
        accountId: "@amalhanaja",
        accountUrl: "https://github.com/amalhanaja"
    },
    {
        name: Account.DEV_TO,
        accountId: "amalhanaja",
        accountUrl: "https://dev.to/amalhanaja"
    },
    {
        name: Account.CODEPEN,
        accountId: "amalhanaja",
        accountUrl: "https://codepen.io/amalhanaja"
    },
]

export async function getContacts(): Promise<ContactModel[]> {
    return MY_CONTACTS
}
