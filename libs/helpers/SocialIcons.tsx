import { Account } from "@libs/contacts"
import { ReactElement } from "react"
import { FiMail } from "react-icons/fi"
import { FaCodepen, FaDev, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa"

export function getSocialIcon(account: Account): ReactElement {
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