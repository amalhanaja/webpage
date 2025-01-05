import Link from 'next/link';
import {SiGithub, SiHashnode, SiLinkedin, SiTiktok, SiX, SiYoutube} from 'react-icons/si';
import {IconType} from 'react-icons';

const SocialMediaLink = ({href, Icon, label}: { href: string, Icon: IconType, label: string }) => {
    return (
        <Link href={href}
              target="_blank"
              className="hover:text-primary transition-colors duration-250"
              aria-label={label}
              title={label}
        >
            <Icon className="size-6"/>
        </Link>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-card text-card-foreground py-12 border-t-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-auto max-w-screen-xl">
                <div>
                    <h2 className="text-xl font-bold">ALFIAN AKMAL HANANTIO</h2>
                    <p className="text-sm mt-2">Software Engineer</p>
                    <p className="mt-4">
                        Email: <Link href="mailto:amalhanaja@gmail.com"
                                     aria-label="email"
                                     title="email"
                                     className="underline"
                    >
                        amalhanaja@gmail.com
                    </Link>
                    </p>
                    <p>Location: Jakarta, ID</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="mt-2 h-fit grid grid-cols-1 gap-2">
                        <li>
                            <Link href="/"
                                  className="hover:underline"
                                  title="Alfian Akmal Hanantio"
                                  aria-label="Alfian Akmal Hanantio">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/experiences"
                                className="hover:underline"
                                title="Experiences"
                                aria-label="Experiences"
                            >
                                Experiences
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="hover:underline"
                                title="Projects"
                                aria-label="Projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blogs"
                                className="hover:underline"
                                title="Blog"
                                aria-label="Blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/uses"
                                className="hover:underline"
                                title="Uses"
                                aria-label="Uses"
                            >
                                Uses
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Follow me</h2>
                    <div className="mt-4 flex space-x-4">
                        <SocialMediaLink Icon={SiLinkedin} href="https://linkedin.com/in/amalhanaja" label="linkedin"/>
                        <SocialMediaLink Icon={SiGithub} href="https://github.com/amalhanaja" label="github"/>
                        <SocialMediaLink Icon={SiTiktok} href="https://tiktok.com/@amalhanaja" label="tiktok"/>
                        <SocialMediaLink Icon={SiYoutube} href="https://youtube.com/@amalhanaja" label="youtube"/>
                        <SocialMediaLink Icon={SiX} href="https://x.com/amalhanaja" label="x"/>
                        <SocialMediaLink Icon={SiHashnode} href="https://hashnode.com/@amalhanaja" label="hashnode"/>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm border-t-2 border-foreground pt-4">
                <p>© 2025 ALFIAN AKMAL HANANTIO. All rights reserved.</p>
            </div>
        </footer>
    );
};