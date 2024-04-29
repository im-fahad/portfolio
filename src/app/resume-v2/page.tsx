"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import {
    mdiAccount,
    mdiEmailOutline,
    mdiPhoneClassic,
    mdiMapMarkerRadiusOutline,
    mdiGithub,
    mdiLinkedin,
    mdiNpm, mdiPost, mdiDevTo, mdiWeb
} from "@mdi/js";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

export default function Resume() {
    return (
        <div className="resume" id="resumeNew">
            <div className="resume__page">
                {/*sidebar*/}
                <div className="resume__sidebar">
                    <div className={`resume__sidebar-header`}>
                        <Image className="resume__sidebar-avatar" src="/images/avatar.jpg" alt="Avatar" width={200}
                               height={200}/>
                    </div>
                    
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Contact
                        </h1>
                        <div className="resume-contact">
                            <Link href="tel:008801738-916935" className="resume-contact__item font-Roboto">
                                <Icon className="resume-contact__item-icon" path={mdiPhoneClassic}/>
                                +880 1738916935
                            </Link>
                            <Link href="mailto:abdullahalfahad.bd@gmail.com" className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiEmailOutline}/>
                                abdullahalfahad.bd@gmail
                            </Link>
                            <div className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiMapMarkerRadiusOutline}/>
                                Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>
                    
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Links
                        </h1>
                        <div className="resume-contact">
                            <Link href="https://www.al-fahad.me/" target="_blank" className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiWeb}/>
                                al-fahad.me
                            </Link>
                            <Link href="https://github.com/im-fahad" target="_blank" className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiGithub}/>
                                github.com/im-fahad
                            </Link>
                            <Link href="https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/" target="_blank"
                                  className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiLinkedin}/>
                                abdullah-al-fahad-0828b5186/
                            </Link>
                            <Link href="https://www.npmjs.com/~al_fahad" target="_blank"
                                  className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiNpm}/>
                                npmjs.com/~al_fahad
                            </Link>
                            <Link href="https://medium.com/@al-fahad" target="_blank" className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiPost}/>
                                medium.com/@al-fahad
                            </Link>
                            <Link href="https://dev.to/imfahad" target="_blank" className="resume-contact__item">
                                <Icon className="resume-contact__item-icon" path={mdiDevTo}/>
                                dev.to/imfahad
                            </Link>
                        </div>
                    </div>
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Skills
                        </h1>
                        <ul className="resume-skills">
                            <li className="resume-skills__item">JavaScript</li>
                            <li className="resume-skills__item">TypeScript</li>
                            <li className="resume-skills__item">React.js</li>
                            <li className="resume-skills__item">Next.js</li>
                            <li className="resume-skills__item">Redux</li>
                            <li className="resume-skills__item">NextAuth</li>
                            <li className="resume-skills__item">Auth.js</li>
                            <li className="resume-skills__item">React Native</li>
                            <li className="resume-skills__item">Vue.js</li>
                            <li className="resume-skills__item">Nuxt.js</li>
                            <li className="resume-skills__item">Vuex</li>
                            <li className="resume-skills__item">Pinia</li>
                            <li className="resume-skills__item">Angular</li>
                            <li className="resume-skills__item">Ionic</li>
                            <li className="resume-skills__item">Capacitor</li>
                            <li className="resume-skills__item">TailwindCSS</li>
                            <li className="resume-skills__item">WebRTC</li>
                            <li className="resume-skills__item">WebSocket</li>
                            <li className="resume-skills__item">Webpack</li>
                            <li className="resume-skills__item">HTML5</li>
                            <li className="resume-skills__item">CSS</li>
                            <li className="resume-skills__item">Larvel</li>
                            <li className="resume-skills__item">Djengo</li>
                            <li className="resume-skills__item">MySQL</li>
                        </ul>
                    </div>
                </div>
                
                {/*header*/}
                <div className="resume__header">
                    <div className="resume__section">
                        <h2 className="resume__designation">
                            Front-end Developer
                        </h2>
                        <h1 className="resume__name">
                            Abdullah Al Fahad
                        </h1>
                        <p className="resume__desc">
                            As an experienced frontend developer with over 5 years' expertise, I excel in
                            developing innovative solutions using JavaScript, TypeScript, and various frameworks like
                            React, React Native, Vue, and Angular for web and mobile apps.
                        </p>
                    </div>
                </div>
                
                {/*inner*/}
                <div className="resume__inner">
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Experience
                        </h1>
                        <div className="experiences">
                            <div className="experience">
                                <h2 className="experience__title">Senior Front-end engineer</h2>
                                <div className="flex items-center gap-2">
                                    <Link href="https://umrlabs.com/" target="_blank" className="experience__company">
                                        UMR Labs
                                    </Link>
                                    <span className="font-bold">-</span>
                                    <h4 className="experience__duration">2023 - Present</h4>
                                </div>
                                <ul className="experience__list">
                                    <li className="experience__list-item">
                                        Leading the front-end team at Versus Projects.
                                    </li>
                                    <li className="experience__list-item">
                                        Executed several solo projects with successful outcomes.
                                    </li>
                                    <li className="experience__list-item">
                                        Deployed WebRTC for audio/video calling and online streaming.
                                    </li>
                                    <li className="experience__list-item">
                                        Implemented WebSocket for real-time live chat, enabling real-time tracking of
                                        data changes between users.
                                    </li>
                                    <li className="experience__list-item">
                                        Utilized Webpack for package bundling and build processes.
                                    </li>
                                    <li className="experience__list-item">
                                        Engaged in close collaboration with the UX/UI designer.
                                    </li>
                                    <li className="experience__list-item">
                                        Engaged in code reviews, refactoring, and implementation.
                                    </li>
                                    <li className="experience__list-item">
                                        Developed mobile apps with Ionic and React Native.
                                    </li>
                                </ul>
                            </div>
                            <div className="experience">
                                <h2 className="experience__title">Software Engineer</h2>
                                <div className="flex items-center gap-2">
                                    <Link href="https://www.iquantile.com/" target="_blank"
                                          className="experience__company">
                                        iQuantile
                                    </Link>
                                    <span className="font-bold">-</span>
                                    <h4 className="experience__duration">2022 - 2023</h4>
                                </div>
                                <ul className="experience__list">
                                    <li className="experience__list-item">
                                        Team Lead Developer of ‘Quantibly’ Web Application.
                                    </li>
                                    <li className="experience__list-item">
                                        Update existing features for v1.
                                    </li>
                                    <li className="experience__list-item">
                                        Project Planning and Execute from scratch with Vue.js (v2).
                                    </li>
                                    <li className="experience__list-item">
                                        Collaborated closely with UX/UI designer.
                                    </li>
                                    <li className="experience__list-item">
                                        Guide junior team members to enhance their skills.
                                    </li>
                                    <li className="experience__list-item">
                                        Collaborated with backend team on Django RESTful APIs.
                                    </li>
                                </ul>
                            </div>
                            <div className="experience">
                                <h2 className="experience__title">Software Developer</h2>
                                <div className="flex items-center gap-2">
                                    <Link href="https://jouleslabs.com/" className="experience__company">
                                        Joules Labs
                                    </Link>
                                    <span className="font-bold">-</span>
                                    <h4 className="experience__duration">2018 - 2022</h4>
                                </div>
                                <ul className="experience__list">
                                    <li className="experience__list-item">
                                        Lead Developer of ‘Crowdfundly’ Web Application.
                                    </li>
                                    <li className="experience__list-item">
                                        Project Planning and Execute from scratch with Nuxt.js.
                                    </li>
                                    <li className="experience__list-item">
                                        Collaborated closely with the WordPress Plugin team.
                                    </li>
                                    {/*<li className="experience__list-item">*/}
                                    {/*    Engaged in rigorous collaboration with the backend team on Laravel RESTful APIs.*/}
                                    {/*</li>*/}
                                    <li className="experience__list-item">
                                        Develop mobile application using Ionic and react native.
                                    </li>
                                    <li className="experience__list-item">
                                        Contributed as a collaborative team member across various projects.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*page 2*/}
            <div className="resume__page">
                {/*sidebar*/}
                <div className="resume__sidebar">
                    <div className="resume__header !h-[2px] !bg-transparent"></div>
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Tools
                        </h1>
                        <ul className="resume-skills">
                            <li className="resume-skills__item">Git</li>
                            <li className="resume-skills__item">NPM</li>
                            <li className="resume-skills__item">Yarn</li>
                            <li className="resume-skills__item">Webpack</li>
                            <li className="resume-skills__item">Docker</li>
                            <li className="resume-skills__item">Unit Testing</li>
                            <li className="resume-skills__item">Figma</li>
                            <li className="resume-skills__item">Photoshop</li>
                            <li className="resume-skills__item">XD</li>
                        </ul>
                    </div>
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Languages
                        </h1>
                        <ul className="resume-skills !grid-cols-1">
                            <li className="resume-skills__item">Bengali (R/W/S)</li>
                            <li className="resume-skills__item">English (R/W/S)</li>
                            <li className="resume-skills__item">Hindi (S)</li>
                            <li className="resume-skills__item">Urdu (S)</li>
                        </ul>
                    </div>
                </div>
                <div className="resume__header !h-[2px]"></div>
                
                {/*inner*/}
                <div className="resume__inner">
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Experience
                        </h1>
                        <div className="experiences">
                            <div className="experience">
                                <h2 className="experience__title">Web Developer</h2>
                                <div className="flex items-center gap-2">
                                    <Link href="https://www.kodeeo.com/" target="_blank"
                                          className="experience__company">
                                        Kodeeo
                                    </Link>
                                    <span className="font-bold">-</span>
                                    <h4 className="experience__duration">2017 - 2018</h4>
                                </div>
                                <ul className="experience__list">
                                    <li className="experience__list-item">
                                        Gained expertise in web development (Frontend/Backend).
                                    </li>
                                    <li className="experience__list-item">
                                        Collaborated with Frontend (HTML, CSS, Vue) and Backend (PHP, Laravel) team.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Education
                        </h1>
                        <div className="experiences">
                            <div className="experience">
                                <h4 className="experience__duration mb-1">2017 - 2022</h4>
                                <h2 className="experience__title">Bachelor of Science</h2>
                                <Link href="https://wub.edu.bd/" target="_blank" className="experience__company">
                                    World University of Bangladesh
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="resume__section">
                        <h1 className="resume__section-title">
                            Projects
                        </h1>
                        <div className="resume-projects !gap-3">
                            <div className="resume-project">
                                <Link href="https://www.aiornot.com/" target="_blank"
                                      className="resume-project__title">AI or NOT</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        TypeScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Next.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        AWS Amplify
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Node.js
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://sentinelepgroup.com/" target="_blank"
                                      className="resume-project__title">Sentinel EP</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        TypeScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vue
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vuex
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="http://178.128.209.181/" target="_blank"
                                      className="resume-project__title">Pintoe</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        TypeScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Next.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        Redux Toolkit
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Ionic
                                    </li>
                                    <li className="resume-project__list-item">
                                        Capacitorjs
                                    </li>
                                    <li className="resume-project__list-item">
                                        WebRTC
                                    </li>
                                    <li className="resume-project__list-item">
                                        WebSocket
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://webaccess.ai/" target="_blank"
                                      className="resume-project__title">Webaccess</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        JavaScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        TypeScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vue.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vuex
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Ionic
                                    </li>
                                    <li className="resume-project__list-item">
                                        Capacitorjs
                                    </li>
                                    <li className="resume-project__list-item">
                                        WebSocket
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://bully-hub.com/" target="_blank"
                                      className="resume-project__title">Bully-Hub</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        JavaScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        jQuery
                                    </li>
                                    <li className="resume-project__list-item">
                                        Bootstrap
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://cleaning.accounts.llc/" target="_blank"
                                      className="resume-project__title">Guayllas Magic Cleaning</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        JavaScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vue.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vuex
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://quantibly.com/" target="_blank"
                                      className="resume-project__title">Quantibly</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        TypeScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vue.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vuex
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        WebSocket
                                    </li>
                                    <li className="resume-project__list-item">
                                        Django
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://crowdfundly.com/" target="_blank"
                                      className="resume-project__title">Crowdfundly</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        Nuxt.js
                                    </li>
                                    <li className="resume-project__list-item">
                                        Vuex
                                    </li>
                                    <li className="resume-project__list-item">
                                        TailwindCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        WebSocket
                                    </li>
                                    <li className="resume-project__list-item">
                                        Multi-Language
                                    </li>
                                    <li className="resume-project__list-item">
                                        Subdomain & Custom Domain
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                    <li className="resume-project__list-item">
                                        Wordpress Plugin
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-project">
                                <Link href="https://keeno.app/" target="_blank"
                                      className="resume-project__title">Keeno</Link>
                                <ul className="resume-project__list">
                                    <li className="resume-project__list-item">
                                        JavaScript
                                    </li>
                                    <li className="resume-project__list-item">
                                        jQuery
                                    </li>
                                    <li className="resume-project__list-item">
                                        Bootstrap
                                    </li>
                                    <li className="resume-project__list-item">
                                        SCSS
                                    </li>
                                    <li className="resume-project__list-item">
                                        Laravel
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
