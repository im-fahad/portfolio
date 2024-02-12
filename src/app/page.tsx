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
                            I build pixel-perfect, engaging, and accessible digital experiences.
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
                            <p className="mb-4">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm a Software developer with 4+ years of experience working in the professional field.
                                I love to introduce myself as an enthusiast, explorer, and quick learner. I love to
                                accept challenges and ownership of my work responsibilities. Also, I like to work, learn
                                and explore as a team.
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
                                                I’m currently working at UMR LABS as a Senior Software Engineer.
                                                UMR LABS is a professional technology services provider for small and
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
                                                I worked at IQuantile as a Software Engineer. I have worked with
                                                multiple web applications in IQuantile.
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
                                                I worked at JoulesLabs as a software developer. I have worked with many
                                                web and mobile applications in JoulesLabs. Mainly eCommerce,
                                                Crowdfunding and Management applications.
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
                                                I worked at Kodeeo as a web developer. I completed my internship at
                                                Kodeeo.
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
                            </ol>

                            <div className="mt-12"><a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                                href="/resume.pdf" target="_blank" rel="noreferrer noopener"
                                aria-label="View Full Résumé (opens in a new tab)"><span>View Full <span
                                className="inline-block">Résumé<svg xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20" fill="currentColor"
                                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                            </div>
                        </div>
                    </section>

                    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Selected projects">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                <li className="mb-12">
                                    <div
                                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://www.newline.co/courses/build-a-spotify-connected-app"
                                                target="_blank" rel="noreferrer noopener"
                                                aria-label="Build a Spotify Connected App (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Build a Spotify Connected
                                                <span className="inline-block">App<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">Video course that teaches how to
                                                build a web app with the Spotify Web API. Topics covered include the
                                                principles of REST APIs, user auth flows, Node, Express, React, Styled
                                                Components, and more.</p></div>
                                        <img alt="Build a Spotify Connected App Newline course marketing card"
                                             loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                             className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://spotify-profile.herokuapp.com/" target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label="Spotify Profile (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Spotify
                                                <span className="inline-block">Profile<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">Web app for visualizing
                                                personalized Spotify data. View your top artists, top tracks, recently
                                                played tracks, and detailed audio information about each track. Create
                                                and save new playlists of recommended tracks based on your existing
                                                playlists and more.</p><a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                            href="https://github.com/bchiang7/spotify-profile" target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="599 stars on GitHub (opens in a new tab)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                            <span>599</span></a>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Express
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Spotify
                                                        API
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Heroku
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <img alt="Spotify Profile app homepage" loading="lazy" width="200" height="48"
                                             decoding="async" data-nimg="1"
                                             className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://halcyon-theme.netlify.app/" target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label="Halcyon Theme (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Halcyon
                                                <span className="inline-block">Theme<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">Minimal dark blue theme for VS
                                                Code, Sublime Text, Atom, iTerm, and more.</p><a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                            href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                                            target="_blank" rel="noreferrer noopener"
                                            aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="mr-1 h-4 w-4" aria-hidden="true">
                                                <path
                                                    d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                                                <path
                                                    d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                                            </svg>
                                            <span>100k+ Installs</span></a></div>
                                        <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor"
                                             loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                             className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75"/>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <div className="z-10 sm:order-2 sm:col-span-6">
                                            <h3><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://v4.brittanychiang.com/" target="_blank"
                                                rel="noreferrer noopener"
                                                aria-label="brittanychiang.com (v4) (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>brittanychiang.com
                                                <span className="inline-block">(v4)<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">An old portfolio site built with
                                                Gatsby with 6k+ stars and 3k+ forks</p><a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                            href="https://github.com/bchiang7/v4" target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="6977 stars on GitHub (opens in a new tab)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                            <span>6,977</span></a>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Gatsby
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Styled
                                                        Components
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Netlify
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <img alt="brittanychiang.com version 4 hero section" loading="lazy" width="200"
                                             height="48" decoding="async" data-nimg="1"
                                             className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                             srcSet="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"/>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-12"><a
                                className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                                aria-label="View Full Project Archive" href="/archive"><span><span
                                className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project </span><span
                                className="whitespace-nowrap"><span
                                className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                aria-hidden="true"><path fill-rule="evenodd"
                                                         d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                                         clip-rule="evenodd"></path></svg></span></span></a></div>
                        </div>
                    </section>

                    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Blog posts">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Writing</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                <li className="mb-12">
                                    <div
                                        className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <img alt="Telescope" loading="lazy" width="200" height="48" decoding="async"
                                             data-nimg="1"
                                             className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                             srcSet="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75"/>
                                        <div className="z-10 col-span-6"><p
                                            className="-mt-1 text-sm font-semibold leading-6">2020</p>
                                            <h3 className="-mt-1"><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                                                target="_blank" rel="noreferrer noopener"
                                                aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Integrating Algolia Search with WordPress
                                                <span className="inline-block">Multisite<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-12">
                                    <div
                                        className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                        <img alt="Headless horseamn" loading="lazy" width="200" height="48"
                                             decoding="async" data-nimg="1"
                                             className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                                             srcSet="/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75 2x"
                                             src="/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75"/>
                                        <div className="z-10 col-span-6"><p
                                            className="-mt-1 text-sm font-semibold leading-6">2019</p>
                                            <h3 className="-mt-1"><a
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/"
                                                target="_blank" rel="noreferrer noopener"
                                                aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)"><span
                                                className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span><span>Building a Headless Mobile App CMS From
                                                <span className="inline-block">Scratch<svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"><path fill-rule="evenodd"
                                                                             d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                             clip-rule="evenodd"></path></svg></span></span></a>
                                            </h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>Loosely designed in <a
                        href="https://www.figma.com/"
                        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                        target="_blank" rel="noreferrer noopener"
                        aria-label="Figma (opens in a new tab)">Figma</a> and coded in <a
                        href="https://code.visualstudio.com/"
                        className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                        target="_blank" rel="noreferrer noopener" aria-label="Visual Studio Code (opens in a new tab)">Visual
                        Studio Code</a> by yours truly. Built with <a href="https://nextjs.org/"
                                                                      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                                                                      target="_blank"
                                                                      rel="noreferrer noopener"
                                                                      aria-label="Next.js (opens in a new tab)">Next.js</a> and
                        <a href="https://tailwindcss.com/"
                           className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                           target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind
                            CSS</a>, deployed with <a href="https://vercel.com/"
                                                      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                                                      target="_blank" rel="noreferrer noopener"
                                                      aria-label="Vercel (opens in a new tab)">Vercel</a>. All
                        text is set in the <a href="https://rsms.me/inter/"
                                              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                                              target="_blank" rel="noreferrer noopener"
                                              aria-label="Inter (opens in a new tab)">Inter</a> typeface.
                    </p></footer>
                </div>
            </div>
        </main>
    );
}
