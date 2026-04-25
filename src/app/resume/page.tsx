"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import {mdiAccount} from "@mdi/js";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';

export default function Resume() {
    const section = "w-full mb-7 last:mb-0";
    const sectionHeaderInner = "w-max bg-white z-10 pr-5 flex items-center";
    const sectionTitle = "text-orange-500 text-base font-medium m-0 p-0";
    const sectionInner = "w-full";
    const sectionDescription = "text-sm text-black m-0";
    const sectionItem = "flex items-start mb-5 last:mb-0";
    const sectionItemLeft = "w-[168px]";
    const sectionItemRight = "flex-1";
    const sectionItemTitle = "text-base font-medium mb-1 text-black";
    const sectionItemSubtitle = "text-sm font-normal mb-1 text-black decoration-0";
    const sectionItemText = "text-sm text-black";
    const projects = "w-full";
    const projectsItem = "w-full mb-5 last:mb-0";
    const projectsItemTitle = "text-base text-black font-medium mb-1 decoration-0";
    const projectsItemDescription = "text-sm text-black";

    const cvWrapper = "w-full box-border p-[50px] flex flex-col items-center bg-white font-Roboto print:p-0";
    const cvInner = "w-[794px] mx-auto print:w-full";
    const pageWrapper = "w-full bg-white mb-10 aspect-[1/1.455] shadow-wrapper shadow-orange-300/50 last:mb-0 rounded print:shadow-none print:overflow-hidden print:mb-0 print:rounded-none";
    const pageInner = "p-10 h-full print:p-0";
    const profileImage = "w-[120px] h-[120px] rounded-sm overflow-hidden mr-[50px] [&_img]:w-full [&_img]:object-cover";
    const profileItem = "flex items-center pl-4 relative text-sm w-max ml-5 before:content-[''] before:absolute before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-orange-500";
    const sectionHeader = "w-full flex items-center relative mb-3 after:content-[''] after:absolute after:w-full after:left-0 after:h-px after:z-0 after:bg-gray-500";
    const skillsItem = "relative flex items-center pl-4 text-sm text-black mb-2 last:mb-0 before:content-[''] before:absolute before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-orange-500 [&_strong]:text-black";
    const criteriaItem = "relative text-sm pl-2 pr-2 pb-1 flex items-center text-black before:content-[''] before:absolute before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-orange-500 [&_strong]:text-black";

    return (
        <div className={cvWrapper} id="resume">
            <div className={cvInner}>
                <div className={pageWrapper}>
                    <div className={pageInner}>
                        {/*profile section*/}
                        <div className="w-full flex mb-7">
                            <div className={profileImage}>
                                <Image width="200" height="48"
                                       src="/images/avatar.jpg"
                                       alt="avatar"/>
                            </div>

                            <div className="flex-1">
                                <h2 className="text-3xl mt-0 mb-5 text-black leading-7 font-medium">Abdullah Al Fahad</h2>

                                <div className="flex flex-wrap -ml-5">
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">Phone:</span>
                                        <span className="text-black pl-1 decoration-0">+880 1738-916935</span>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">Email:</span>
                                        <a className="text-black pl-1 decoration-0" href="mailto:abdullahalfahad.bd@gmail.com"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            abdullahalfahad.bd @gmail.com</a>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">Address:</span>
                                        <span
                                            className="text-black pl-1 decoration-0">Sreepur(1740), Gazipur, Dhaka, Bangladesh.</span>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">GitHub:</span>
                                        <a className="text-black pl-1 decoration-0" href="https://github.com/im-fahad"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            github.com/im-fahad
                                        </a>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">NPM:</span>
                                        <a className="text-black pl-1 decoration-0" href="https://www.npmjs.com/~al_fahad"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            npmjs.com/~al_fahad
                                        </a>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">Profile:</span>
                                        <a className="text-black pl-1 decoration-0" href="https://www.al-fahad.me/"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            https://al-fahad.me
                                        </a>
                                    </div>
                                    <div className={profileItem}>
                                        <span className="font-medium text-black">linkedin:</span>
                                        <a className="text-black pl-1 decoration-0"
                                           href="https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/"
                                           target="_blank" rel="noopener noreferrer nofollow">
                                            /abdullah-al-fahad-0828b5186/
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*profile about section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Profile</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <p className={sectionDescription}>
                                    As an accomplished frontend software engineer with more than 5 years of professional
                                    experience,
                                    I specialize in crafting cutting-edge solutions using JavaScript, TypeScript, and
                                    various frameworks like React, React Native, Next.js, Vue, Nuxt.js, and Angular.
                                    My proficiency extends to CSS frameworks like Tailwind and Bootstrap, along with
                                    pre-processors such as SCSS and Sass, enabling me to create visually stunning and
                                    adaptable user interfaces that exceed design standards and accessibility
                                    requirements.
                                    Driven by a passion for innovation and excellence, I eagerly tackle new challenges,
                                    solve complex problems, and deliver impactful software solutions that delight users.
                                </p>
                            </div>
                        </div>

                        {/*professional skills section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Skills</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className="w-full">
                                    <div className={skillsItem}>
                                        <strong className="mr-[5px]">Frontend:</strong>
                                        JavaScript, TypeScript, React, Next.js, Redux, Vue, Nuxt.js, Vuex, JQuery,
                                        Tailwind
                                    </div>

                                    <div className={skillsItem}>
                                        <strong className="mr-[5px]">App Development:</strong>
                                        React Native, Ionic, Capacitor
                                    </div>

                                    <div className={skillsItem}>
                                        <strong className="mr-[5px]">Backend:</strong>
                                        Laravel, Django, MySQL
                                    </div>

                                    <div className={skillsItem}>
                                        <strong className="mr-[5px]">Tools:</strong>
                                        Git, Docker, Photoshop, Figma, XD, MS Word, MS Excel
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*education section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Education</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            2017 – 2022
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Mechatronics | B.S.C</h4>
                                        <span className={sectionItemSubtitle}>
                                            World University of Bangladesh
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*languages section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Languages</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className="w-full">
                                    <div className="-mb-5 flex flex-wrap">
                                        <div className="w-[20%] pb-5">
                                            <div className={skillsItem}>Bengali</div>
                                        </div>
                                        <div className="w-[20%] pb-5">
                                            <div className={skillsItem}>English</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*work experience section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Work experience</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            2023 – present
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Senior Software Engineer</h4>
                                        <a href="https://umrlabs.com/" target="_blank"
                                           className={sectionItemSubtitle}>UMR LABS</a>
                                        <p className={sectionItemText}>
                                            I am proud to serve as a Senior Software Engineer at UMR LABS.
                                            UMR LABS a professional technology services provider for small and
                                            large businesses worldwide. Minority and women-owned with locations in
                                            the US-UK-BD.
                                        </p>
                                    </div>
                                </div>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            2022 – 2023
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Software Engineer</h4>
                                        <a href="https://www.iquantile.com/" target="_blank"
                                           className={sectionItemSubtitle}>IQuantile</a>
                                        <p className={sectionItemText}>
                                            During my tenure at IQuantile as a Software Engineer, I honed my
                                            expertise by actively contributing to a myriad of web applications. My
                                            role involved collaborating on various projects, where I leveraged my
                                            skills to enhance functionality and streamline user experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pageWrapper}>
                    <div className={pageInner}>
                        {/*work experience section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Work experience</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            2018 – 2022
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Software Developer</h4>
                                        <a href="https://jouleslabs.com" target="_blank"
                                           className={sectionItemSubtitle}>JoulesLabs</a>
                                        <p className={sectionItemText}>
                                            During my time at JoulesLabs as a software developer, I worked on various
                                            projects involving web and mobile applications, with a focus on eCommerce,
                                            crowdfunding, and management systems. I played a key role in optimizing
                                            these platforms for seamless user experiences and business success..
                                        </p>
                                    </div>
                                </div>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            2017 – 2018
                                            <br/>
                                            Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Web Developer</h4>
                                        <a href="https://www.kodeeo.com/" target="_blank"
                                           className={sectionItemSubtitle}>Kodeeo</a>
                                        <p className={sectionItemText}>
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
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Projects</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={projects}>
                                    <div className={projectsItem}>
                                        <Link href="https://sentinelepgroup.com/" className={projectsItemTitle}>
                                            Sentinel EP
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Sentinel Executive Protection offers on-demand security services, boasting a
                                            curated team of experts in security, technology, and logistics. As the lead
                                            Software Engineer, I'm currently leading a project involving web and mobile
                                            applications. My role includes managing development, guiding the team, and
                                            ensuring the delivery of an innovative solution.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>TypeScript</div>
                                            <div className={criteriaItem}>Vue</div>
                                            <div className={criteriaItem}>Vuex</div>
                                            <div className={criteriaItem}>Tailwind</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="http://178.128.209.181/" className={projectsItemTitle}>
                                            Pintoe
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Pintoe, a dynamic social media platform available on web and mobile,
                                            offers a range of features for both free and premium users. As lead
                                            Software Engineer, I oversee development for both platforms, guiding the
                                            team to deliver innovative solutions. After a successful in-house 1st
                                            version release, we're now advancing to the 2nd version to enhance user
                                            experience and functionality.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>Next.js</div>
                                            <div className={criteriaItem}>Redux</div>
                                            <div className={criteriaItem}>TypeScript</div>
                                            <div className={criteriaItem}>Tailwind</div>
                                            <div className={criteriaItem}>Ionic</div>
                                            <div className={criteriaItem}>Capacitorjs</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="https://webaccess.ai/" className={projectsItemTitle}>
                                            Webaccess
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Webaccess AI provides a comprehensive solution for web accessibility,
                                            meeting WCAG and ADA guidelines for EU, USA and other countries. Built
                                            with JavaScript, TypeScript, CSS, and Webpack. I led its development
                                            from start to finish, ensuring that both the 1st and 2nd versions were
                                            successfully delivered.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>JavaScript</div>
                                            <div className={criteriaItem}>TypeScript</div>
                                            <div className={criteriaItem}>CSS</div>
                                            <div className={criteriaItem}>Webpack</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="https://bully-hub.com/" className={projectsItemTitle}>
                                            Bully-Hub
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Bully-Hub connects responsible breeders with loving families,
                                            prioritizing high breeding standards and dog welfare. As a frontend team
                                            lead, I ensured the project's success by guiding and supporting the
                                            team.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>JavaScript</div>
                                            <div className={criteriaItem}>jQuery</div>
                                            <div className={criteriaItem}>Bootstrap</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="https://cleaning.accounts.llc/" className={projectsItemTitle}>
                                            Guayllas Magic Cleaning
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Guayllas Magic Cleaning was a passion for cleaning the world one
                                            customer at a time. I oversaw the frontend team's development efforts,
                                            ensuring a high-quality product was delivered through effective guidance
                                            and coordination.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>JavaScript</div>
                                            <div className={criteriaItem}>TypeScript</div>
                                            <div className={criteriaItem}>Vue</div>
                                            <div className={criteriaItem}>Vuex</div>
                                            <div className={criteriaItem}>Tailwind</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={pageWrapper}>
                    <div className={pageInner}>
                        {/*projects section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>Projects</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={projects}>
                                    <div className={projectsItem}>
                                        <Link href="https://quantibly.com/" className={projectsItemTitle}>
                                            Quantibly
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            Quantibly, an innovative SaaS solution for the Social Sector, offers
                                            comprehensive support for critical functions like data collection,
                                            fundraising, financial management, and customer engagement. As the lead
                                            Frontend Engineer, I've driven its development, ensuring seamless
                                            integration and optimal performance to meet our clients' diverse needs.
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>JavaScript</div>
                                            <div className={criteriaItem}>TypeScript</div>
                                            <div className={criteriaItem}>Vue</div>
                                            <div className={criteriaItem}>Vuex</div>
                                            <div className={criteriaItem}>Tailwind</div>
                                            <div className={criteriaItem}>Django</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="http://crowdfundly.com/" className={projectsItemTitle}>
                                            Crowdfundly
                                        </Link>
                                        <p className={projectsItemDescription}>
                                            CrowdFundly is a dynamic SaaS project dedicated to crowdfunding, enabling
                                            users to create fundraising platforms, launch campaigns, and secure funding.
                                            With technologies like Laravel, Nuxt.js, Scss, and Docker, we ensure
                                            robustness and scalability. As the lead Frontend Developer for 1.5 years,
                                            I've driven frontend development forward since the project's inception.
                                        </p>

                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>Nuxt.js</div>
                                            <div className={criteriaItem}>Vuex</div>
                                            <div className={criteriaItem}>Tailwind</div>
                                            <div className={criteriaItem}>Multi-Language</div>
                                            <div className={criteriaItem}>Subdomain & Custom Domain</div>
                                            <div className={criteriaItem}>Laravel</div>
                                            <div className={criteriaItem}>Wordpress Plugin</div>
                                        </div>
                                    </div>
                                    <div className={projectsItem}>
                                        <Link href="https://keeno.app/" className={projectsItemTitle}>Keeno</Link>
                                        <p className={projectsItemDescription}>
                                            Keeno is an eCommerce application. I have designed the full application with
                                            HTML and SCSS in the Laravel Blade. Here I have worked in following
                                            criteria:
                                        </p>
                                        <div className="mt-1 flex flex-wrap items-center -mr-2 -mb-1">
                                            <div className={criteriaItem}>JavaScript</div>
                                            <div className={criteriaItem}>jQuery</div>
                                            <div className={criteriaItem}>Bootstrap</div>
                                            <div className={criteriaItem}>SCSS</div>
                                            <div className={criteriaItem}>Laravel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*references section*/}
                        <div className={section}>
                            <div className={sectionHeader}>
                                <div className={sectionHeaderInner}>
                                    <h4 className={sectionTitle}>References</h4>
                                </div>
                            </div>

                            <div className={sectionInner}>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            +880 1989-150510
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Md.Salauddin Rana</h4>
                                        <a href="https://wpdeveloper.com/" target="_blank"
                                           className={sectionItemSubtitle}>
                                            WPDeveloper
                                        </a>
                                        <p className={sectionItemText}>
                                            Director Of Engineering (PHP & DevOps) at WPDeveloper.
                                        </p>
                                    </div>
                                </div>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            +880 1847-100109
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Reyad Hossain</h4>
                                        <a href="https://www.genexinfosys.com/" target="_blank"
                                           className={sectionItemSubtitle}>
                                            Genex Infosys Ltd
                                        </a>
                                        <p className={sectionItemText}>
                                            Software Development Lead | Digital Transformation
                                        </p>
                                    </div>
                                </div>
                                <div className={sectionItem}>
                                    <div className={sectionItemLeft}>
                                        <p className={sectionItemText}>
                                            +880 1789-983313
                                        </p>
                                    </div>
                                    <div className={sectionItemRight}>
                                        <h4 className={sectionItemTitle}>Nazmul Alam</h4>
                                        <a href="https://www.genexinfosys.com/" target="_blank"
                                           className={sectionItemSubtitle}>
                                            Upwork Enterprise
                                        </a>
                                        <p className={sectionItemText}>
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
