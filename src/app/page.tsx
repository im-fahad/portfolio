"use client"
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiGithub, mdiGitlab, mdiLinkedin, mdiNpm, mdiOpenInNew } from "@mdi/js";
import Link from "next/link";
import { useEffect, useState } from "react";

const mdiMedium =
	"M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.538l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.538V8.69l-5.389 13.688h-.728L4.278 8.69v9.174c-.052.386.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.668.325-1.052V6.887z";

export default function Home() {
    let [activeSection, setActiveSection] = useState('about');

    const initFocus = () => {
        const focus = document.getElementById("pointer");
        // @ts-ignore
        focus.style.background = `radial-gradient(600px at ${50}px ${50}px, rgba(255, 255, 255, 0.06), transparent 80%)`;

        document.addEventListener("mousemove", function (e) {
            let x: number = e.pageX;
            let y: number = e.pageY;
            // @ts-ignore
            focus.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(255, 255, 255, 0.06), transparent 80%)`;
        })
    }

    const setIntersectionObserver = () => {
        let sections = document.querySelectorAll(`section[id]`)

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
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

    // Smoothly scrolls to a section, with a small top offset so the heading
    // isn't flush against the viewport edge.
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top, behavior: "smooth" });
        setActiveSection(id);
    };

    // ─── Matte black palette ──────────────────────────────────────────────────
    // bg matte · surfaces matte-surface / matte-raised · accent neutral-100 (soft white)
    const skillsWrap = "mt-2 flex flex-wrap";
    const skillItem = "mr-1.5 mt-2";
    const skillPill = "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-neutral-100/5 text-neutral-300 ring-1 ring-inset ring-neutral-100/10";
    const skillPillExt = "flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-neutral-100/[0.03] text-neutral-400 ring-1 ring-inset ring-neutral-100/5";

    const expExt = "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100/[0.04] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] lg:group-hover:drop-shadow-lg";
    const projectExt = "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-100/[0.04] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] lg:group-hover:drop-shadow-lg";
    const linkTitle = "inline-flex items-baseline font-medium leading-tight text-neutral-100 hover:text-white focus-visible:text-white text-base";
    const linkIcon = "inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px mb-1";
    const itemDesc = "mt-2 text-sm leading-normal text-neutral-400";
    const sectionTitle = "text-sm font-bold uppercase tracking-widest text-neutral-200";
    const stickyBar = "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-matte/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:mb-9 lg:bg-transparent lg:backdrop-blur-none";

    return (
		<main className="relative w-full h-full min-h-screen bg-matte text-neutral-400">
			<div
				className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
				id="pointer"
			/>
			<div className="container mx-auto px-10 h-full lg:flex lg:justify-between lg:gap-4 z-20">
				<div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between pt-10 lg:!py-24">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
							<Link href="/">Abdullah Al Fahad</Link>
						</h1>
						<h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-200 sm:text-xl">
							Senior Front-end Engineer
						</h2>
						<p className="mt-4 max-w-md leading-normal text-neutral-500">
							Senior Frontend Engineer with 8+ years delivering production web and
							mobile applications. Strong bias toward clean code, performance, and
							ownership.
						</p>

						<ul
							className={`${skillsWrap} max-w-lg`}
							aria-label="Technologies used"
						>
							<li className={skillItem}>
								<div className={skillPill}>TypeScript</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>React.js</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Next.js</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Vue.js</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Nuxt.js</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Tailwind CSS</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>GraphQL</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Generative AI</div>
							</li>
							<li className={skillItem}>
								<div className={skillPill}>Node.js</div>
							</li>
							<li className={skillItem}>
								<div className={skillPillExt}>React Native</div>
							</li>
							<li className={skillItem}>
								<div className={skillPillExt}>WebRTC</div>
							</li>
							<li className={skillItem}>
								<div className={skillPillExt}>Docker</div>
							</li>
						</ul>
						<Link
							className="inline-flex items-baseline leading-tight text-neutral-500 hover:text-white focus-visible:text-white font-semibold text-base group/link mt-8"
							href="/abdullah_al_fahad_resume.pdf"
							target="_blank"
							aria-label="View Full Resume (opens in a new tab)"
						>
							<span>
								<span className="inline-block">
									View Full Resume
									<Icon
										path={mdiOpenInNew}
										className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px mb-1"
									/>
								</span>
							</span>
						</Link>
						<nav
							className="hidden lg:block"
							aria-label="In-page jump links"
						>
							<ul className="mt-16 w-max">
								{[
									{ id: "about", label: "About" },
									{ id: "experience", label: "Experience" },
									{ id: "projects", label: "Projects" },
									{ id: "writing", label: "Writing" },
									{ id: "opensource", label: "Open Source" },
								].map(({ id, label }) => {
									const isActive = activeSection === id;
									return (
										<li key={id}>
											<Link
												className="flex items-center py-3 group"
												href={`#${id}`}
												onClick={(e) => handleNavClick(e, id)}
											>
												<span
													className={`mr-4 h-px bg-neutral-700 transition-all group-hover:w-16 group-hover:bg-neutral-100 group-focus-visible:w-16 group-focus-visible:bg-neutral-100 motion-reduce:transition-none ${isActive ? "w-16 bg-neutral-100" : "w-8"}`}
												/>
												<span
													className={`text-xs font-bold uppercase tracking-widest group-hover:text-neutral-100 group-focus-visible:text-neutral-100 ${isActive ? "text-neutral-100" : "text-neutral-600"}`}
												>
													{label}
												</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</div>
					<div>
						<ul
							className="ml-1 mt-8 flex items-center"
							aria-label="Social media"
						>
							<li className="mr-5 text-xs shrink-0">
								<Link
									className="block text-neutral-500 hover:text-white transition-all"
									href="https://github.com/im-fahad"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="GitHub (opens in a new tab)"
									title="GitHub"
								>
									<Icon
										path={mdiGithub}
										size={1}
									/>
								</Link>
							</li>
							<li className="mr-5 text-xs shrink-0">
								<Link
									className="block text-neutral-500 hover:text-white transition-all"
									href="https://www.linkedin.com/in/im-fahad/"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="LinkedIn (opens in a new tab)"
									title="LinkedIn"
								>
									<Icon
										path={mdiLinkedin}
										size={1}
									/>
								</Link>
							</li>
							<li className="mr-5 text-xs shrink-0">
								<Link
									className="block text-neutral-500 hover:text-white transition-all"
									href="https://www.npmjs.com/~al_fahad"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="NPM (opens in a new tab)"
									title="NPM"
								>
									<Icon
										path={mdiNpm}
										size={1}
									/>
								</Link>
							</li>
							<li className="mr-5 text-xs shrink-0">
								<Link
									className="block text-neutral-500 hover:text-white transition-all"
									href="https://gitlab.com/im-fahad"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="GitLab (opens in a new tab)"
									title="GitLab"
								>
									<Icon
										path={mdiGitlab}
										size={1}
									/>
								</Link>
							</li>
							<li className="mr-5 text-xs shrink-0">
								<Link
									className="block text-neutral-500 hover:text-white transition-all"
									href="https://al-fahad.medium.com"
									target="_blank"
									rel="noreferrer noopener"
									aria-label="Medium (opens in a new tab)"
									title="Medium"
								>
									<Icon
										path={mdiMedium}
										size={1}
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div
					className="pt-24 lg:w-1/2 lg:py-24"
					id="content"
				>
					<section
						id="about"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						aria-label="About me"
					>
						<div className={stickyBar}>
							<h2 className={sectionTitle}>About</h2>
						</div>
						<div className="z-10 sm:col-span-6">
							<p className="mb-4 text-neutral-400">
								Senior Frontend Engineer with 8+ years delivering production web and
								mobile applications across React, Next.js, Vue, and Nuxt ecosystems.
								Experienced in real-time systems, AI integrations, and Web3 wallet
								flows.
								<br />
								<br />
								Proven track record leading cross-border teams and shipping
								full-featured products end-to-end — from architecture and API
								integration to component design and deployment. Strong bias toward
								clean code, performance, and ownership.
								<br />
								<br />
								On the mobile side, I build cross-platform applications with React
								Native, Ionic, and Capacitor. I complement this with solid state
								management through Redux and Zustand, and real-time communication
								using WebSockets and WebRTC.
								<br />
								<br />
								Beyond the frontend, I bring hands-on backend experience with
								Node.js, Laravel, and Django, which allows me to own features
								end-to-end — from API design and data modeling to pixel-perfect UI.
							</p>
						</div>
					</section>

					<section
						id="experience"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						aria-label="Work experience"
					>
						<div className={stickyBar}>
							<h2 className={sectionTitle}>Experience</h2>
						</div>
						<div>
							<ol className="group/list">
								{[
									{
										href: "https://ideeza.com/",
										company: "Ideeza",
										role: "Senior Front-end Engineer",
										duration: "2025 – present",
										desc: "Architected the AI-facing frontend for a blockchain platform that converts product ideas into hardware blueprints (circuits, 3D models, code) and secures IP on-chain. Owned the full prompt-to-output UX — streaming LLM responses, generation flow, and real-time feedback loops. Shipped Web3 wallet integration and NFT marketplace.",
										skills: [
											"Next.js",
											"TypeScript",
											"Tailwind CSS",
											"Generative AI",
											"Web3",
											"Three.js",
										],
									},
									{
										href: "http://revo-interactive.com/",
										company: "Revo Interactive",
										role: "Senior Front-end Engineer",
										duration: "2024 – 2025",
										desc: "Delivered multiple client projects in partnership with STEAH Inc. (Japan). Built a secure B2B portal for industrial dry-ice operations — ordering, inventory, real-time status, and reporting. Implemented RBAC, session management, and secure API integration across auth and authorization flows.",
										skills: [
											"Next.js",
											"TypeScript",
											"Golang",
											"GraphQL",
											"Tailwind CSS",
										],
									},
									{
										href: "https://umrlabs.com/",
										company: "UMR Labs",
										role: "Senior Front-end Engineer",
										duration: "2023 – 2024",
										desc: "Built a WCAG/ADA-compliant accessibility plugin in vanilla JavaScript. Delivered real-time audio/video calling and live streaming using WebRTC from scratch. Implemented WebSocket-driven live chat and PayPal checkout. Architected Vue.js + Tailwind CSS frontend for Sentinel EP from scratch.",
										skills: [
											"Next.js",
											"TypeScript",
											"Redux",
											"WebRTC",
											"WebSocket",
											"Vue.js",
											"Tailwind CSS",
										],
									},
									{
										href: "https://www.iquantile.com/",
										company: "iQuantile",
										role: "Software Engineer",
										duration: "2022 – 2023",
										desc: "Led the Vue.js rewrite of Quantibly, a non-profit SaaS platform, end-to-end — from planning through production launch. Mentored junior engineers and integrated Django REST APIs covering fundraising, financial reporting, and donor engagement modules.",
										skills: ["Vue.js", "Vuex", "Tailwind CSS", "Django"],
									},
									{
										href: "https://www.jouleslabs.com/",
										company: "Joules Labs",
										role: "Software Developer",
										duration: "2018 – 2022",
										desc: "Built a multi-tenant crowdfunding SaaS (Crowdfundly) with Nuxt.js, including an admin panel and reusable component library. Shipped a companion WordPress plugin extending the SaaS to 1,000+ WP sites. Integrated Laravel REST APIs and collaborated with the UI team on design system specs.",
										skills: [
											"Nuxt.js",
											"Vuex",
											"Tailwind CSS",
											"Laravel",
											"WordPress Plugin",
										],
									},
									{
										href: "https://www.kodeeo.com/",
										company: "Kodeeo",
										role: "Web Developer",
										duration: "2017 – 2018",
										desc: "Started my professional career building the company branding site. Collaborated with the PHP/Laravel backend team, picking up API integration patterns and backend fundamentals. Completed an internship that transitioned into a full role, shipping client-facing pages under real deadlines.",
										skills: [
											"JavaScript",
											"Vue",
											"SCSS",
											"Bootstrap",
											"Laravel",
										],
									},
								].map((exp) => (
									<li
										key={exp.company}
										className="mb-12"
									>
										<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className={expExt} />
											<header
												className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-600 sm:col-span-2"
												aria-label={exp.duration}
											>
												{exp.duration}
											</header>
											<div className="z-10 sm:col-span-6">
												<h3 className="font-medium leading-snug text-neutral-200">
													<div>
														<Link
															className={`${linkTitle} group/link`}
															href={exp.href}
															target="_blank"
															rel="noreferrer noopener"
															aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
														>
															<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
															<span>
																{exp.company}
																<span className="inline-block">
																	<Icon
																		path={mdiOpenInNew}
																		className={linkIcon}
																	/>
																</span>
															</span>
														</Link>
													</div>
													<div>
														<div
															className="text-neutral-500"
															aria-hidden="true"
														>
															{exp.role}
														</div>
													</div>
												</h3>
												<p className={itemDesc}>{exp.desc}</p>
												<ul
													className={skillsWrap}
													aria-label="Technologies used"
												>
													{exp.skills.map((s) => (
														<li
															key={s}
															className={skillItem}
														>
															<div className={skillPill}>{s}</div>
														</li>
													))}
												</ul>
											</div>
										</div>
									</li>
								))}
							</ol>

							<div className="mt-12">
								<Link
									className="inline-flex items-baseline leading-tight text-neutral-500 hover:text-white focus-visible:text-white font-semibold text-base group/link"
									href="/abdullah_al_fahad_resume.pdf"
									target="_blank"
									aria-label="View Full Resume (opens in a new tab)"
								>
									<span>
										<span className="inline-block">
											View Full Resume
											<Icon
												path={mdiOpenInNew}
												className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
											/>
										</span>
									</span>
								</Link>
							</div>
						</div>
					</section>

					<section
						id="projects"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						aria-label="Selected projects"
					>
						<div className={stickyBar}>
							<h2 className={sectionTitle}>Projects</h2>
						</div>
						<div>
							<ul className="group/list">
								{[
									{
										href: "https://ideeza.com/",
										title: "Ideeza Platform",
										desc: "Architected the AI-facing frontend for a blockchain platform that converts product ideas into hardware blueprints (circuits, 3D models, code) and secures IP on-chain. Owned the full prompt-to-output UX — streaming LLM responses, generation flow, and real-time feedback loops. Shipped Web3 wallet integration and NFT marketplace.",
										skills: [
											"Next.js",
											"TypeScript",
											"Tailwind CSS",
											"Generative AI",
											"Web3",
											"Three.js",
										],
										img: "/images/ideeza.png",
									},
									{
										href: "https://tradersconnect.com/",
										title: "Traders Connect",
										desc: "Redesigned the full trading-management UI — copy-trading dashboard, performance analytics, and broker comparison. Integrated real-time account data and execution flows via updated REST APIs. Improved page load performance by optimizing component rendering and reducing unnecessary re-fetches.",
										skills: ["Next.js", "TypeScript", "Tailwind CSS"],
										img: "/images/treders_connect.png",
									},
									{
										href: "https://webaccess.ai/",
										title: "Webaccess",
										desc: "Built a WCAG/ADA-compliant accessibility plugin in vanilla JavaScript — drop-in compatible with any host site. Designed reusable Next.js component library and integrated Laravel REST APIs with Next-Auth.",
										skills: [
											"Next.js",
											"TypeScript",
											"Tailwind CSS",
											"Laravel",
										],
										img: "/images/webaccess.png",
									},
									{
										href: "http://178.128.209.181/",
										title: "Pintoe",
										desc: "Delivered real-time audio/video calling and live streaming using WebRTC from scratch. Implemented WebSocket-driven live chat and PayPal checkout for premium plan upgrades.",
										skills: [
											"Next.js",
											"TypeScript",
											"Redux",
											"WebRTC",
											"WebSocket",
											"Tailwind CSS",
										],
										img: "/images/pintoe.png",
									},
									{
										href: "https://sentinelepgroup.com/",
										title: "Sentinel EP",
										desc: "Architected the Vue.js + Tailwind CSS frontend from scratch and integrated it with a Laravel Blade backend for a security services platform.",
										skills: ["Vue.js", "Vuex", "Tailwind CSS", "Laravel"],
										img: "/images/sentinel.png",
									},
									{
										href: "https://quantibly.com/",
										title: "Quantibly",
										desc: "Led the Vue.js rewrite of a non-profit SaaS platform end-to-end — from planning through production launch. Mentored junior engineers and integrated Django REST APIs covering fundraising, financial reporting, and donor engagement modules.",
										skills: ["Vue.js", "Vuex", "Tailwind CSS", "Django"],
										img: "/images/quantibly.png",
									},
									{
										href: "https://crowdfundly.com/",
										title: "Crowdfundly",
										desc: "Built a multi-tenant crowdfunding SaaS with Nuxt.js, including an admin panel and reusable component library. Shipped a companion WordPress plugin extending the SaaS to 1,000+ WP sites.",
										skills: [
											"Nuxt.js",
											"Vuex",
											"Tailwind CSS",
											"Laravel",
											"WordPress Plugin",
										],
										img: "/images/crowdfundly.png",
									},
									{
										href: "https://www.aiornot.com/",
										title: "AI or NOT",
										desc: "Implemented PayPal-based premium subscription flow and resolved critical bugs across the React codebase.",
										skills: [
											"Next.js",
											"TypeScript",
											"AWS Amplify",
											"Tailwind CSS",
										],
										img: "/images/ai_or_not.png",
									},
									{
										href: "https://floatpic.com/",
										title: "Floatpic",
										desc: "Delivered feature additions and production bug fixes on a React-based image-sharing platform.",
										skills: ["Next.js", "TypeScript", "AWS Amplify"],
										img: "/images/floatpic.png",
									},
									{
										href: "https://keeno.app/",
										title: "Keeno",
										desc: "Built the eCommerce storefront in HTML/SCSS and converted it into reusable Laravel Blade templates. Ensured cross-browser compatibility and pixel-perfect implementation from Figma designs.",
										skills: ["JavaScript", "jQuery", "SCSS", "Laravel"],
										img: "/images/keeno.png",
									},
								].map((project) => (
									<li
										key={project.title}
										className="mb-12"
									>
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className={projectExt} />
											<div className="z-10 sm:order-2 sm:col-span-6">
												<h3>
													<Link
														className={`${linkTitle} group/link`}
														href={project.href}
														target="_blank"
														rel="noreferrer noopener"
														aria-label={`${project.title} (opens in a new tab)`}
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
														<span>
															{project.title}
															<span className="inline-block">
																<Icon
																	path={mdiOpenInNew}
																	className={linkIcon}
																/>
															</span>
														</span>
													</Link>
												</h3>
												<p className={itemDesc}>{project.desc}</p>

												<ul
													className={skillsWrap}
													aria-label="Technologies used"
												>
													{project.skills.map((s) => (
														<li
															key={s}
															className={skillItem}
														>
															<div className={skillPill}>{s}</div>
														</li>
													))}
												</ul>
											</div>
											<Image
												alt={`${project.title} project preview`}
												loading="lazy"
												width="200"
												height="48"
												decoding="async"
												className="rounded border border-neutral-100/10 transition group-hover:border-neutral-100/25 sm:order-1 sm:col-span-2 sm:translate-y-1 !h-auto aspect-[16/12] object-cover object-left-top"
												src={project.img}
											/>
										</div>
									</li>
								))}
							</ul>
						</div>
					</section>

					<section
						id="writing"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						aria-label="Blog posts"
					>
						<div className={stickyBar}>
							<h2 className={sectionTitle}>Writing</h2>
						</div>
						<div>
							<ul className="group/list">
								{[
									{
										year: "2025",
										href: "https://al-fahad.medium.com/i-shipped-a-video-player-to-npm-twice-5bf8b580a0a0",
										title: "I shipped a video player to npm twice",
										img: "/images/medium.png",
									},
									{
										year: "2024",
										href: "https://al-fahad.medium.com/implementing-user-authentication-in-next-js-14-using-authjs-credentials-rest-api-f77c9547938e",
										title: "Implementing user authentication in Next.js 14 using Auth.js credentials & REST API",
										img: "/images/medium.png",
									},
									{
										year: "2021",
										href: "https://medium.com/@al-fahad/change-website-brand-color-dynamically-6cb19071536b",
										title: "Change website brand color dynamically",
										img: "/images/medium.png",
									},
								].map((post) => (
									<li
										key={post.title}
										className="mb-12"
									>
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className={expExt} />
											<Image
												alt={post.title}
												loading="lazy"
												width="200"
												height="48"
												decoding="async"
												className="z-10 col-span-2 rounded border border-neutral-100/10 transition group-hover:border-neutral-100/25 sm:col-span-2 !h-auto aspect-[16/8] object-cover object-left-top"
												src={post.img}
											/>
											<div className="z-10 col-span-6">
												<p className="-mt-1 text-sm font-semibold leading-6 text-neutral-300">
													{post.year}
												</p>
												<h3 className="-mt-1">
													<Link
														className={`${linkTitle} group/link`}
														href={post.href}
														target="_blank"
														rel="noreferrer noopener"
														aria-label={`${post.title} (opens in a new tab)`}
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
														<span>
															{post.title}
															<span className="inline-block">
																<Icon
																	path={mdiOpenInNew}
																	className={linkIcon}
																/>
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

					<section
						id="opensource"
						className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						aria-label="Open source packages"
					>
						<div className={stickyBar}>
							<h2 className={sectionTitle}>Open Source Packages</h2>
						</div>
						<div>
							<ul className="group/list">
								{[
									{
										year: "2025",
										href: "https://www.npmjs.com/package/@glitchlab/react-video-player",
										title: "@glitchlab/react-video-player",
										desc: "A modern, feature-rich video player component for React — published to npm under the GlitchLab namespace.",
										img: "/images/nuxt-video-player.png",
									},
									{
										year: "2025",
										href: "https://www.npmjs.com/package/@glitchlab/vue-video-player",
										title: "@glitchlab/vue-video-player",
										desc: "Vue.js port of the GlitchLab video player — same API surface, idiomatic Vue 3 composition.",
										img: "/images/nuxt-video-player.png",
									},
									{
										year: "2025",
										href: "https://video-player-playgraound.vercel.app/",
										title: "Video Player Playground",
										desc: "Live demo and playground showcasing both React and Vue video players with configurable props.",
										img: "/images/medium.png",
									},
								].map((pkg) => (
									<li
										key={pkg.title}
										className="mb-12"
									>
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className={projectExt} />
											<Image
												alt={pkg.title}
												loading="lazy"
												width="200"
												height="48"
												decoding="async"
												className="z-10 col-span-2 rounded border border-neutral-100/10 transition group-hover:border-neutral-100/25 sm:col-span-2 !h-auto aspect-[16/8] object-cover object-left-top"
												src={pkg.img}
											/>
											<div className="z-10 col-span-6">
												<p className="-mt-1 text-sm font-semibold leading-6 text-neutral-300">
													{pkg.year}
												</p>
												<h3 className="-mt-1">
													<Link
														className={`${linkTitle} group/link`}
														href={pkg.href}
														target="_blank"
														rel="noreferrer noopener"
														aria-label={`${pkg.title} (opens in a new tab)`}
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
														<span>
															{pkg.title}
															<span className="inline-block">
																<Icon
																	path={mdiOpenInNew}
																	className={linkIcon}
																/>
															</span>
														</span>
													</Link>
												</h3>
												<p className={itemDesc}>{pkg.desc}</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</section>

					<footer className="max-w-md pb-16 text-sm text-neutral-600 sm:pb-0">
						<p>Built with Next.js and Tailwind CSS, deployed on Vercel.</p>
					</footer>
				</div>
			</div>
		</main>
	);
}
