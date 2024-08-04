import Link from "next/link";
import Icon from "@mdi/react";
import {
    mdiDevTo,
    mdiGithub,
    mdiLinkedin,
    mdiNpm,
    mdiPost,
    mdiWeb
} from "@mdi/js";

export default function Links() {
    const links = [
        {
            label: 'al-fahad.me',
            icon: mdiWeb,
            url: 'https://www.al-fahad.me/',
        },
        {
            label: 'github.com/im-fahad',
            icon: mdiGithub,
            url: 'https://github.com/im-fahad',
        },
        {
            label: 'abdullah-al-fahad',
            icon: mdiLinkedin,
            url: 'https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/',
        },
        {
            label: 'npmjs.com/~al_fahad',
            icon: mdiNpm,
            url: 'https://www.npmjs.com/~al_fahad',
        },
        {
            label: 'medium.com/@al-fahad',
            icon: mdiPost,
            url: 'https://medium.com/@al-fahad',
        },
        {
            label: 'dev.to/imfahad',
            icon: mdiDevTo,
            url: 'https://dev.to/imfahad',
        },
    ];
    
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Links
            </h1>
            <div className="resume-contact">
                {links.map((link, key) => (
                    <Link key={key} href={link.url} target="_blank" className="resume-contact__item">
                        <Icon className="resume-contact__item-icon" path={link.icon}/>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
