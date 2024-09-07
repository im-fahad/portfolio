import Link from "next/link";
import Icon from "@mdi/react";
import {mdiLinkVariant, mdiOpenInNew} from "@mdi/js";
import {SKILLS} from "@/enums";

interface Props {
    page: number
}

export default function Experiences(props: Props) {
    const {page} = props;
    const experiences = [
        [
            {
                designation: 'SENIOR FRONT-END ENGINEER',
                company: 'UMR Labs',
                company_url: 'https://umrlabs.com/',
                duration: '2023 - Present',
                projects: [
                    {
                        name: 'Webaccess',
                        url: 'https://webaccess.ai/',
                        description: '',
                        skills: [SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.webSocket, SKILLS.laravel],
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
                        description: '',
                        skills: [SKILLS.ts, SKILLS.next, SKILLS.redux, SKILLS.tailwind, SKILLS.webRTC, SKILLS.laravel],
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
                        description: 'A comprehensive website for a security agency specializing in personal security guard services',
                        skills: [SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.laravel],
                        works: [
                            'Planned and implemented the website design and architecture from scratch using Vue.js and Tailwind CSS.',
                            // 'Implemented and integrated RESTful APIs developed by the back-end team using Laravel.',
                            'Integrated Vue.js with Laravel Blade architecture to enhance dynamic components and facilitate smoother backend logic integration.',
                            'We developed a robust admin area for managing Website data.',
                        ],
                    },
                    {
                        name: 'Guayllas Magic Cleaning',
                        url: 'https://cleaning.accounts.llc/',
                        description: '',
                        skills: [SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.laravel],
                        works: [
                            'Led the front-end team to ensure smooth and efficient development processes.',
                            'Collaborated with the front-end team on code reviews, bug fixes, and deployment to ensure high-quality deliverables.'
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
                        description: '',
                        skills: [SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.webSocket, SKILLS.djengo],
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
                        description: '',
                        skills: [SKILLS.nuxt, SKILLS.vuex, SKILLS.tailwind, SKILLS.webSocket, SKILLS.ml, SKILLS.sc, SKILLS.laravel, SKILLS.wpPlugin],
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
    ]
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Experience
            </h1>
            <div className="experiences">
                {experiences[page].map((exp, key) => {
                    if (key > 3) return;
                    return (
                        <div className="experience" key={key}>
                            <h2 className="experience__title">{exp.designation}</h2>
                            <div className="flex items-center gap-2">
                                <Link href={exp.company_url} target="_blank"
                                      className="experience__company flex items-center gap-1">
                                    <Icon size={.6} path={mdiLinkVariant} className="link-icon"/>
                                    {exp.company}
                                </Link>
                                <span className="font-bold">-</span>
                                <h4 className="experience__duration">{exp.duration}</h4>
                            </div>
                            {exp.projects && <div className="resume-projects">
                                <h1 className="resume__section-title">
                                    Projects
                                </h1>
                                {exp.projects.map((project, key) => (
                                    <div className="resume-project" key={key}>
                                        <Link href={project.url} target="_blank"
                                              className="resume-project__title !flex items-center gap-1">
                                            <Icon size={.6} path={mdiLinkVariant} className="link-icon"/>
                                            {project.name}
                                        </Link>
                                        <ul className="experience__list">
                                            {project.works.map((work, key_2) => (
                                                <li className="experience__list-item" key={key_2}>
                                                    {work}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>}
                            
                            {exp.works && <ul className="experience__list">
                                {exp.works.map((work, key_2) => (
                                    <li className="experience__list-item" key={key_2}>
                                        {work}
                                    </li>
                                ))}
                            </ul>}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
