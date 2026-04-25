import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import {
    mdiEmailOutline,
    mdiGithub,
    mdiGitlab,
    mdiLinkedin,
    mdiLinkVariant,
    mdiMapMarkerRadiusOutline,
    mdiNpm,
    mdiPhoneClassic,
    mdiWeb
} from "@mdi/js";

interface Project {
    name: string;
    url: string;
    skills?: string[];
    works: string[];
}

interface Experience {
    designation: string;
    company: string;
    company_url: string;
    duration: string;
    projects?: Project[];
    works?: string[];
}

export default function Resume() {
    const page = "w-[21cm] h-[29.7cm] mx-auto mb-10 last:mb-0 overflow-hidden relative bg-white shadow-[inset_0_1px_0_0_rgba(55,31,24,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] text-sm print:mb-0 print:rounded-none print:shadow-none";

    // Section title — slimmed underline (#11): 32px wide, 1px high.
    const sectionTitle = "text-base text-primary-900 uppercase font-semibold relative pb-2 mb-6 tracking-[4px] leading-[1.1rem] after:content-[''] after:w-8 after:h-px after:bg-primary-400 after:absolute after:left-0 after:bottom-0";
    const sidebarSectionTitle = sectionTitle + " mb-5";

    const sidebarSection = "pt-8 pb-0 px-5";
    const headerSection = "px-8 py-4";

    const contact = "w-full flex flex-col gap-2";
    const contactItem = "flex items-center text-[13px] gap-2 text-gray-600";
    const contactIcon = "size-4";

    const skillsList = "grid grid-flow-row grid-cols-2 list-disc list-inside text-[13px] text-gray-600 gap-1";

    const experiencesWrap = "w-full flex flex-col gap-8";
    const experienceTitle = "text-sm text-primary-900 uppercase font-semibold mb-1";
    const experienceCompany = "text-sm text-gray-600 font-medium italic hover:underline flex items-center gap-1";
    const experienceDuration = "text-sm text-primary-900 font-medium";
    const experienceList = "list-disc text-gray-500 mt-2 pl-4 font-normal";
    const experienceListItem = "text-gray-600 mb-1 last:mb-0 text-xs leading-snug";

    // Nested project block — no header box (#2), just indentation + a left border.
    const nestedProjects = "w-full flex flex-col gap-3 border-l-2 border-primary-200 pl-4 mt-3";
    const projectName = "text-sm text-primary-900 uppercase font-semibold flex items-center gap-1 w-max";
    const skillTags = "flex flex-wrap gap-1.5 mt-1";
    const skillTag = "text-[10px] uppercase tracking-wide text-gray-500 bg-primary-100 px-2 py-0.5 rounded";

    const otherProjectsWrap = "w-full flex flex-col gap-4";
    const otherProjectTitle = "text-sm text-primary-900 uppercase font-semibold mb-1 flex items-center gap-1 w-max";

    const designation = "font-Raleway text-lg text-gray-600 uppercase font-light mb-1";
    const name = "font-Raleway text-2xl text-primary-900 uppercase font-medium relative pb-1 mb-3 after:content-[''] after:w-8 after:h-px after:bg-primary-400 after:absolute after:left-0 after:bottom-0";
    const desc = "text-black text-[13px] leading-[1.6]";

    const header = "w-full h-[258px] bg-primary-200 mt-4 pl-[280px]";
    const sidebar = "w-[264px] h-full bg-white border-x-2 border-primary-200 absolute left-4 top-0";
    const sidebarAvatar = "w-full aspect-square rounded-full border-8 border-primary-300";
    const innerPadding = "pl-[280px]";

    const skills = [
        'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js',
        'Vue.js', 'Nuxt.js', 'Angular', 'jQuery', 'Bootstrap', 'TailwindCSS', 'GraphQL',
    ];

    const tools = ['Git', 'NPM', 'Yarn', 'Unit Testing', 'Figma', 'XD'];

    const links = [
        {label: 'al-fahad.me', icon: mdiWeb, url: 'https://www.al-fahad.me/'},
        {label: 'github.com/im-fahad', icon: mdiGithub, url: 'https://github.com/im-fahad'},
        {label: 'gitlab.com/im-fahad', icon: mdiGitlab, url: 'https://gitlab.com/im-fahad'},
        {
            label: 'im-fahad',
            icon: mdiLinkedin,
            url: 'https://www.linkedin.com/in/im-fahad/'
        },
        {label: 'npmjs.com/~al_fahad', icon: mdiNpm, url: 'https://www.npmjs.com/~al_fahad'},
    ];

    // Page 1 experiences — IDEEZA + Revo + UMR Labs
    const experiencesPage1: Experience[] = [
        {
            designation: 'SENIOR FRONT-END ENGINEER',
            company: 'IDEEZA',
            company_url: 'https://ideeza.com/',
            duration: '2025 - Present',
            projects: [
                {
                    name: 'Ideeza Platform',
                    url: 'https://ideeza.com/',
                    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Generative AI', 'Web3', 'Three.js'],
                    works: [
                        'Building the frontend for an AI + blockchain platform that turns product ideas into hardware blueprints (circuits, 3D models, code) and secures ownership on-chain.',
                        'Owning the AI surface — prompt UX, streaming LLM responses, and the idea-to-blueprint generation flow.',
                        'Implementing Web3 wallet integration and NFT marketplace flows for trading blueprints with the $IDZ token.',
                        'Collaborating with the Three.js team on interactive 2D/3D viewers and customization tools for generated blueprints.',
                    ],
                },
            ],
        },
        {
            designation: 'SENIOR FRONT-END ENGINEER',
            company: 'Revo Interactive',
            company_url: 'http://revo-interactive.com/',
            duration: '2024 - 2025',
            works: [
                'Worked across multiple client projects in partnership with STEAH Inc. (Japan), a social-tech studio building for healthcare, welfare, and environmental sectors.',
                'Collaborated with cross-border (Japan/Bangladesh) teams on contract development, including planning, UI/UX, and shipping production features.',
                // 'Led frontend architecture and code-quality standards across the team, mentoring engineers on React, Next.js, and TypeScript best practices.',
            ],
            projects: [
                {
                    name: 'Eneos Dryice System',
                    url: 'https://eneos-dryice-system.com',
                    skills: ['Next.js', 'GraphQL', 'Tailwind CSS'],
                    works: [
                        'Implemented features and QA for an industrial dry-ice cleaning platform.',
                    ],
                },
            ],
        },
    ];

    // Page 2 experiences — UMR Labs + iQuantile + Joules Labs + Kodeeo
    const experiencesPage2: Experience[] = [
        {
            designation: 'SENIOR FRONT-END ENGINEER',
            company: 'UMR Labs',
            company_url: 'https://umrlabs.com/',
            duration: '2023 - 2024',
            projects: [
                {
                    name: 'Webaccess',
                    url: 'https://webaccess.ai/',
                    skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel'],
                    works: [
                        'Built a WCAG/ADA-compliant accessibility plugin in vanilla JavaScript that drops into any host site.',
                        'Designed reusable Next.js component library and integrated Laravel REST APIs with Next-Auth.',
                    ],
                },
                {
                    name: 'Pintoe',
                    url: 'http://178.128.209.181/',
                    skills: ['Next.js', 'TypeScript', 'Redux', 'WebRTC', 'WebSocket', 'Tailwind CSS'],
                    works: [
                        'Built real-time audio/video calling and live streaming with WebRTC.',
                        'Implemented WebSocket-driven live chat and PayPal checkout for premium plans.',
                    ],
                },
                {
                    name: 'Sentinel EP',
                    url: 'https://sentinelepgroup.com/',
                    skills: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Laravel'],
                    works: [
                        'Architected the Vue.js + Tailwind frontend from scratch and integrated it with Laravel Blade.',
                    ],
                },
            ],
        },
        {
            designation: 'SOFTWARE ENGINEER',
            company: 'iQuantile',
            company_url: 'https://www.iquantile.com/',
            duration: '2022 - 2023',
            projects: [
                {
                    name: 'Quantibly',
                    url: 'https://quantibly.com/',
                    skills: ['Vue.js', 'Vuex', 'Tailwind CSS', 'Django'],
                    works: [
                        'Led the Vue.js rewrite of a SaaS platform for the social sector from planning to launch.',
                        'Mentored junior engineers through code reviews and pairing.',
                        'Integrated Django REST APIs for fundraising, financial, and engagement modules.',
                    ],
                },
            ],
        },
        {
            designation: 'SOFTWARE DEVELOPER',
            company: 'Joules Labs',
            company_url: 'https://www.jouleslabs.com/',
            duration: '2018 - 2022',
            projects: [
                {
                    name: 'Crowdfundly',
                    url: 'https://crowdfundly.com/',
                    skills: ['Nuxt.js', 'Vuex', 'Tailwind CSS', 'Laravel', 'WordPress Plugin'],
                    works: [
                        'Built a multi-tenant crowdfunding SaaS with Nuxt.js, including admin panel and reusable component library.',
                        'Coordinated with the WordPress Plugin team to ship a companion plugin alongside the SaaS.',
                        'Integrated Laravel REST APIs and partnered with the UI team on design specs.',
                    ],
                },
            ],
        },
        {
            designation: 'WEB DEVELOPER',
            company: 'Kodeeo',
            company_url: 'https://www.kodeeo.com/',
            duration: '2017 - 2018',
            works: [
                'Contributed to the company branding website as part of a small team.',
                'Worked alongside the PHP/Laravel backend team and gained backend fundamentals.',
            ],
        },
    ];

    const otherProjects: Project[] = [
        {
            name: 'Traders Connect',
            url: 'https://tradersconnect.com/',
            skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
            works: [
                'Redesigned the trading-management platform UI for copy-trading, performance analytics, and broker comparison.',
                'Implemented updated REST APIs across the frontend, integrating real-time account data and execution flows.',
            ],
        },
        {
            name: 'AI or NOT',
            url: 'https://www.aiornot.com/',
            skills: ['Next.js', 'TypeScript', 'AWS Amplify', 'Tailwind CSS'],
            works: [
                'Implemented PayPal-based premium plan purchases and bug fixes across the React codebase.',
            ],
        },
        {
            name: 'Floatpic',
            url: 'https://floatpic.com/',
            skills: ['Next.js', 'TypeScript', 'AWS Amplify'],
            works: [
                'Shipped feature work and bug fixes on a React-based image-sharing product.',
            ],
        },
        {
            name: 'Keeno',
            url: 'https://keeno.app/',
            skills: ['JavaScript', 'jQuery', 'SCSS', 'Laravel'],
            works: [
                'Built the eCommerce frontend in HTML/SCSS and converted it into Laravel Blade templates.',
            ],
        },
    ];

    const renderExperience = (exp: Experience, key: number) => (
        <div key={key}>
            <h2 className={experienceTitle}>{exp.designation}</h2>
            <div className="flex items-center gap-2">
                <Link href={exp.company_url} target="_blank" className={experienceCompany}>
                    <Icon size={.6} path={mdiLinkVariant}/>
                    {exp.company}
                </Link>
                <span className="font-bold">-</span>
                <h4 className={experienceDuration}>{exp.duration}</h4>
            </div>

            {exp.projects && (
                <div className={nestedProjects}>
                    {exp.projects.map((project, p_key) => (
                        <div key={p_key}>
                            <Link href={project.url} target="_blank" className={projectName}>
                                <Icon size={.6} path={mdiLinkVariant}/>
                                {project.name}
                            </Link>
                            {project.skills && (
                                <div className={skillTags}>
                                    {project.skills.map((s) => (
                                        <span key={s} className={skillTag}>{s}</span>
                                    ))}
                                </div>
                            )}
                            <ul className={experienceList}>
                                {project.works.map((work, key_2) => (
                                    <li className={experienceListItem} key={key_2}>{work}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {exp.works && (
                <ul className={experienceList}>
                    {exp.works.map((work, key_2) => (
                        <li className={experienceListItem} key={key_2}>{work}</li>
                    ))}
                </ul>
            )}
        </div>
    );

    return (
        <div
            className="w-full h-auto p-10 font-Raleway text-gray-600 [&_a]:hover:text-secondary-600 [&_a]:transition-all print:p-0"
            id="resumeNew">

            {/* PAGE 1 */}
            <div className={page}>
                {/*sidebar*/}
                <div className={sidebar}>
                    <div className="p-8 mt-4 h-[258px] flex items-center justify-center">
                        <Image className={sidebarAvatar} src="/images/avatar.jpg" alt="Avatar" width={200}
                               height={200}/>
                    </div>

                    {/*Contact*/}
                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Contact</h1>
                        <div className={contact}>
                            <Link href="tel:008801738-916935" className={`${contactItem} font-Roboto`}>
                                <Icon className={contactIcon} path={mdiPhoneClassic}/>
                                +880 1738916935
                            </Link>
                            <Link href="mailto:abdullahalfahad.bd@gmail.com" className={contactItem}>
                                <Icon className={contactIcon} path={mdiEmailOutline}/>
                                abdullahalfahad.bd@gmail.com
                            </Link>
                            <div className={contactItem}>
                                <Icon className={contactIcon} path={mdiMapMarkerRadiusOutline}/>
                                Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>

                    {/*Links*/}
                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Links</h1>
                        <div className={contact}>
                            {links.map((link, key) => (
                                <Link key={key} href={link.url} target="_blank" className={contactItem}>
                                    <Icon className={contactIcon} path={link.icon}/>
                                    {link.label}
                                    <Icon size={.6} path={mdiLinkVariant}/>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/*Skills*/}
                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Skills</h1>
                        <ul className={skillsList}>
                            {skills.map((skill, key) => (
                                <li key={key}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/*Tools*/}
                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Tools</h1>
                        <ul className={skillsList}>
                            {tools.map((tool, key) => (
                                <li key={key}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/*header*/}
                <div className={header}>
                    <div className={headerSection}>
                        <h2 className={designation}>Senior Front-end Engineer</h2>
                        <h1 className={name}>Abdullah Al Fahad</h1>
                        <p className={desc}>
                            Senior Frontend Engineer with 7+ years building production web and mobile applications
                            across React, Next.js, Vue, and Nuxt. Currently shipping IDEEZA, an AI + blockchain
                            platform turning product ideas into on-chain hardware blueprints. Past work includes
                            Webaccess (a WCAG/ADA-compliant accessibility plugin), Pintoe (real-time WebRTC + WebSocket),
                            and Crowdfundly (multi-tenant SaaS). Comfortable owning features end-to-end — from
                            architecture and API integration to component design and ship.
                        </p>
                    </div>
                </div>

                {/*inner — Education + Experience*/}
                <div className={innerPadding}>
                    {/*Education*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Education</h1>
                        <div className="w-full flex flex-col gap-2">
                            <div>
                                <h2 className="text-sm text-primary-900 uppercase font-semibold mb-1">
                                    Mechatronics Engineering (BSc)
                                </h2>
                                <div className="flex items-center gap-2">
                                    <Link href="https://wub.edu.bd/" target="_blank"
                                          className="text-sm text-gray-600 font-medium italic hover:underline flex items-center gap-1">
                                        <Icon size={.6} path={mdiLinkVariant}/>
                                        World University of Bangladesh
                                    </Link>
                                    <span className="font-bold">-</span>
                                    <h4 className="text-sm text-primary-900 font-medium">2017 – 2022</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Experience*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesPage1.map((exp, key) => renderExperience(exp, key))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2 */}
            <div className={page}>
                {/*sidebar (collapsed) — single left border*/}
                <div className="w-0 h-full bg-white border-l-2 border-primary-200 absolute left-4 top-0"/>
                <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]"></div>

                {/*inner*/}
                <div className="pl-[18px]">
                    {/*Experience continued*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesPage2.map((exp, key) => renderExperience(exp, key))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 3 — Kodeeo Experience + Other Projects */}
            <div className={page}>
                {/*sidebar (collapsed) — single left border*/}
                <div className="w-0 h-full bg-white border-l-2 border-primary-200 absolute left-4 top-0"/>
                <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]"></div>

                {/*inner*/}
                <div className="pl-[18px]">

                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Other Projects</h1>
                        <div className={otherProjectsWrap}>
                            {otherProjects.map((project, key) => (
                                <div key={key}>
                                    <Link href={project.url} target="_blank" className={otherProjectTitle}>
                                        <Icon size={.6} path={mdiLinkVariant}/>
                                        {project.name}
                                    </Link>
                                    {project.skills && (
                                        <div className={skillTags}>
                                            {project.skills.map((s) => (
                                                <span key={s} className={skillTag}>{s}</span>
                                            ))}
                                        </div>
                                    )}
                                    <ul className={experienceList}>
                                        {project.works.map((work, key_2) => (
                                            <li className={experienceListItem} key={key_2}>{work}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/*Languages*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Languages</h1>
                        <ul className="flex flex-wrap list-disc list-inside text-sm text-gray-600 gap-x-8 gap-y-1">
                            <li>Bengali</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
