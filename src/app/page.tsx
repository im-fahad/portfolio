"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import {mdiCodepen, mdiGithub, mdiInstagram, mdiLink, mdiLinkedin, mdiOpenInNew} from "@mdi/js";
import Link from "next/link";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        let focus = document.querySelector(".focus");

        document.addEventListener("mousemove", function (e) {
            let x = e.pageX;
            let y = e.pageY;
            // @ts-ignore
            focus.style.background = "radial-gradient(circle at " + x + "px " + y + 'px ,rgba(0, 0, 255, 0.1), transparent 15%)';
        })
    }, []);
    return (
        <main className="af-main relative focus">
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

                        <nav className="af-nav" aria-label="In-page jump links">
                            <ul className="af-nav__menu">
                                <li>
                                    <Link className="af-nav__menu-link group active" href="#about">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="group af-nav__menu-link" href="#experience">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">Experience</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="group af-nav__menu-link" href="#projects">
                                        <span className="af-nav__menu-indicator"/>
                                        <span className="af-nav__menu-text">Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="group af-nav__menu-link" href="#writing">
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
                                      href="https://github.com/bchiang7" target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="GitHub (opens in a new tab)"
                                      title="GitHub">
                                    <Icon path={mdiGithub} size={1}/>
                                </Link>
                            </li>
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://www.linkedin.com/in/bchiang7/"
                                      target="_blank" rel="noreferrer noopener"
                                      aria-label="LinkedIn (opens in a new tab)"
                                      title="LinkedIn">
                                    <Icon path={mdiLinkedin} size={1}/>
                                </Link>
                            </li>
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://codepen.io/bchiang7" target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="CodePen (opens in a new tab)"
                                      title="CodePen">
                                    <Icon path={mdiCodepen} size={1}/>
                                </Link>
                            </li>
                            <li className="af-social__item">
                                <Link className="af-social__link"
                                      href="https://instagram.com/bchiang7"
                                      target="_blank" rel="noreferrer noopener"
                                      aria-label="Instagram (opens in a new tab)"
                                      title="Instagram">
                                    <Icon path={mdiInstagram} size={1}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="af-inner" id="content">
                    <section id="about" className="af-section" aria-label="About me">
                        <div className="af-section__head">
                            <h2 className="af-section__head-title">About</h2>
                        </div>
                        <div className="af-section__inner">
                            <p className="mb-4">As an accomplished software engineer with five years of hands-on
                                experience, I
                                specialize in crafting cutting-edge solutions using a versatile toolkit encompassing
                                JavaScript, TypeScript, and a range of popular frameworks and libraries. My proficiency
                                extends across the full spectrum of web and mobile development, including React, React
                                Native, Next.js, Vue, Nuxt.js, and Angular.

                                <br/>
                                <br/>

                                With a keen eye for detail and a passion for delivering exceptional user experiences, I
                                excel in leveraging the latest technologies to build responsive, feature-rich
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                applications. Whether it's architecting scalable web applications with React or Angular,
                                optimizing mobile experiences with React Native, or harnessing the power of server-side
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                rendering with Next.js and Nuxt.js, I am committed to pushing the boundaries of what's
                                possible in software development.

                                <br/>
                                <br/>

                                In addition to my expertise in frontend and mobile development, I bring a wealth of
                                experience in backend development using frameworks like Laravel. This enables me to
                                seamlessly integrate frontend and backend systems, ensuring robust, end-to-end solutions
                                that meet the needs of modern businesses.

                                <br/>
                                <br/>

                                My proficiency in CSS frameworks such as Tailwind and Bootstrap, coupled with expertise
                                in pre-processors like SCSS and Sass, allows me to create visually stunning and highly
                                customizable user interfaces that adhere to the latest design standards and
                                accessibility guidelines.

                                <br/>
                                <br/>

                                Throughout my career, I have honed my skills through continuous learning and hands-on
                                experience, constantly seeking out new challenges and opportunities for growth. My
                                collaborative nature and strong communication skills make me an invaluable asset to any
                                team, enabling me to effectively collaborate with stakeholders, designers, and fellow
                                developers to bring projects to fruition.

                                <br/>
                                <br/>

                                Driven by a passion for innovation and a relentless pursuit of excellence, I am excited
                                to leverage my skills and expertise to tackle new challenges, solve complex problems,
                                and deliver impactful software solutions that drive business success and delight users.
                            </p>
                        </div>
                    </section>

                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Work experience">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
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
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
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
                                        View Full
                                        <span className="inline-block">
                                            Resume
                                            <Icon path={mdiOpenInNew}
                                                  className="af-resume-icon"/>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section id="projects" className="af-section"
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
                                                Currently,
                                                I'm working on this project as a lead Engineer.
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
                                                Sentinel Executive Protection is providing security services on demand.
                                                They meticulously curated a team of experts spanning diverse fields such
                                                as security, technology, and logistics.
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Currently, I'm working on this project as a lead Engineer. Vue 3 and
                                                Laravel using here as technology.
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
                                                Webaccess AI providing Perfect Solution for Web Accessibility for EU,
                                                USA and Other Countries those are following WCAG and ADA guidelines for
                                                web accessibility
                                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                                Currently, I'm working on this project as a lead Engineer. Vanilla JS,
                                                Vue 3 and Laravel using here as technology.
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
                                                Bully-Hub is a platform with a noble mission of connecting responsible
                                                breeders with loving families, ensuring high breeding standards, and
                                                promoting the welfare of dogs. Providing a place for top-reviewed
                                                breeders to showcase their puppies and connect with potential buyers
                                                while maintaining a focus on customer service and the well-being of the
                                                dogs is commendable.
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
                                                Our company was founded in the Seattle-Washington area with a passion
                                                for cleaning the world one customer at a time. We are family owned and
                                                operated and pride ourselves on our work ethic. We work hard to provide
                                                our customers with spotless living and working conditions.
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
                                                Quantibly is a unique SaaS solution that is targeted for the Social
                                                Sector to support every aspect of their data collection, fundraising,
                                                financial management and customer engagement processes.
                                                I have been working as the lead Frontend Engineer. Vue 3 and Django
                                                using here as technology.
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
                                                CrowdFundly is a crowdfunding based SAAS project, which helps users to
                                                build fundraising platforms, to create campaigns & raise funding​.
                                                Laravel, Nuxt.js, Scss and Docker have been used as Technology. From the
                                                very beginning of this project (for the last 1.5 years), I have been
                                                working as the lead Frontend Developer. Nuxt.js has been implemented as
                                                the frontend framework, which is a very popular framework of Vue.
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
                                                Keeno is an eCommerce application. I have designed the full application
                                                with HTML and SCSS in the Laravel Blade.
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
                                                Easy Solution For Talent Sourcing
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

                    <section id="writing" className="af-section"
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

                    {/*<footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>Loosely designed in <a*/}
                    {/*    href="https://www.figma.com/"*/}
                    {/*    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*    target="_blank" rel="noreferrer noopener"*/}
                    {/*    aria-label="Figma (opens in a new tab)">Figma</a> and coded in <a*/}
                    {/*    href="https://code.visualstudio.com/"*/}
                    {/*    className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*    target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">Visual*/}
                    {/*    Studio Code</a> by yours truly. Built with <a href="https://nextjs.org/"*/}
                    {/*                                                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*                                                  target="_blank"*/}
                    {/*                                                  rel="noreferrer noopener"*/}
                    {/*                                                  aria-label="Next.js (opens in a new tab)">Next.js</a> and*/}
                    {/*    <a href="https://tailwindcss.com/"*/}
                    {/*       className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*       target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind*/}
                    {/*        CSS</a>, deployed with <a href="https://vercel.com/"*/}
                    {/*                                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*                                  target="_blank" rel="noreferrer noopener"*/}
                    {/*                                  aria-label="Vercel (opens in a new tab)">Vercel</a>. All*/}
                    {/*    text is set in the <a href="https://rsms.me/inter/"*/}
                    {/*                          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"*/}
                    {/*                          target="_blank" rel="noreferrer noopener"*/}
                    {/*                          aria-label="Inter (opens in a new tab)">Inter</a> typeface.*/}
                    {/*</p></footer>*/}
                </div>
            </div>
        </main>
    );
}
