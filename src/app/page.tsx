"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiNpm, mdiOpenInNew } from "@mdi/js";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    let [activeSection, setActiveSection] = useState('about');

    const initFocus = () => {
        const focus = document.getElementById("pointer");
        // @ts-ignore
        focus.style.background = `radial-gradient(600px at ${50}px ${50}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

        document.addEventListener("mousemove", function (e) {
            let x: number = e.pageX;
            let y: number = e.pageY;
            // @ts-ignore
            focus.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
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
            entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
        }, observerOptions);

        Array.from(sections).forEach((section) => {
			section && observer.observe(section);
		});
    }

    useEffect(() => {
        initFocus();
        setIntersectionObserver()
    }, []);

    // Reusable Tailwind class strings for repeated patterns
    const skillsWrap = "mt-2 flex flex-wrap";
    const skillItem = "mr-1.5 mt-2";
    const skillPill = "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-secondary-300/10 text-secondary-300";
    const skillPillExt = "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-secondary-200/10 text-secondary-200";

    const expExt = "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-600/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(55,31,24,0.1)] lg:group-hover:drop-shadow-lg";
    const projectExt = "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg";
    const linkTitle = "inline-flex items-baseline font-medium leading-tight text-white hover:text-secondary-300 focus-visible:text-secondary-300 text-base";
    const linkIcon = "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px mb-1";
    const itemDesc = "mt-2 text-sm leading-normal";

    return (
        <main className="relative w-full h-full min-h-screen">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" id="pointer"/>
            <div className="container mx-auto px-10 h-full lg:flex lg:justify-between lg:gap-4 z-20">
                <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between pt-10 lg:!py-24">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            <Link href="/">
                                Abdullah Al Fahad
                            </Link>
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
                            Senior Software Engineer
                        </h2>
                        <p className="mt-4 max-w-xs leading-normal text-gray-400">
                            I build fast, scalable, and intuitive web and mobile applications — bridging clean code
                            with thoughtful design to deliver seamless user experiences.
                        </p>

                        <ul className={`${skillsWrap} max-w-lg`} aria-label="Technologies used">
                            <li className={skillItem}><div className={skillPill}>JavaScript</div></li>
                            <li className={skillItem}><div className={skillPill}>TypeScript</div></li>
                            <li className={skillItem}><div className={skillPill}>Node.js</div></li>
                            <li className={skillItem}><div className={skillPill}>React</div></li>
                            <li className={skillItem}><div className={skillPill}>React Native</div></li>
                            <li className={skillItem}><div className={skillPill}>Next.js</div></li>
                            <li className={skillItem}><div className={skillPill}>Redux</div></li>
                            <li className={skillItem}><div className={skillPill}>Auth.js</div></li>
                            <li className={skillItem}><div className={skillPill}>Vue</div></li>
                            <li className={skillItem}><div className={skillPill}>Nuxt.js</div></li>
                            <li className={skillItem}><div className={skillPill}>Vuex</div></li>
                            <li className={skillItem}><div className={skillPill}>Angular</div></li>
                            <li className={skillItem}><div className={skillPill}>Ionic</div></li>
                            <li className={skillItem}><div className={skillPill}>Capacitor</div></li>
                            <li className={skillItem}><div className={skillPill}>jQuery</div></li>
                            <li className={skillItem}><div className={skillPill}>WebSocket</div></li>
                            <li className={skillItem}><div className={skillPill}>Webpack</div></li>
                            <li className={skillItem}><div className={skillPill}>Tailwind CSS</div></li>
                            <li className={skillItem}><div className={skillPill}>Bootstrap</div></li>
                            <li className={skillItem}><div className={skillPill}>SCSS</div></li>
                            <li className={skillItem}><div className={skillPillExt}>Laravel</div></li>
                            <li className={skillItem}><div className={skillPillExt}>Django</div></li>
                            <li className={skillItem}><div className={skillPillExt}>WordPress</div></li>
                            <li className={skillItem}><div className={skillPillExt}>Docker</div></li>
                        </ul>
                        <Link
                            className="inline-flex items-baseline leading-tight text-gray-400 hover:text-secondary focus-visible:text-secondary font-semibold text-base group/link mt-8"
                            href="/abdullah_al_fahad_resume.pdf" target="_blank"
                            aria-label="View Full Resume (opens in a new tab)">
                            <span>
                                <span className="inline-block">
                                    View Full Resume
                                    <Icon path={mdiOpenInNew}
                                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px mb-1"/>
                                </span>
                            </span>
                        </Link>
                        <nav className="hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 w-max">
                                {[
                                    {id: 'about', label: 'About'},
                                    {id: 'experience', label: 'Experience'},
                                    {id: 'projects', label: 'Projects'},
                                    {id: 'writing', label: 'Writing'},
                                ].map(({id, label}) => {
                                    const isActive = activeSection === id;
                                    return (
                                        <li key={id}>
                                            <Link className="flex items-center py-3 group" href={`#${id}`}>
                                                <span
                                                    className={`mr-4 h-px bg-primary-600 transition-all group-hover:w-16 group-hover:bg-secondary-300 group-focus-visible:w-16 group-focus-visible:bg-secondary-300 motion-reduce:transition-none ${isActive ? 'w-16 bg-secondary-300' : 'w-8'}`}/>
                                                <span
                                                    className={`text-xs font-bold uppercase tracking-widest group-hover:text-secondary-300 group-focus-visible:text-secondary-300 ${isActive ? 'text-secondary-300' : 'text-primary-500'}`}>{label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                            <li className="mr-5 text-xs shrink-0">
                                <Link className="block text-gray-400 hover:text-secondary-300 transition-all"
                                      href="https://github.com/im-fahad" target="_blank"
                                      rel="noreferrer noopener"
                                      aria-label="GitHub (opens in a new tab)"
                                      title="GitHub">
                                    <Icon path={mdiGithub} size={1}/>
                                </Link>
                            </li>
                            <li className="mr-5 text-xs shrink-0">
                                <Link className="block text-gray-400 hover:text-secondary-300 transition-all"
                                      href="https://www.linkedin.com/in/abdullah-al-fahad-0828b5186/"
                                      target="_blank" rel="noreferrer noopener"
                                      aria-label="LinkedIn (opens in a new tab)"
                                      title="LinkedIn">
                                    <Icon path={mdiLinkedin} size={1}/>
                                </Link>
                            </li>
                            <li className="mr-5 text-xs shrink-0">
                                <Link className="block text-gray-400 hover:text-secondary-300 transition-all"
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

                <div className="pt-24 lg:w-1/2 lg:py-24" id="content">
                    <section id="about" role="section"
                             className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="About me">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary-900/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-400 lg:sr-only">About</h2>
                        </div>
                        <div className="z-10 sm:col-span-6">
                            <p className="mb-4">
                                I'm a Senior Software Engineer with over 7 years of experience designing and
                                delivering scalable, user-focused web and mobile applications. My core strength lies
                                in the modern JavaScript and TypeScript ecosystem, where I work fluently across
                                React, Next.js, Vue, Nuxt.js, and Angular to build performant, accessible, and
                                maintainable interfaces.

                                <br/>
                                <br/>

                                On the mobile side, I build cross-platform applications with React Native, Ionic, and
                                Capacitor — turning complex product requirements into smooth, native-feeling
                                experiences. I complement this with solid state management through Redux and Vuex,
                                secure authentication flows with Auth.js, and real-time communication using
                                WebSockets.

                                <br/>
                                <br/>

                                Beyond the frontend, I bring hands-on backend experience with Node.js, Laravel, and
                                Django, which allows me to own features end-to-end — from API design and data
                                modeling to pixel-perfect UI. I'm equally comfortable crafting scalable design
                                systems with Tailwind CSS, Bootstrap, and SCSS, and streamlining development
                                workflows with Webpack and Docker.

                                <br/>
                                <br/>

                                Throughout my career — from leading frontend teams to shipping SaaS platforms used in
                                production — I've focused on solving complex problems with thoughtful architecture,
                                clean code, and a genuine care for the end user. I believe great software is built at
                                the intersection of engineering rigor and empathetic design, and I'm always looking
                                for the next challenge where I can contribute both.
                            </p>
                        </div>
                    </section>

                    <section id="experience" role="section"
                             className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Work experience">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary-900/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-400 lg:sr-only">Experience</h2>
                        </div>
                        <div>
                            <ol className="group/list">
                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className={expExt}/>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-500 sm:col-span-2"
                                            aria-label="2018 to Present">2023 – present
                                        </header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link className={`${linkTitle} group/link`}
                                                          href="https://umrlabs.com" target="_blank"
                                                          rel="noreferrer noopener"
                                                          aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            UMR Labs
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="text-primary-500" aria-hidden="true">
                                                        Senior Software Engineer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className={itemDesc}>
                                                I am proud to serve as a Senior Software Engineer at UMR LABS.
                                                UMR LABS a professional technology services provider for small and
                                                large businesses worldwide. Minority and women-owned with locations in
                                                the US-UK-BD.
                                            </p>
                                            <ul className={skillsWrap} aria-label="Technologies used">
                                                <li className={skillItem}><div className={skillPill}>JavaScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>TypeScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>React</div></li>
                                                <li className={skillItem}><div className={skillPill}>Next.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>React Native</div></li>
                                                <li className={skillItem}><div className={skillPill}>Ionic</div></li>
                                                <li className={skillItem}><div className={skillPill}>Vue</div></li>
                                                <li className={skillItem}><div className={skillPill}>Nuxt.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>Tailwind CSS</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className={expExt}/>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-500 sm:col-span-2"
                                            aria-label="2018 to Present">2022 – 2023
                                        </header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link className={`${linkTitle} group/link`}
                                                          href="https://www.iquantile.com/" target="_blank"
                                                          rel="noreferrer noopener"
                                                          aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            IQuantile
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="text-primary-500" aria-hidden="true">
                                                        Software Engineer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className={itemDesc}>
                                                During my tenure at IQuantile as a Software Engineer, I honed my
                                                expertise by actively contributing to a myriad of web applications. My
                                                role involved collaborating on various projects, where I leveraged my
                                                skills to enhance functionality and streamline user experiences.
                                            </p>
                                            <ul className={skillsWrap} aria-label="Technologies used">
                                                <li className={skillItem}><div className={skillPill}>JavaScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>TypeScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>React</div></li>
                                                <li className={skillItem}><div className={skillPill}>Next.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>Vue</div></li>
                                                <li className={skillItem}><div className={skillPill}>Nuxt.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>Tailwind CSS</div></li>
                                                <li className={skillItem}><div className={skillPill}>Django</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className={expExt}/>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-500 sm:col-span-2"
                                            aria-label="2018 to Present">2018 – 2022
                                        </header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link className={`${linkTitle} group/link`}
                                                          href="https://jouleslabs.com/" target="_blank"
                                                          rel="noreferrer noopener"
                                                          aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            JoulesLabs
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="text-primary-500" aria-hidden="true">
                                                        Software Developer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className={itemDesc}>
                                                During my employment at JoulesLabs as a software developer, I immersed
                                                myself in a diverse range of projects spanning web and mobile
                                                applications. My primary focus revolved around eCommerce, crowdfunding,
                                                and management applications. Throughout my tenure, I played a pivotal
                                                role in shaping and optimizing these platforms to deliver seamless user
                                                experiences and drive business success.
                                            </p>
                                            <ul className={skillsWrap} aria-label="Technologies used">
                                                <li className={skillItem}><div className={skillPill}>Docker</div></li>
                                                <li className={skillItem}><div className={skillPill}>TypeScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>React</div></li>
                                                <li className={skillItem}><div className={skillPill}>React Native</div></li>
                                                <li className={skillItem}><div className={skillPill}>Next.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>Vue</div></li>
                                                <li className={skillItem}><div className={skillPill}>Nuxt.js</div></li>
                                                <li className={skillItem}><div className={skillPill}>Ionic</div></li>
                                                <li className={skillItem}><div className={skillPill}>Tailwind CSS</div></li>
                                                <li className={skillItem}><div className={skillPill}>Laravel</div></li>
                                                <li className={skillItem}><div className={skillPill}>WordPress</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className={expExt}/>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-primary-500 sm:col-span-2"
                                            aria-label="2018 to Present">2017 – 2018
                                        </header>
                                        <div className="z-10 sm:col-span-6">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <Link className={`${linkTitle} group/link`}
                                                          href="https://kodeeo.com/" target="_blank"
                                                          rel="noreferrer noopener"
                                                          aria-label="Senior Software Engineer at UMR Labs (opens in a new tab)">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>
                                                            Kodeeo
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <div className="text-primary-500" aria-hidden="true">
                                                        Web Developer
                                                    </div>
                                                </div>
                                            </h3>
                                            <p className={itemDesc}>
                                                I've had the privilege of serving as a web developer at Kodeeo, where I
                                                also completed an enriching internship. My experience at Kodeeo allowed
                                                me to refine my skills and gain invaluable hands-on experience in the
                                                field of web development.
                                            </p>
                                            <ul className={skillsWrap} aria-label="Technologies used">
                                                <li className={skillItem}><div className={skillPill}>JavaScript</div></li>
                                                <li className={skillItem}><div className={skillPill}>Vue</div></li>
                                                <li className={skillItem}><div className={skillPill}>SCSS</div></li>
                                                <li className={skillItem}><div className={skillPill}>Bootstrap</div></li>
                                                <li className={skillItem}><div className={skillPill}>Laravel</div></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ol>

                            <div className="mt-12">
                                <Link
                                    className="inline-flex items-baseline leading-tight text-gray-400 hover:text-secondary focus-visible:text-secondary font-semibold text-base group/link"
                                    href="/abdullah_al_fahad_resume.pdf" target="_blank"
                                    aria-label="View Full Resume (opens in a new tab)">
                                    <span>
                                        <span className="inline-block">
                                            View Full Resume
                                            <Icon path={mdiOpenInNew}
                                                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section id="projects" role="section"
                             className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Selected projects">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary-900/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-400 lg:sr-only">Projects</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                {[
                                    {
                                        href: "https://sentinelepgroup.com/",
                                        title: "Sentinel EP",
                                        desc: "Sentinel Executive Protection is providing security services on demand. They meticulously curated a team of experts spanning diverse fields such as security, technology, and logistics. Presently, I am spearheading a comprehensive project encompassing both web and mobile applications in my role as the lead Software Engineer. My responsibilities involve orchestrating the development process, guiding the team, and ensuring the successful delivery of a cutting-edge solution.",
                                        skills: ["JavaScript", "TypeScript", "Vue", "Tailwind CSS", "Laravel"],
                                        img: "/images/sentinel.png",
                                    },
                                    {
                                        href: "http://178.128.209.181/",
                                        title: "Pintoe",
                                        desc: "Pintoe, a dynamic social media platform available on web and mobile, offers a range of features for both free and premium users. As lead Software Engineer, I oversee development for both platforms, guiding the team to deliver innovative solutions. After a successful in-house 1st version release, we're now advancing to the 2nd version to enhance user experience and functionality.",
                                        skills: ["JavaScript", "TypeScript", "React", "Next.js", "Ionic", "Capacitor", "Tailwind CSS", "Laravel (REST API)"],
                                        img: "/images/pintoe.png",
                                    },
                                    {
                                        href: "https://webaccess.ai/",
                                        title: "Webaccess",
                                        desc: "Webaccess AI provides a comprehensive solution for web accessibility, meeting WCAG and ADA guidelines for EU, USA and other countries. Built with JavaScript, TypeScript, CSS, and Webpack. I led its development from start to finish, ensuring that both the 1st and 2nd versions were successfully delivered.",
                                        skills: ["JavaScript", "TypeScript", "CSS", "Webpack", "Laravel (REST API)"],
                                        img: "/images/webaccess.png",
                                    },
                                    {
                                        href: "https://bully-hub.com/",
                                        title: "Bully-Hub",
                                        desc: "Bully-Hub connects responsible breeders with loving families, prioritizing high breeding standards and dog welfare. As a frontend team lead, I ensured the project's success by guiding and supporting the team.",
                                        skills: ["JavaScript", "jQuery", "Bootstrap", "Laravel"],
                                        img: "/images/bullyhub.png",
                                    },
                                    {
                                        href: "http://cleaning.accounts.llc/",
                                        title: "Guayllas Magic Cleaning",
                                        desc: "Guayllas Magic Cleaning was a passion for cleaning the world one customer at a time. I oversaw the frontend team's development efforts, ensuring a high-quality product was delivered through effective guidance and coordination.",
                                        skills: ["JavaScript", "TypeScript", "Vue", "Tailwind CSS", "Laravel"],
                                        img: "/images/cleanning.png",
                                    },
                                    {
                                        href: "https://quantibly.com/",
                                        title: "Quantibly",
                                        desc: "Quantibly stands out as an innovative SaaS solution tailored specifically for the Social Sector, offering comprehensive support for various critical functions including data collection, fundraising, financial management, and customer engagement processes. As the lead Frontend Engineer, I've been instrumental in driving the development of this pioneering platform, ensuring its seamless integration and optimal performance to meet the diverse needs of our clients in the social sector.",
                                        skills: ["JavaScript", "TypeScript", "Vue", "Tailwind CSS", "Django"],
                                        img: "/images/quantibly.png",
                                    },
                                    {
                                        href: "https://crowdfundly.com/",
                                        title: "Crowdfundly",
                                        desc: "CrowdFundly is a dynamic SaaS project dedicated to crowdfunding, empowering users to construct fundraising platforms, launch campaigns, and secure vital funding. We've employed a sophisticated stack of technologies, including Laravel, Nuxt.js, Scss, and Docker, to ensure robustness and scalability. Over the past 1.5 years, I've held the pivotal role of lead Frontend Developer, contributing my expertise from the project's inception to drive its frontend development forward.",
                                        skills: ["JavaScript", "TypeScript", "Vue", "Nuxt.js", "Vuex", "Docker", "Payment Gateway", "Multi-Language", "Wordpress Plugin", "Tailwind CSS", "Laravel", "React Native"],
                                        img: "/images/crowdfundly.png",
                                    },
                                    {
                                        href: "https://keeno.app/",
                                        title: "Keeno",
                                        desc: "Keeno is a cutting-edge eCommerce application meticulously crafted for seamless online shopping. I designed the entire application using HTML and SCSS within the Laravel Blade framework, prioritizing both aesthetics and performance, making Keeno a standout platform in the eCommerce industry.",
                                        skills: ["JavaScript", "jQuery", "Bootstrap (SCSS)", "Laravel"],
                                        img: "/images/keeno.png",
                                    },
                                ].map((project) => (
                                    <li key={project.title} className="mb-12">
                                        <div
                                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className={projectExt}/>
                                            <div className="z-10 sm:order-2 sm:col-span-6">
                                                <h3>
                                                    <Link className={`${linkTitle} group/link`}
                                                          href={project.href}
                                                          target="_blank" rel="noreferrer noopener"
                                                          aria-label={`${project.title} (opens in a new tab)`}>
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                        <span>
                                                            {project.title}
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </h3>
                                                <p className={itemDesc}>{project.desc}</p>

                                                <ul className={skillsWrap} aria-label="Technologies used">
                                                    {project.skills.map((s) => (
                                                        <li key={s} className={skillItem}>
                                                            <div className={skillPill}>{s}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <Image
                                                alt={`${project.title} project preview`}
                                                loading="lazy" width="200" height="48" decoding="async"
                                                className="rounded border-2 border-primary-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 !h-auto aspect-[16/12] object-cover object-left-top"
                                                src={project.img}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section id="writing" role="section"
                             className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Blog posts">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary-900/20 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-orange-400 lg:sr-only">Writing</h2>
                        </div>
                        <div>
                            <ul className="group/list">
                                {[
                                    {
                                        year: "2021",
                                        href: "https://medium.com/@al-fahad/change-website-brand-color-dynamically-6cb19071536b",
                                        title: "Change website brand color dynamically",
                                        img: "/images/medium.png",
                                    },
                                    {
                                        year: "2021",
                                        href: "https://www.npmjs.com/package/nuxt-video-player",
                                        title: "Nuxt Video Player",
                                        img: "/images/nuxt-video-player.png",
                                    },
                                    {
                                        year: "2020",
                                        href: "https://www.npmjs.com/package/react-native-responsive-grid-system",
                                        title: "React native responsive grid system",
                                        img: "/images/grid.png",
                                    },
                                    {
                                        year: "2022",
                                        href: "https://www.npmjs.com/package/vue-advance-dialog",
                                        title: "Vue advance dialog",
                                        img: "/images/vue-dialog.png",
                                    },
                                ].map((post) => (
                                    <li key={post.title} className="mb-12">
                                        <div
                                            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                            <div className={expExt}/>
                                            <Image alt={post.title} loading="lazy" width="200" height="48"
                                                   decoding="async"
                                                   className="z-10 col-span-2 rounded border-2 border-primary-200/10 transition group-hover:border-primary-200/30 sm:col-span-2 !h-auto aspect-[16/8] object-cover object-left-top"
                                                   src={post.img}/>
                                            <div className="z-10 col-span-6">
                                                <p className="-mt-1 text-sm font-semibold leading-6">{post.year}</p>
                                                <h3 className="-mt-1">
                                                    <Link className={`${linkTitle} group/link`}
                                                          href={post.href}
                                                          target="_blank" rel="noreferrer noopener"
                                                          aria-label={`${post.title} (opens in a new tab)`}>
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"/>
                                                        <span>
                                                            {post.title}
                                                            <span className="inline-block">
                                                                <Icon path={mdiOpenInNew} className={linkIcon}/>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                        <p>
                            Motivated by an exceptional software engineer's profile and exemplary coding standards
                            demonstrated within the WebStorm environment.
                        </p>
                    </footer>
                </div>
            </div>
        </main>
    );
}
