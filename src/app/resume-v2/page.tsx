import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import {
    mdiDevTo,
    mdiEmailOutline,
    mdiGithub,
    mdiLinkedin,
    mdiMapMarkerRadiusOutline,
    mdiNpm,
    mdiPhoneClassic,
    mdiPost,
    mdiWeb
} from "@mdi/js";

export default function Resume() {
    const page = "w-[21cm] h-[29.7cm] mx-auto mb-10 last:mb-0 overflow-hidden relative bg-white shadow-[inset_0_1px_0_0_rgba(55,31,24,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] text-sm print:mb-0 print:rounded-none print:shadow-none";

    const sectionTitle = "text-base text-primary-900 uppercase font-semibold relative pb-2 mb-6 tracking-[4px] after:content-[''] after:w-12 after:h-[2px] after:bg-primary after:absolute after:left-0 after:bottom-0";
    const section = "p-8 pb-3";
    const sidebarSection = "pt-8 pb-0 px-5";

    const sidebar = "w-[264px] h-full bg-white border-x-2 border-primary-200 absolute left-4 top-0";
    const sidebarAvatar = "w-full aspect-square rounded-full border-8 border-primary-300";

    const contact = "w-full flex flex-col gap-2";
    const contactItem = "flex items-center text-sm gap-2 text-gray-600";
    const contactIcon = "size-4";

    const skillsList = "grid grid-flow-row grid-cols-2 list-disc list-inside text-sm text-gray-600 gap-1";

    const header = "w-full h-[258px] bg-primary-200 mt-4 pl-[280px]";
    const innerPadding = "pl-[280px]";

    const designation = "font-Raleway text-xl text-gray-600 uppercase font-light mb-2";
    const name = "font-Raleway text-3xl text-primary-900 uppercase font-medium relative pb-4 mb-4 after:content-[''] after:w-12 after:h-[2px] after:bg-primary after:absolute after:left-0 after:bottom-0";
    const desc = "text-sm leading-[1.6]";

    const experiencesWrap = "w-full flex flex-col gap-10";
    const experienceTitle = "text-sm text-primary-900 uppercase font-semibold mb-1";
    const experienceCompany = "text-sm text-gray-600 font-medium italic hover:underline";
    const experienceDuration = "text-sm text-primary-900 font-medium";
    const experienceList = "list-disc text-gray-500 mt-2 pl-4 font-normal";
    const experienceListItem = "text-gray-600 mb-1 last:mb-0 text-sm";

    const projectsWrap = "w-full flex flex-col gap-3";
    const projectTitle = "text-sm text-primary-900 uppercase font-semibold mb-1 block w-max";
    const projectList = "list-disc text-gray-500 pl-4 font-normal inline-flex flex-wrap gap-x-6";
    const projectListItem = "text-gray-600 mb-1 last:mb-0 text-xs";

    const skills = [
        'JavaScript', 'TypeScript', 'React.js ', 'Next.js', 'Redux', 'Node.js', 'NextAuth', 'Auth.js',
        'AWS Amplify', 'React Native', 'Vue.js', 'Nuxt.js', 'Vuex', 'Pinia', 'Angular', 'Ionic',
        'Capacitor', 'jQuery', 'Bootstrap', 'TailwindCSS', 'WebRTC', 'WebSocket', 'Webpack', 'HTML5',
        'CSS', 'Larvel', 'Djengo', 'MySQL', 'GraphQL',
    ];

    const tools = ['Git', 'NPM', 'Yarn', 'Webpack', 'Docker', 'Unit Testing', 'Figma', 'Photoshop', 'XD'];

    const links = [
        {label: 'al-fahad.me', icon: mdiWeb, url: 'https://www.al-fahad.me/'},
        {label: 'github.com/im-fahad', icon: mdiGithub, url: 'https://github.com/im-fahad'},
        {
            label: 'abdullah-al-fahad',
            icon: mdiLinkedin,
            url: 'https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/'
        },
        {label: 'npmjs.com/~al_fahad', icon: mdiNpm, url: 'https://www.npmjs.com/~al_fahad'},
        {label: 'medium.com/@al-fahad', icon: mdiPost, url: 'https://medium.com/@al-fahad'},
        {label: 'dev.to/imfahad', icon: mdiDevTo, url: 'https://dev.to/imfahad'},
    ];

    const experiencesByPage = [
        [
            {
                designation: 'SENIOR FRONT-END ENGINEER',
                company: 'UMR Labs',
                company_url: 'https://umrlabs.com/',
                duration: '2023 - Present',
                works: [
                    'Leading the front-end team at Versus Projects.',
                    'Executed several solo projects with successful outcomes.',
                    'Deployed WebRTC for audio/video calling and online streaming.',
                    'Implemented WebSocket for real-time live chat, enabling real-time tracking of data changes between users.',
                    'Utilized Webpack for package bundling and build processes.',
                    'Engaged in close collaboration with the UX/UI designer.',
                    'Engaged in code reviews, refactoring, and implementation.',
                    'Developed mobile apps with Ionic and React Native.',
                ]
            },
            {
                designation: 'SOFTWARE ENGINEER',
                company: 'iQuantile',
                company_url: 'https://www.iquantile.com/',
                duration: '2022 - 2023',
                works: [
                    'Team Lead Developer of ‘Quantibly’ Web Application.',
                    'Update existing features for v1.',
                    'Project Planning and Execute from scratch with Vue.js (v2).',
                    'Collaborated closely with UX/UI designer.',
                    'Guide junior team members to enhance their skills.',
                    'Collaborated with backend team on Django RESTful APIs.',
                ]
            },
            {
                designation: 'SOFTWARE DEVELOPER',
                company: 'Joules Labs',
                company_url: 'https://www.jouleslabs.com/',
                duration: '2018 - 2022',
                works: [
                    'Lead Developer of ‘Crowdfundly’ Web Application.',
                    'Project Planning and Execute from scratch with Nuxt.js.',
                    'Collaborated closely with the WordPress Plugin team.',
                    'Develop mobile application using Ionic and react native.',
                    'Contributed as a collaborative team member across various projects.',
                ]
            },
        ],
        [
            {
                designation: 'WEB DEVELOPER',
                company: 'Kodeeo',
                company_url: 'https://www.kodeeo.com/',
                duration: '2017 - 2018',
                works: [
                    'Gained expertise in web development (Frontend/Backend).',
                    'Collaborated with Frontend (HTML, CSS, Vue) and Backend (PHP, Laravel) team.',
                ]
            },
        ]
    ];

    const projects = [
        {
            name: 'AI or NOT', url: 'https://www.aiornot.com/',
            skills: ['TypeScript', 'Next.js', 'AWS Amplify', 'TailwindCSS', 'Node.js']
        },
        {
            name: 'Sentinel EP', url: 'https://sentinelepgroup.com/',
            skills: ['TypeScript', 'Vue.js', 'Vuex', 'TailwindCSS', 'Larvel']
        },
        {
            name: 'Pintoe', url: 'http://178.128.209.181/',
            skills: ['TypeScript', 'Next.js', 'Redux', 'TailwindCSS', 'Ionic', 'Capacitor', 'WebSocket', 'Larvel']
        },
        {
            name: 'Webaccess', url: 'https://webaccess.ai/',
            skills: ['JavaScript', 'TypeScript', 'Vue.js', 'Vuex', 'TailwindCSS', 'Ionic', 'Capacitor', 'WebSocket', 'Larvel']
        },
        {
            name: 'Bully-Hub', url: 'https://bully-hub.com/',
            skills: ['JavaScript', 'jQuery', 'Bootstrap', 'Larvel']
        },
        {
            name: 'Guayllas Magic Cleaning', url: 'https://cleaning.accounts.llc/',
            skills: ['JavaScript', 'Vue.js', 'Vuex', 'TailwindCSS', 'Larvel']
        },
        {
            name: 'Quantibly', url: 'https://quantibly.com/',
            skills: ['TypeScript', 'Vue.js', 'Vuex', 'TailwindCSS', 'WebSocket', 'Djengo']
        },
        {
            name: 'Crowdfundly', url: 'https://crowdfundly.com/',
            skills: ['Nuxt.js', 'Vuex', 'TailwindCSS', 'WebSocket', 'Multi-Language', 'Subdomain & Custom Domain', 'Larvel', 'Wordpress Plugin']
        },
        {
            name: 'Keeno', url: 'https://keeno.app/',
            skills: ['JavaScript', 'jQuery', 'Bootstrap', 'SCSS', 'Larvel']
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
                        <h1 className={sectionTitle}>Contact</h1>
                        <div className={contact}>
                            <Link href="tel:008801738-916935" className={`${contactItem} font-Roboto`}>
                                <Icon className={contactIcon} path={mdiPhoneClassic}/>
                                +880 1738916935
                            </Link>
                            <Link href="mailto:abdullahalfahad.bd@gmail.com" className={contactItem}>
                                <Icon className={contactIcon} path={mdiEmailOutline}/>
                                abdullahalfahad.bd@gmail
                            </Link>
                            <div className={contactItem}>
                                <Icon className={contactIcon} path={mdiMapMarkerRadiusOutline}/>
                                Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>

                    {/*Links*/}
                    <div className={sidebarSection}>
                        <h1 className={sectionTitle}>Links</h1>
                        <div className={contact}>
                            {links.map((link, key) => (
                                <Link key={key} href={link.url} target="_blank" className={contactItem}>
                                    <Icon className={contactIcon} path={link.icon}/>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/*Skills*/}
                    <div className={sidebarSection}>
                        <h1 className={sectionTitle}>Skills</h1>
                        <ul className={skillsList}>
                            {skills.map((skill, key) => (
                                <li key={key}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*header*/}
                <div className={header}>
                    <div className={section}>
                        <h2 className={designation}>Front-end Developer</h2>
                        <h1 className={name}>Abdullah Al Fahad</h1>
                        <p className={desc}>
                            As an experienced frontend developer with over 5 years' expertise, I excel in
                            developing innovative solutions using JavaScript, TypeScript, and various frameworks like
                            React, React Native, Vue, and Angular for web and mobile apps.
                        </p>
                    </div>
                </div>

                {/*inner*/}
                <div className={innerPadding}>
                    {/*Experiences page 0*/}
                    <div className={section}>
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesByPage[0].map((exp, key) => {
                                if (key > 3) return;
                                return (
                                    <div key={key}>
                                        <h2 className={experienceTitle}>{exp.designation}</h2>
                                        <div className="flex items-center gap-2">
                                            <Link href={exp.company_url} target="_blank"
                                                  className={experienceCompany}>
                                                {exp.company}
                                            </Link>
                                            <span className="font-bold">-</span>
                                            <h4 className={experienceDuration}>{exp.duration}</h4>
                                        </div>
                                        <ul className={experienceList}>
                                            {exp.works.map((work, key_2) => (
                                                <li className={experienceListItem} key={key_2}>{work}</li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/*page 2*/}
            <div className={page}>
                {/*sidebar*/}
                <div className={sidebar}>
                    <div className="w-full h-[2px] bg-transparent mt-4 pl-[280px]"></div>

                    {/*Tools*/}
                    <div className={sidebarSection}>
                        <h1 className={sectionTitle}>Tools</h1>
                        <ul className={skillsList}>
                            {tools.map((tool, key) => (
                                <li key={key}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={sidebarSection}>
                        <h1 className={sectionTitle}>Languages</h1>
                        <ul className="grid grid-flow-row grid-cols-1 list-disc list-inside text-sm text-gray-600 gap-1">
                            <li>Bengali (R/W/S)</li>
                            <li>English (R/W/S)</li>
                            <li>Hindi (S)</li>
                            <li>Urdu (S)</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]"></div>

                {/*inner*/}
                <div className={innerPadding}>
                    {/*Experiences page 1*/}
                    <div className={section}>
                        <h1 className={sectionTitle}>Experience</h1>
                        <div className={experiencesWrap}>
                            {experiencesByPage[1].map((exp, key) => {
                                if (key > 3) return;
                                return (
                                    <div key={key}>
                                        <h2 className={experienceTitle}>{exp.designation}</h2>
                                        <div className="flex items-center gap-2">
                                            <Link href={exp.company_url} target="_blank"
                                                  className={experienceCompany}>
                                                {exp.company}
                                            </Link>
                                            <span className="font-bold">-</span>
                                            <h4 className={experienceDuration}>{exp.duration}</h4>
                                        </div>
                                        <ul className={experienceList}>
                                            {exp.works.map((work, key_2) => (
                                                <li className={experienceListItem} key={key_2}>{work}</li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={section}>
                        <h1 className={sectionTitle}>Education</h1>
                        <div className={experiencesWrap}>
                            <div>
                                <h4 className="text-sm text-primary-900 font-medium mb-1">2017 - 2022</h4>
                                <h2 className={experienceTitle}>Bachelor of Science</h2>
                                <Link href="https://wub.edu.bd/" target="_blank" className={experienceCompany}>
                                    World University of Bangladesh
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Projects*/}
                    <div className={section}>
                        <h1 className={sectionTitle}>Projects</h1>
                        <div className={projectsWrap}>
                            {projects.map((project, key) => (
                                <div key={key}>
                                    <Link href={project.url} target="_blank" className={projectTitle}>
                                        {project.name}
                                    </Link>
                                    <ul className={projectList}>
                                        {project.skills.map((skill, key_2) => (
                                            <li className={projectListItem} key={key_2}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
