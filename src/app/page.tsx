"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import {mdiGithub, mdiLinkedin, mdiNpm, mdiOpenInNew} from "@mdi/js";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
    // const router = useRouter();
    let [activeSection, setActiveSection] = useState('about');

    const initFocus = () => {
        const focus = document.getElementById("pointer");
        // @ts-ignore
        focus.style.background = `radial-gradient(600px at ${50}px ${50}px, rgba(55, 31, 24, .2), transparent 80%)`;

        document.addEventListener("mousemove", function (e) {
            let x: number = e.pageX;
            let y: number = e.pageY;
            // @ts-ignore
            focus.style.background = `radial-gradient(500px at ${x}px ${y}px, rgba(55, 31, 24, .2), transparent 80%)`;
        })
    }

    const setIntersectionObserver = () => {
        let sections = document.querySelectorAll(`section[role="section"]`)

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };
        const observer = new IntersectionObserver(entries => {
            entries.map(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions);

        Array.from(sections).map(section => {
            section && observer.observe(section)
        })
    }

    useEffect(() => {
        initFocus();
        setIntersectionObserver()
    }, []);

    return (
        <main className="af-main relative">
            <div className="af-pointer" id="pointer"/>
            <div className="af-main__inner">
                <div className="af-sidebar">
                    <div className="af-sidebar__inner">
                        <h1 className="af-sidebar__title">Abdullah Al Fahad</h1>
                        <h2 className="af-sidebar__subtitle">
                            Senior Software Engineer at UMR Labs
                        </h2>
                        <p className="af-sidebar__desc">
                            Empowering digital dreams with code and creativity, Crafting seamless experiences, pixel by
                            pixel.
                        </p>

                        <ul className="af-skills max-w-lg" aria-label="Technologies used">
                            <li className="af-skills__item core">
                                <div className="af-skills__item-inner">JavaScript</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">TypeScript</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">React</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">React Native</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Next.js</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Vue</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Nuxt.js</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Angular</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Ionic</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Capacitorjs</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">jQuery</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Tailwind</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">Bootstrap</div>
                            </li>
                            <li className="af-skills__item">
                                <div className="af-skills__item-inner">SCSS</div>
                            </li>
                            <li className="af-skills__item ext">
                                <div className="af-skills__item-inner">Laravel</div>
                            </li>
                            <li className="af-skills__item ext">
                                <div className="af-skills__item-inner">Django</div>
                            </li>
                            <li className="af-skills__item ext">
                                <div className="af-skills__item-inner">WordPress</div>
                            </li>
                            <li className="af-skills__item ext">
                                <div className="af-skills__item-inner">Docker</div>
                            </li>
                        </ul>

                        <nav className="af-nav" aria-label="In-page jump links">
                            <ul className="af-nav__menu">
                                <li>
                                    <Link
                                        className={`af-nav__menu-link group ${activeSection === 'about' ? 'active' : ''}`}
                                        href="#about">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`af-nav__menu-link group ${activeSection === 'experience' ? 'active' : ''}`}
                                        href="#experience">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">Experience</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`af-nav__menu-link group ${activeSection === 'projects' ? 'active' : ''}`}
                                        href="#projects">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`af-nav__menu-link group ${activeSection === 'writing' ? 'active' : ''}`}
                                        href="#writing">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">Writing</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="af-sidebar__footer">
                        <ul className="af-social" aria-label="Social media">
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://github.com/im-fahad" target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="GitHub (opens in a new tab)"
                                      title="GitHub">
                                    <Icon path={mdiGithub} size={1}/>
                                </Link>
                            </li>
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/"
                                      target="_blank" rel="noreferrer noopener"
                                      aria-label="LinkedIn (opens in a new tab)"
                                      title="LinkedIn">
                                    <Icon path={mdiLinkedin} size={1}/>
                                </Link>
                            </li>
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://www.npmjs.com/~al_fahad" target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="CodePen (opens in a new tab)"
                                      title="CodePen">
                                    <Icon path={mdiNpm} size={1}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="af-inner" id="content">
                    <section id="about" role="section" className="af-section" aria-label="About me">
                        <div className="af-section__head">
                            <h2 className="af-section__head-title">About</h2>
                        </div>
                        <div className="af-section__inner">
                            <p className="mb-4">
                                As an accomplished software engineer with 5+ years of hands-on experience, I
                                specialize in crafting cutting-edge solutions using a versatile toolkit encompassing
                                JavaScript, TypeScript, and a range of popular frameworks and libraries. My proficiency
                                extends across the full spectrum of web and mobile application development, including
                                React, React Native, Next.js, Vue, Nuxt.js, and Angular.

                                <br/>
                                <br/>

                                With a keen eye for detail and a passion for delivering exceptional user experiences, I
                                excel in leveraging the latest technologies to build responsive, feature-rich
                                applications. I am committed to pushing the boundaries of what's
                                possible in software development.

                                <br/>
                                <br/>

                                In addition to my expertise in frontend and mobile application development, I bring
                                experience in backend development using frameworks like Laravel and Django. This enables
                                me to seamlessly integrate frontend and backend systems.

                                <br/>
                                <br/>

                                My adeptness with CSS frameworks like Tailwind and Bootstrap, combined with my mastery
                                of pre-processors such as SCSS and Sass, enables me to craft visually striking and
                                exceptionally adaptable user interfaces. By leveraging these tools, I ensure that the
                                designs I create not only meet but exceed the latest design standards and accessibility
                                requirements, resulting in user experiences that are both engaging and inclusive.

                                <br/>
                                <br/>

                                Throughout my career, I have honed my skills through continuous learning and hands-on
                                experience, constantly seeking new challenges and opportunities to grow my skills.

                                <br/>
                                <br/>

                                Driven by a passion for innovation and a relentless pursuit of excellence, I am eager to
                                use my skills to tackle new challenges, solve complex problems, and deliver impactful
                                software solutions that delight users.
                            </p>
                        </div>
                    </section>

                    <section id="experience" role="section" className="af-section"
                             aria-label="Work experience">
                        <div
                            className="af-section__head">
                            <h2 className="af-section__head-title">Experience</h2>
                        </div>
                        <div>
                            <ol className="group/list">
                                <li className="mb-12">
                                    <div className="group af-exp">
                                        <div className="af-exp__ext"/>
                                        <header
                                            className="af-exp__head"
                                            aria-label="2018 to Present">2023 – present
                                        </header>
                                        <div className="af-exp__inner">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link
                                                        className="af-exp__link group/link"
                                                        href="https://umrlabs.com" target="_blank"
                                                        rel="noreferrer noopener"
                                                        aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            UMR Labs
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew}
                                                                      className="af-exp__icon"/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="af-exp__designation" aria-hidden="true">
                                                        Senior Software Engineer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className="af-exp__desc">
                                                I am proud to serve as a Senior Software Engineer at UMR LABS.
                                                UMR LABS a professional technology services provider for small and
                                                large businesses worldwide. Minority and women-owned with locations in
                                                the US-UK-BD.
                                            </p>
                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Next.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React Native</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Ionic</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Nuxt.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div className="group af-exp">
                                        <div className="af-exp__ext"/>
                                        <header
                                            className="af-exp__head"
                                            aria-label="2018 to Present">2022 – 2023
                                        </header>
                                        <div className="af-exp__inner">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link
                                                        className="af-exp__link group/link"
                                                        href="https://www.iquantile.com/" target="_blank"
                                                        rel="noreferrer noopener"
                                                        aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            IQuantile
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew}
                                                                      className="af-exp__icon"/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="af-exp__designation" aria-hidden="true">
                                                        Software Engineer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className="af-exp__desc">
                                                During my tenure at IQuantile as a Software Engineer, I honed my
                                                expertise by actively contributing to a myriad of web applications. My
                                                role involved collaborating on various projects, where I leveraged my
                                                skills to enhance functionality and streamline user experiences.
                                            </p>
                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Next.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Nuxt.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Django</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div className="group af-exp">
                                        <div className="af-exp__ext"/>
                                        <header
                                            className="af-exp__head"
                                            aria-label="2018 to Present">2018 – 2022
                                        </header>
                                        <div className="af-exp__inner">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link
                                                        className="af-exp__link group/link"
                                                        href="https://jouleslabs.com/" target="_blank"
                                                        rel="noreferrer noopener"
                                                        aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            JoulesLabs
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew}
                                                                      className="af-exp__icon"/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="af-exp__designation" aria-hidden="true">
                                                        Software Developer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className="af-exp__desc">
                                                During my employment at JoulesLabs as a software developer, I immersed
                                                myself in a diverse range of projects spanning web and mobile
                                                applications. My primary focus revolved around eCommerce, crowdfunding,
                                                and management applications. Throughout my tenure, I played a pivotal
                                                role in shaping and optimizing these platforms to deliver seamless user
                                                experiences and drive business success.
                                            </p>
                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Docker</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React Native</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Next.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Nuxt.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Ionic</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">WordPress</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div className="group af-exp">
                                        <div className="af-exp__ext"/>
                                        <header
                                            className="af-exp__head"
                                            aria-label="2018 to Present">2017 – 2018
                                        </header>
                                        <div className="af-exp__inner">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link
                                                        className="af-exp__link group/link"
                                                        href="https://kodeeo.com/" target="_blank"
                                                        rel="noreferrer noopener"
                                                        aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Kodeeo
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew}
                                                                      className="af-exp__icon"/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="af-exp__designation" aria-hidden="true">
                                                        Web Developer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className="af-exp__desc">
                                                I've had the privilege of serving as a web developer at Kodeeo, where I
                                                also completed an enriching internship. My experience at Kodeeo allowed
                                                me to refine my skills and gain invaluable hands-on experience in the
                                                field of web development.
                                            </p>
                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">SCSS</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Bootstrap</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ol>

                            <div className="mt-12">
                                <Link
                                    className="af-resume-button group/link"
                                    href="/resume.pdf" target="_blank"
                                    aria-label="View Full Resume (opens in a new tab)">
                                    <span>
                                        <span className="inline-block">
                                           View Full Resume
                                            <Icon path={mdiOpenInNew}
                                                  className="af-resume-icon"/>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section id="projects" role="section" className="af-section"
                             aria-label="Selected projects">
                        <div
                            className="af-section__head">
                            <h2 className="af-section__head-title">Projects</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://sentinelepgroup.com/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Sentinel EP
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Sentinel Executive Protection is providing security services on demand.
                                                They meticulously curated a team of experts spanning diverse fields such
                                                as security, technology, and logistics.
                                                Presently, I am spearheading a comprehensive project encompassing both
                                                web and mobile applications in my role as the lead Software Engineer. My
                                                responsibilities involve orchestrating the development process, guiding
                                                the team, and ensuring the successful delivery of a cutting-edge
                                                solution.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                               className="af-project__img"
                                               src="/images/sentinel.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="http://178.128.209.181/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Pintoe
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Pintoe, a dynamic social media platform available on web and mobile,
                                                offers a range of features for both free and premium users. As lead
                                                Software Engineer, I oversee development for both platforms, guiding the
                                                team to deliver innovative solutions. After a successful in-house 1st
                                                version release, we're now advancing to the 2nd version to enhance user
                                                experience and functionality.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Next.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Ionic</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Capacitorjs</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel (REST API)</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                               className="af-project__img"
                                               src="/images/pintoe.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://webaccess.ai/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Webaccess
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Webaccess AI provides a comprehensive solution for web accessibility,
                                                meeting WCAG and ADA guidelines for EU, USA and other countries. Built
                                                with JavaScript, TypeScript, CSS, and Webpack. I led its development
                                                from start to finish, ensuring that both the 1st and 2nd versions were
                                                successfully delivered.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">CSS</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Webpack</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel (REST API)</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                               className="af-project__img"
                                               src="/images/webaccess.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://bully-hub.com/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Bully-Hub
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Bully-Hub connects responsible breeders with loving families,
                                                prioritizing high breeding standards and dog welfare. As a frontend team
                                                lead, I ensured the project's success by guiding and supporting the
                                                team.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">jQuery</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Bootstrap</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/bullyhub.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="http://cleaning.accounts.llc/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Guayllas Magic Cleaning
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Guayllas Magic Cleaning was a passion for cleaning the world one
                                                customer at a time. I oversaw the frontend team's development efforts,
                                                ensuring a high-quality product was delivered through effective guidance
                                                and coordination.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/cleanning.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://quantibly.com/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Quantibly
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Quantibly stands out as an innovative SaaS solution tailored
                                                specifically for the Social Sector, offering comprehensive support for
                                                various critical functions including data collection, fundraising,
                                                financial management, and customer engagement processes. As the lead
                                                Frontend Engineer, I've been instrumental in driving the development of
                                                this pioneering platform, ensuring its seamless integration and optimal
                                                performance to meet the diverse needs of our clients in the social
                                                sector.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Django</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/quantibly.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://crowdfundly.com/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Crowdfundly
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                CrowdFundly is a dynamic SaaS project dedicated to crowdfunding,
                                                empowering users to construct fundraising platforms, launch campaigns,
                                                and secure vital funding. We've employed a sophisticated stack of
                                                technologies, including Laravel, Nuxt.js, Scss, and Docker, to ensure
                                                robustness and scalability. Over the past 1.5 years, I've held the
                                                pivotal role of lead Frontend Developer, contributing my expertise from
                                                the project's inception to drive its frontend development forward.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">TypeScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Nuxt.js</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vuex</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Docker</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Payment Gateway</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Multi-Language</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Wordpress Plugin</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">React Native</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/crowdfundly.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://keeno.app/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Keeno
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Keeno is a cutting-edge eCommerce application meticulously crafted for
                                                seamless online shopping. I designed the entire application using HTML
                                                and SCSS within the Laravel Blade framework, prioritizing both
                                                aesthetics and performance, making Keeno a standout platform in the
                                                eCommerce industry.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">jQuery</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Bootstrap (SCSS)</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/keeno.png"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div className="af-project group">
                                        <div className="af-project__ext"/>
                                        <div className="af-project__inner">
                                            <h3>
                                                <Link
                                                    className="af-project__link group/link"
                                                    href="https://easy.jobs/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Build a Spotify Connected App (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Easy Jobs
                                                            <span className="inline-block">
                                                                 <Icon path={mdiOpenInNew}
                                                                       className="af-project__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                            <p className="af-project__desc">
                                                Easy Solution For Talent Sourcing.
                                                <br/>
                                                I am actively involved in this
                                                project as a frontend developer, primarily focusing on the creation of
                                                the dashboard using HTML and Bootstrap. Leveraging these technologies,
                                                I've designed an intuitive and responsive interface that enhances user
                                                interaction and navigation.
                                            </p>

                                            <ul className="af-skills" aria-label="Technologies used">
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">JavaScript</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">jQuery</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Bootstrap (SCSS)</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Vue</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Tailwind</div>
                                                </li>
                                                <li className="af-skills__item">
                                                    <div className="af-skills__item-inner">Laravel</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <Image alt="Build a Spotify Connected App Newline course marketing card"
                                               loading="lazy" width="200" height="48" decoding="async"
                                               className="af-project__img"
                                               src="/images/easy.png"/>
                                    </div>
                                </li>
                                {/*<li className="mb-12">*/}
                                {/*    <div className="af-project group">*/}
                                {/*        <div className="af-project__ext"/>*/}
                                {/*        <div className="af-project__inner">*/}
                                {/*            <h3>*/}
                                {/*                <Link*/}
                                {/*                    className="af-project__link group/link"*/}
                                {/*                    href="https://keeno.app/"*/}
                                {/*                    target="_blank" rel="noreferrer noopener"*/}
                                {/*                    aria-label="Build a Spotify Connected App (opens in a new tab)">*/}
                                {/*                    <span*/}
                                {/*                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>*/}
                                {/*                    <span>*/}
                                {/*                            uShop*/}
                                {/*                            <span className="inline-block">*/}
                                {/*                                 <Icon path={mdiOpenInNew}*/}
                                {/*                                       className="af-project__icon"/>*/}
                                {/*                            </span>*/}
                                {/*                        </span>*/}
                                {/*                </Link>*/}
                                {/*            </h3>*/}
                                {/*            <p className="af-project__desc">*/}
                                {/*                uShop is a client-based project of my previous company. We make Web and*/}
                                {/*                Mobile applications for uShop. Laravel, Ionic and React-native have been*/}
                                {/*                used here as technology.*/}
                                {/*            </p>*/}

                                {/*            <ul className="af-skills" aria-label="Technologies used">*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">JavaScript</div>*/}
                                {/*                </li>*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">jQuery</div>*/}
                                {/*                </li>*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">Bootstrap (SCSS)</div>*/}
                                {/*                </li>*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">Laravel</div>*/}
                                {/*                </li>*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">Ionic</div>*/}
                                {/*                </li>*/}
                                {/*                <li className="af-skills__item">*/}
                                {/*                    <div className="af-skills__item-inner">React Native</div>*/}
                                {/*                </li>*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*        <img alt="Build a Spotify Connected App Newline course marketing card"*/}
                                {/*             loading="lazy" width="200" height="48" decoding="async" data-nimg="1"*/}
                                {/*             className="af-project__img"*/}
                                {/*             srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"*/}
                                {/*             src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"/>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </section>

                    <section id="writing" role="section" className="af-section"
                             aria-label="Blog posts">
                        <div
                            className="af-section__head">
                            <h2 className="af-section__head-title">Writing</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                <li className="mb-12">
                                    <div
                                        className="group af-writing">
                                        <div className="af-writing__ext"/>
                                        <Image alt="Telescope" loading="lazy" width="200" height="48" decoding="async"
                                               className="af-writing__img"
                                               src="/images/medium.png"/>
                                        <div className="af-writing__inner">
                                            <p className="-mt-1 text-sm font-semibold leading-6">2021</p>
                                            <h3 className="-mt-1">
                                                <Link
                                                    className="af-writing__link group/link"
                                                    href="https://medium.com/@al-fahad/change-website-brand-color-dynamically-6cb19071536b"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Change website brand color dynamically
                                                            <span className="inline-block">
                                                            <Icon path={mdiOpenInNew}
                                                                  className="af-writing__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group af-writing">
                                        <div className="af-writing__ext"/>
                                        <Image alt="Telescope" loading="lazy" width="200" height="48" decoding="async"
                                               className="af-writing__img"
                                               src="/images/nuxt-video-player.png"/>
                                        <div className="af-writing__inner">
                                            <p className="-mt-1 text-sm font-semibold leading-6">2021</p>
                                            <h3 className="-mt-1">
                                                <Link
                                                    className="af-writing__link group/link"
                                                    href="https://www.npmjs.com/package/nuxt-video-player"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Nuxt Video Player
                                                            <span className="inline-block">
                                                            <Icon path={mdiOpenInNew}
                                                                  className="af-writing__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group af-writing">
                                        <div className="af-writing__ext"/>
                                        <Image alt="Telescope" loading="lazy" width="200" height="48" decoding="async"
                                               className="af-writing__img"
                                               src="/images/grid-system.png"/>
                                        <div className="af-writing__inner">
                                            <p className="-mt-1 text-sm font-semibold leading-6">2020</p>
                                            <h3 className="-mt-1">
                                                <Link
                                                    className="af-writing__link group/link"
                                                    href="https://www.npmjs.com/package/react-native-responsive-grid-system"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            React native responsive grid system
                                                            <span className="inline-block">
                                                            <Icon path={mdiOpenInNew}
                                                                  className="af-writing__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group af-writing">
                                        <div className="af-writing__ext"/>
                                        <Image alt="Telescope" loading="lazy" width="200" height="48" decoding="async"
                                               className="af-writing__img"
                                               src="/images/vue-dialog.png"/>
                                        <div className="af-writing__inner">
                                            <p className="-mt-1 text-sm font-semibold leading-6">2022</p>
                                            <h3 className="-mt-1">
                                                <Link
                                                    className="af-writing__link group/link"
                                                    href="https://www.npmjs.com/package/vue-advance-dialog"
                                                    target="_blank" rel="noreferrer noopener"
                                                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)">
                                                    <span
                                                        className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                    <span>
                                                            Vue advance dialog
                                                            <span className="inline-block">
                                                            <Icon path={mdiOpenInNew}
                                                                  className="af-writing__icon"/>
                                                            </span>
                                                        </span>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                        <p>
                            Inspired by a remarkable software engineer profile and code in WebStorm.
                        </p>
                    </footer>
                </div>
            </div>
        </main>
    );
}
