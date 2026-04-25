import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import {
    mdiEmailOutline,
    mdiGithub,
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
    // Shared Tailwind class strings (keeps JSX readable).
    // Page shell: v2 base + v3 overrides merged.
    const page = "w-[21cm] h-[29.7cm] mx-auto mb-10 last:mb-0 overflow-hidden relative bg-white shadow-[inset_0_1px_0_0_rgba(55,31,24,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] text-sm print:mb-0 print:rounded-none print:shadow-none";

    // Section title (top-level in sidebar / inner) — v2 base + v3 overrides.
    const sectionTitle = "text-base text-primary-900 uppercase font-semibold relative pb-2 mb-6 tracking-[4px] leading-[1.1rem] after:content-[''] after:w-12 after:h-[2px] after:bg-primary after:absolute after:left-0 after:bottom-0";
    // Sidebar variant adds mb-5 (but v2 rule keeps mb-6; v3 overrides to mb-5).
    const sidebarSectionTitle = sectionTitle + " mb-5";
    // Nested inside `.experience` — v3 strips decoration, makes it compact.
    const nestedSectionTitle = "text-[11px] text-primary-500 font-medium pb-0 mb-0 tracking-[2px] bg-white w-full -mt-2 pl-1 -ml-1";

    // Section block inside sidebar — v2 rule overrides base padding.
    const sidebarSection = "pt-8 pb-0 px-5";
    // Section inside header — v3 rule.
    const headerSection = "px-8 py-4";

    // Resume-contact items (v2 base + v3 text-size override).
    const contact = "w-full flex flex-col gap-2";
    const contactItem = "flex items-center text-sm gap-2 text-gray-600 text-[13px]";
    const contactIcon = "size-4";

    // Resume-skills list.
    const skillsList = "grid grid-flow-row grid-cols-2 list-disc list-inside text-sm text-gray-600 gap-1";
    const skillsItem = "text-[13px]";

    // Experiences / projects nested layout.
    const experiencesWrap = "w-full flex flex-col gap-10";
    const experienceTitle = "text-sm text-primary-900 uppercase font-semibold mb-1";
    const experienceCompany = "text-sm text-gray-600 font-medium italic hover:underline flex items-center gap-1";
    const experienceDuration = "text-sm text-primary-900 font-medium";
    const experienceList = "list-disc text-gray-500 mt-2 pl-4 font-normal";
    const experienceListItem = "text-gray-600 mb-1 last:mb-0 text-xs";

    // v3 nested project-list: adds left/top border.
    const resumeProjects = "w-full flex flex-col gap-3 border-l-2 border-t-2 border-primary-200 pl-5 mt-4";
    const resumeProjectTitle = "text-sm text-primary-900 uppercase font-semibold mb-1 flex items-center gap-1 w-max";

    // Other projects list (no nested border, just a gap-3 column).
    const otherProjectsWrap = "w-full flex flex-col gap-3";
    const otherProjectTitle = "text-sm text-primary-900 uppercase font-semibold mb-1 block w-max";

    // Header typography (v2 base + v3 compact overrides).
    const designation = "font-Raleway text-lg text-gray-600 uppercase font-light mb-1";
    const name = "font-Raleway text-2xl text-primary-900 uppercase font-medium relative pb-1 mb-3 after:content-[''] after:w-12 after:h-[2px] after:bg-primary after:absolute after:left-0 after:bottom-0";
    const desc = "text-black text-[13px] leading-[1.6]";

    // Header block (page 1).
    const header = "w-full h-[258px] bg-primary-200 mt-4 pl-[280px]";
    // Sidebar frame.
    const sidebar = "w-[264px] h-full bg-white border-x-2 border-primary-200 absolute left-4 top-0";
    const sidebarAvatar = "w-full aspect-square rounded-full border-8 border-primary-300";
    const innerPadding = "pl-[280px]";

    const skills = [
        'JavaScript', 'TypeScript', 'React.js ', 'Next.js', 'Node.js',
        'Vue.js', 'Nuxt.js', 'Angular', 'jQuery', 'Bootstrap', 'TailwindCSS', 'GraphQL',
    ];

    const tools = ['Git', 'NPM', 'Yarn', 'Unit Testing', 'Figma', 'XD'];

    const links = [
        {label: 'al-fahad.me', icon: mdiWeb, url: 'https://www.al-fahad.me/'},
        {label: 'github.com/im-fahad', icon: mdiGithub, url: 'https://github.com/im-fahad'},
        {
            label: 'abdullah-al-fahad',
            icon: mdiLinkedin,
            url: 'https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/'
        },
        {label: 'npmjs.com/~al_fahad', icon: mdiNpm, url: 'https://www.npmjs.com/~al_fahad'},
    ];

    const experiencesByPage: Experience[][] = [
        [
            {
                designation: 'SENIOR FRONT-END ENGINEER',
                company: 'Revo Interactive',
                company_url: 'http://revo-interactive.com/',
                duration: '2024 - Present',
            },
            {
                designation: 'SENIOR FRONT-END ENGINEER',
                company: 'UMR Labs',
                company_url: 'https://umrlabs.com/',
                duration: '2023 - 2024',
                projects: [
                    {
                        name: 'Webaccess',
                        url: 'https://webaccess.ai/',
                        works: [
                            'Utilized Next.js and Tailwind CSS to create a visually appealing website with a focus on reusable components and responsive design.',
                            'Implemented and integrated RESTful APIs developed by the back-end team using Laravel.',
                            'Implemented Next-Auth for secure user authentication.',
                            'Developed WebAccess plugin using vanilla JavaScript to ensure seamless compatibility with any website implementing WebAccess.',
                        ],
                    },
                    {
                        name: 'Pintoe',
                        url: 'http://178.128.209.181/',
                        works: [
                            'Achieved pixel-perfect design by collaborating with the UI team to ensure consistency and usability.',
                            'Used Next.js and Tailwind CSS to design user interfaces, ensuring they were responsive, intuitive, and user-friendly.',
                            'Integrated WebRTC for real-time audio/video calling and online streaming capabilities, enhancing communication features for users.',
                            'Implemented WebSocket for live chat, enabling real-time data updates and communication between users.',
                            'Integrated PayPal for processing payments and purchasing premium plans, ensuring a secure and efficient transaction process.',
                            'Engaged in code reviews, refactoring, and implementation to ensure code quality and maintainability.',
                        ],
                    },
                    {
                        name: 'Sentinel EP',
                        url: 'https://sentinelepgroup.com/',
                        works: [
                            'Planned and implemented the website design and architecture from scratch using Vue.js and Tailwind CSS.',
                            'Integrated Vue.js with Laravel Blade architecture to enhance dynamic components and facilitate smoother backend logic integration.',
                            'We developed a robust admin area for managing Website data.',
                        ],
                    },
                ]
            },
        ],
        [
            {
                designation: 'SOFTWARE ENGINEER',
                company: 'iQuantile',
                company_url: 'https://www.iquantile.com/',
                duration: '2022 - 2023',
                projects: [
                    {
                        name: 'Quantibly',
                        url: 'https://quantibly.com/',
                        works: [
                            'Led the project lifecycle from planning to execution, using Vue.js to build the application from scratch, ensuring robust functionality and a smooth user experience.',
                            'Mentored junior team members to help enhance their skills, providing guidance, feedback, and support to foster their professional growth and development.',
                            'Worked with the backend team to integrate and optimize Django RESTful APIs for seamless data flow and functionality.',
                        ],
                    },
                ]
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
                        works: [
                            'Leveraged Nuxt.js and Bootstrap SCSS to design a visually appealing website with an integrated admin panel, emphasizing reusable components and a responsive layout.',
                            'Worked closely with the UI team to align on design specs, user experience goals, and visual integration.',
                            'Teamed up with the WordPress Plugin team to integrate and refine plugins, boosting functionality and ensuring full compatibility with the website.',
                            'Collaborated with the backend team to integrate and optimize Laravel RESTful APIs.',
                        ],
                    },
                ]
            },
            {
                designation: 'WEB DEVELOPER',
                company: 'Kodeeo',
                company_url: 'https://www.kodeeo.com/',
                duration: '2017 - 2018',
                works: [
                    'Contributed as a team player to the development of the company\'s branding website.',
                    'Collaborated with the backend team (PHP, Laravel) to gain insights and knowledge in backend development.',
                    'Worked on testing and bug fixing to ensure a stable and reliable application.'
                ],
            },
        ]
    ];

    const otherProjects = [
        {
            name: 'AI or NOT', url: 'https://www.aiornot.com/', works: [
                'Designed and implemented APIs with React, Tailwind CSS as a collaborative team player.',
                'Integrated PayPal for processing payments and purchasing premium plans.',
                'Worked on testing and bug fixing to ensure a stable and reliable application.'
            ]
        },
        {
            name: 'Floatpic', url: 'https://floatpic.com/', works: [
                'Collaborated on fixing bugs and implementing new features using React.',
            ]
        },
        {
            name: 'Eneos Dryice System', url: 'https://eneos-dryice-system.com', works: [
                'Worked on fixing bugs and implementing new features, as well as conducting QA testing, using Next.js, Tailwind CSS, and GraphQL.',
            ]
        },
        {
            name: 'Keeno', url: 'https://keeno.app/', works: [
                'Designed the entire website with HTML and CSS, and converted it into Laravel Blade architecture.',
            ]
        },
    ];

    return (
        <div
            className="w-full h-auto p-10 font-Raleway text-gray-600 [&_a]:hover:text-secondary-600 [&_a]:transition-all print:p-0"
            id="resumeNew">
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
                                <li className={skillsItem} key={key}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    {/*Tools*/}
                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Tools</h1>
                        <ul className={skillsList}>
                            {tools.map((tool, key) => (
                                <li className={skillsItem} key={key}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={sidebarSection}>
                        <h1 className={sidebarSectionTitle}>Education</h1>
                        <div className="w-full flex flex-col gap-2">
                            <div>
                                <h2 className="text-xs text-primary-900 font-semibold mb-1">
                                    Mechatronics Engineering (BSc)
                                </h2>
                                <Link href="https://wub.edu.bd/" target="_blank"
                                      className="text-xs text-gray-600 font-medium italic hover:underline flex items-center gap-1">
                                    <Icon size={.6} path={mdiLinkVariant}/>
                                    World University of Bangladesh
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/*header*/}
                <div className={header}>
                    <div className={headerSection}>
                        <h2 className={designation}>Front-end Developer</h2>
                        <h1 className={name}>Abdullah Al Fahad</h1>
                        <p className={desc}>
                            A dedicated and innovative Front-End Engineer with extensive experience in crafting
                            high-performance, user-centric web applications. Proficient in JavaScript, TypeScript, and
                            modern frameworks like React.js, Vue.js, and Angular. Skilled in server-side rendering using
                            Next.js and Nuxt.js, and adept at creating responsive, visually appealing interfaces with
                            Bootstrap, TailwindCSS, Chakra UI, and MUI (Material-UI). Passionate about leveraging
                            cutting-edge technologies to enhance user experience.
                        </p>
                    </div>
                </div>

                {/*inner*/}
                <div className={innerPadding}>
                    {/*Experiences page 0*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesByPage[0].map((exp, key) => {
                                if (key > 3) return;
                                return (
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
                                        {exp.projects && <div className={resumeProjects}>
                                            <h1 className={nestedSectionTitle}>Projects</h1>
                                            {exp.projects.map((project, p_key) => (
                                                <div key={p_key}>
                                                    <Link href={project.url} target="_blank"
                                                          className={resumeProjectTitle}>
                                                        <Icon size={.6} path={mdiLinkVariant}/>
                                                        {project.name}
                                                    </Link>
                                                    <ul className={experienceList}>
                                                        {project.works.map((work, key_2) => (
                                                            <li className={experienceListItem}
                                                                key={key_2}>{work}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>}

                                        {exp.works && <ul className={experienceList}>
                                            {exp.works.map((work, key_2) => (
                                                <li className={experienceListItem} key={key_2}>{work}</li>
                                            ))}
                                        </ul>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/*page 2*/}
            <div className={page}>
                {/*sidebar (collapsed)*/}
                <div className="w-0 h-full bg-white absolute left-4 top-0"/>
                <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]"></div>

                {/*inner*/}
                <div className="pl-[18px]">
                    {/*Experiences page 1*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesByPage[1].map((exp, key) => {
                                if (key > 3) return;
                                return (
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
                                        {exp.projects && <div className={resumeProjects}>
                                            <h1 className={nestedSectionTitle}>Projects</h1>
                                            {exp.projects.map((project, p_key) => (
                                                <div key={p_key}>
                                                    <Link href={project.url} target="_blank"
                                                          className={resumeProjectTitle}>
                                                        <Icon size={.6} path={mdiLinkVariant}/>
                                                        {project.name}
                                                    </Link>
                                                    <ul className={experienceList}>
                                                        {project.works.map((work, key_2) => (
                                                            <li className={experienceListItem}
                                                                key={key_2}>{work}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>}

                                        {exp.works && <ul className={experienceList}>
                                            {exp.works.map((work, key_2) => (
                                                <li className={experienceListItem} key={key_2}>{work}</li>
                                            ))}
                                        </ul>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/*Other Projects*/}
                    <div className="p-8 pb-3">
                        <h1 className={sectionTitle}>Other Projects</h1>
                        <div className={otherProjectsWrap}>
                            {otherProjects.map((project, key) => (
                                <div key={key}>
                                    <Link href={project.url} target="_blank" className={otherProjectTitle}>
                                        {project.name}
                                    </Link>
                                    {project.works && <ul className={experienceList}>
                                        {project.works.map((work, key_2) => (
                                            <li className={experienceListItem} key={key_2}>{work}</li>
                                        ))}
                                    </ul>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
