"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import {mdiAccount} from "@mdi/js";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

export default function Resume() {
    return (
        <div className="cv-wrapper" id="resume">
            <div className="cv-wrapper__inner">
                <div className="page-wrapper">
                    <div className="page-wrapper__inner">
                        {/*profile section*/}
                        <div className="profile">
                            <div className="profile__image">
                                <Image width="200" height="48"
                                       src="/images/avatar.jpg"
                                       alt="avatar"/>
                            </div>

                            <div className="profile__info">
                                <h2 className="profile__name">Abdullah Al Fahad</h2>

                                <div className="profile__info-inner">
                                    {/*<div className="profile__item">*/}
                                    {/*    <span className="profile__item-key">Date of birth:</span>*/}
                                    {/*    <span className="profile__item-value">Aug 24, 1994</span>*/}
                                    {/*</div>*/}
                                    <div className="profile__item">
                                        <span className="profile__item-key">Phone:</span>
                                        <span className="profile__item-value">+880 1738-916935</span>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">Email:</span>
                                        <a className="profile__item-value" href="mailto:abdullahalfahad.bd@gmail.com"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            abdullahalfahad.bd @gmail.com</a>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">Address:</span>
                                        <span
                                            className="profile__item-value">Sreepur(1740), Gazipur, Dhaka, Bangladesh.</span>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">GitHub:</span>
                                        <a className="profile__item-value" href="https://github.com/im-fahad"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            github.com/im-fahad
                                        </a>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">NPM:</span>
                                        <a className="profile__item-value" href="https://www.npmjs.com/~al_fahad"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            npmjs.com/~al_fahad
                                        </a>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">Profile:</span>
                                        <a className="profile__item-value" href="https://www.al-fahad.me/"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            https://al-fahad.me
                                        </a>
                                    </div>
                                    <div className="profile__item">
                                        <span className="profile__item-key">linkedin:</span>
                                        <a className="profile__item-value"
                                           href="https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            /abdullah-al-fahad-0828b5186/
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*profile about section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Profile</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <p className="section__description">
                                    As an accomplished software engineer with 5+ years of hands-on experience, I
                                    specialize in crafting cutting-edge solutions using JavaScript, TypeScript, and
                                    various frameworks like React, React Native, Next.js, Vue, Nuxt.js, and Angular.
                                    <br/>
                                    My proficiency extends to CSS frameworks like Tailwind and Bootstrap, along with
                                    pre-processors such as SCSS and Sass, enabling me to create visually stunning and
                                    adaptable user interfaces that exceed design standards and accessibility
                                    requirements.
                                    <br/>
                                    Driven by a passion for innovation and excellence, I eagerly tackle new challenges,
                                    solve complex problems, and deliver impactful software solutions that delight users.
                                </p>
                            </div>
                        </div>

                        {/*professional skills section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Skills</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="skills">
                                    <div className="skills__item">
                                        <strong className="mr-[5px]">Frontend:</strong>
                                        JavaScript, TypeScript, React, Next.js, Redux, Vue, Nuxt.js, Vuex, JQuery,
                                        Tailwind
                                    </div>

                                    <div className="skills__item">
                                        <strong className="mr-[5px]">App Development:</strong>
                                        React Native, Ionic, Capacitor
                                    </div>

                                    <div className="skills__item">
                                        <strong className="mr-[5px]">Backend:</strong>
                                        Laravel, Django, MySQL
                                    </div>

                                    <div className="skills__item">
                                        <strong className="mr-[5px]">Tools:</strong>
                                        Git, Docker, Photoshop, Figma, XD, MS Word, MS Excel
                                    </div>

                                    {/*<div className="skills__item">*/}
                                    {/*    <strong className="mr-[5px]">Soft Skills:</strong>*/}
                                    {/*    Photoshop, Figma, XD, MS Word, MS Excel*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>

                        {/*education section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Education</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2017 – 2022
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Mechatronics | B.S.C</h4>
                                        <span className="section__item-subtitle">
                                        World University of Bangladesh
                                    </span>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2012 – 2016
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Mechanical Technology | Diploma in
                                            Engineering</h4>
                                        <span className="section__item-subtitle">
                                        Shyamoli Ideal Polytechnic Institute
                                    </span>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2012
                                            <br/>
                                            Gazipur, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Business Studies | S.S.C</h4>
                                        <span className="section__item-subtitle">
                                        A.D.B.M High School
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*languages section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Languages</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="skills">
                                    <div className="skills__row">
                                        <div className="skills__row-item">
                                            <div className="skills__item">English</div>
                                        </div>
                                        <div className="skills__row-item">
                                            <div className="skills__item">Bengali</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*work experience section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Work experience</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2023 – present
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Senior Software Engineer</h4>
                                        <a href="https://umrlabs.com/" target="_blank"
                                           className="section__item-subtitle">UMR LABS</a>
                                        <p className="section__item-text">
                                            I am proud to serve as a Senior Software Engineer at UMR LABS.
                                            UMR LABS a professional technology services provider for small and
                                            large businesses worldwide. Minority and women-owned with locations in
                                            the US-UK-BD.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-wrapper">
                    <div className="page-wrapper__inner">
                        {/*work experience section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Work experience</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2022 – 2023
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Software Engineer</h4>
                                        <a href="https://www.iquantile.com/" target="_blank"
                                           className="section__item-subtitle">IQuantile</a>
                                        <p className="section__item-text">
                                            During my tenure at IQuantile as a Software Engineer, I honed my
                                            expertise by actively contributing to a myriad of web applications. My
                                            role involved collaborating on various projects, where I leveraged my
                                            skills to enhance functionality and streamline user experiences.
                                        </p>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2018 – 2022
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Software Developer</h4>
                                        <a href="https://jouleslabs.com" target="_blank"
                                           className="section__item-subtitle">JoulesLabs</a>
                                        <p className="section__item-text">
                                            During my time at JoulesLabs as a software developer, I worked on various
                                            projects involving web and mobile applications, with a focus on eCommerce,
                                            crowdfunding, and management systems. I played a key role in optimizing
                                            these platforms for seamless user experiences and business success..
                                        </p>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            2017 – 2018
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Web Developer</h4>
                                        <a href="https://www.kodeeo.com/" target="_blank"
                                           className="section__item-subtitle">Kodeeo</a>
                                        <p className="section__item-text">
                                            I've had the privilege of serving as a web developer at Kodeeo, where I
                                            also completed an enriching internship. My experience at Kodeeo allowed
                                            me to refine my skills and gain invaluable hands-on experience in the
                                            field of web development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*projects section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Projects</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="projects">
                                    <div className="projects__item">
                                        <Link href="https://sentinelepgroup.com/" className="projects__item-title">
                                            Sentinel EP
                                        </Link>
                                        <p className="projects__item-description">
                                            Sentinel Executive Protection offers on-demand security services, boasting a
                                            curated team of experts in security, technology, and logistics. As the lead
                                            Software Engineer, I'm currently leading a project involving web and mobile
                                            applications. My role includes managing development, guiding the team, and
                                            ensuring the delivery of an innovative solution.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">TypeScript</div>
                                            <div className="criteria-2__item">Vue</div>
                                            <div className="criteria-2__item">Vuex</div>
                                            <div className="criteria-2__item">Tailwind</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="http://178.128.209.181/" className="projects__item-title">
                                            Pintoe
                                        </Link>
                                        <p className="projects__item-description">
                                            Pintoe, a dynamic social media platform available on web and mobile,
                                            offers a range of features for both free and premium users. As lead
                                            Software Engineer, I oversee development for both platforms, guiding the
                                            team to deliver innovative solutions. After a successful in-house 1st
                                            version release, we're now advancing to the 2nd version to enhance user
                                            experience and functionality.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">Next.js</div>
                                            <div className="criteria-2__item">Redux</div>
                                            <div className="criteria-2__item">TypeScript</div>
                                            <div className="criteria-2__item">Tailwind</div>
                                            <div className="criteria-2__item">Ionic</div>
                                            <div className="criteria-2__item">Capacitorjs</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="https://webaccess.ai/" className="projects__item-title">
                                            Webaccess
                                        </Link>
                                        <p className="projects__item-description">
                                            Webaccess AI provides a comprehensive solution for web accessibility,
                                            meeting WCAG and ADA guidelines for EU, USA and other countries. Built
                                            with JavaScript, TypeScript, CSS, and Webpack. I led its development
                                            from start to finish, ensuring that both the 1st and 2nd versions were
                                            successfully delivered.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">JavaScript</div>
                                            <div className="criteria-2__item">TypeScript</div>
                                            <div className="criteria-2__item">CSS</div>
                                            <div className="criteria-2__item">Webpack</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="https://bully-hub.com/" className="projects__item-title">
                                            Bully-Hub
                                        </Link>
                                        <p className="projects__item-description">
                                            Bully-Hub connects responsible breeders with loving families,
                                            prioritizing high breeding standards and dog welfare. As a frontend team
                                            lead, I ensured the project's success by guiding and supporting the
                                            team.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">JavaScript</div>
                                            <div className="criteria-2__item">jQuery</div>
                                            <div className="criteria-2__item">Bootstrap</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-wrapper">
                    <div className="page-wrapper__inner">
                        {/*projects section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">Projects</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="projects">
                                    <div className="projects__item">
                                        <Link href="https://cleaning.accounts.llc/" className="projects__item-title">
                                            Guayllas Magic Cleaning
                                        </Link>
                                        <p className="projects__item-description">
                                            Guayllas Magic Cleaning was a passion for cleaning the world one
                                            customer at a time. I oversaw the frontend team's development efforts,
                                            ensuring a high-quality product was delivered through effective guidance
                                            and coordination.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">JavaScript</div>
                                            <div className="criteria-2__item">TypeScript</div>
                                            <div className="criteria-2__item">Vue</div>
                                            <div className="criteria-2__item">Vuex</div>
                                            <div className="criteria-2__item">Tailwind</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="https://quantibly.com/" className="projects__item-title">
                                            Quantibly
                                        </Link>
                                        <p className="projects__item-description">
                                            Quantibly, an innovative SaaS solution for the Social Sector, offers
                                            comprehensive support for critical functions like data collection,
                                            fundraising, financial management, and customer engagement. As the lead
                                            Frontend Engineer, I've driven its development, ensuring seamless
                                            integration and optimal performance to meet our clients' diverse needs.
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">JavaScript</div>
                                            <div className="criteria-2__item">TypeScript</div>
                                            <div className="criteria-2__item">Vue</div>
                                            <div className="criteria-2__item">Vuex</div>
                                            <div className="criteria-2__item">Tailwind</div>
                                            <div className="criteria-2__item">Django</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="http://crowdfundly.com/" className="projects__item-title">
                                            Crowdfundly
                                        </Link>
                                        <p className="projects__item-description">
                                            CrowdFundly is a dynamic SaaS project dedicated to crowdfunding, enabling
                                            users to create fundraising platforms, launch campaigns, and secure funding.
                                            With technologies like Laravel, Nuxt.js, Scss, and Docker, we ensure
                                            robustness and scalability. As the lead Frontend Developer for 1.5 years,
                                            I've driven frontend development forward since the project's inception.
                                        </p>

                                        <div className="criteria-2">
                                            <div className="criteria-2__item">Nuxt.js</div>
                                            <div className="criteria-2__item">Vuex</div>
                                            <div className="criteria-2__item">Tailwind</div>
                                            {/*<div className="criteria-2__item">Payment Gateway</div>*/}
                                            <div className="criteria-2__item">Multi-Language</div>
                                            <div className="criteria-2__item">Subdomain & Custom Domain</div>
                                            <div className="criteria-2__item">Laravel</div>
                                            <div className="criteria-2__item">Wordpress Plugin</div>
                                        </div>
                                    </div>
                                    <div className="projects__item">
                                        <Link href="https://keeno.app/" className="projects__item-title">Keeno</Link>
                                        <p className="projects__item-description">
                                            Keeno is an eCommerce application. I have designed the full application with
                                            HTML and SCSS in the Laravel Blade. Here I have worked in following
                                            criteria:
                                        </p>
                                        <div className="criteria-2">
                                            <div className="criteria-2__item">JavaScript</div>
                                            <div className="criteria-2__item">jQuery</div>
                                            <div className="criteria-2__item">Bootstrap</div>
                                            <div className="criteria-2__item">SCSS</div>
                                            <div className="criteria-2__item">Laravel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*references section*/}
                        <div className="section">
                            <div className="section__header">
                                <div className="section__header-inner">
                                    <h4 className="section__title">References</h4>
                                </div>
                            </div>

                            <div className="section__inner">
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            +880 1989-150510
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Md.Salauddin Rana</h4>
                                        <a href="https://wpdeveloper.com/" target="_blank"
                                           className="section__item-subtitle">
                                            WPDeveloper
                                        </a>
                                        <p className="section__item-text">
                                            Director Of Engineering (PHP & DevOps) at WPDeveloper.
                                        </p>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            +880 1847-100109
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Reyad Hossain</h4>
                                        <a href="https://www.genexinfosys.com/" target="_blank"
                                           className="section__item-subtitle">
                                            Genex Infosys Ltd
                                        </a>
                                        <p className="section__item-text">
                                            Software Development Lead | Digital Transformation
                                        </p>
                                    </div>
                                </div>
                                <div className="section__item">
                                    <div className="section__item-left">
                                        <p className="section__item-text">
                                            +880 1789-983313
                                        </p>
                                    </div>
                                    <div className="section__item-right">
                                        <h4 className="section__item-title">Nazmul Alam</h4>
                                        <a href="https://www.genexinfosys.com/" target="_blank"
                                           className="section__item-subtitle">
                                            Upwork Enterprise
                                        </a>
                                        <p className="section__item-text">
                                            Frontend Engineer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
