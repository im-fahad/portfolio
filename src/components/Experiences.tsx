"use client"
import Link from "next/link";

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
                                      className="experience__company">
                                    {exp.company}
                                </Link>
                                <span className="font-bold">-</span>
                                <h4 className="experience__duration">{exp.duration}</h4>
                            </div>
                            <ul className="experience__list">
                                {exp.works.map((work, key_2) => (
                                    <li className="experience__list-item" key={key_2}>
                                        {work}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
