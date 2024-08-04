import Link from "next/link";
import {SKILLS} from "@/enums";

export default function Projects() {
    const projects = {
        1: [
            {
                name: 'AI or NOT',
                url: 'https://www.aiornot.com/',
                description: '',
                skills: [SKILLS.ts, SKILLS.next, SKILLS.awsAmplify, SKILLS.tailwind, SKILLS.node]
            },
            {
                name: 'Sentinel EP',
                url: 'https://sentinelepgroup.com/',
                description: '',
                skills: [SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.laravel]
            },
            {
                name: 'Pintoe',
                url: 'http://178.128.209.181/',
                description: '',
                skills: [SKILLS.ts, SKILLS.next, SKILLS.redux, SKILLS.tailwind, SKILLS.ionic, SKILLS.capacitor, SKILLS.webSocket, SKILLS.laravel]
            },
            {
                name: 'Webaccess',
                url: 'https://webaccess.ai/',
                description: '',
                skills: [SKILLS.js, SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.ionic, SKILLS.capacitor, SKILLS.webSocket, SKILLS.laravel]
            },
            {
                name: 'Bully-Hub',
                url: 'https://bully-hub.com/',
                description: '',
                skills: [SKILLS.js, SKILLS.jQuery, SKILLS.bootstrap, SKILLS.laravel]
            },
            {
                name: 'Guayllas Magic Cleaning',
                url: 'https://cleaning.accounts.llc/',
                description: '',
                skills: [SKILLS.js, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.laravel]
            },
            {
                name: 'Quantibly',
                url: 'https://quantibly.com/',
                description: '',
                skills: [SKILLS.ts, SKILLS.vue, SKILLS.vuex, SKILLS.tailwind, SKILLS.webSocket, SKILLS.djengo]
            },
            {
                name: 'Crowdfundly',
                url: 'https://crowdfundly.com/',
                description: '',
                skills: [SKILLS.nuxt, SKILLS.vuex, SKILLS.tailwind, SKILLS.webSocket, SKILLS.ml, SKILLS.sc, SKILLS.laravel, SKILLS.wpPlugin]
            },
            {
                name: 'Keeno',
                url: 'https://keeno.app/',
                description: '',
                skills: [SKILLS.js, SKILLS.jQuery, SKILLS.bootstrap, SKILLS.scss, SKILLS.laravel]
            },
        ]
    };
    return (
        <div className="resume__section">
            <h1 className="resume__section-title">
                Projects
            </h1>
            <div className="resume-projects !gap-3">
                {projects[1].map((project, key) => (
                    <div className="resume-project" key={key}>
                        <Link href={project.url} target="_blank"
                              className="resume-project__title">{project.name}</Link>
                        <ul className="resume-project__list">
                            {project.skills.map((skill, key) => (
                                <li className="resume-project__list-item" key={key}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
