"use client";

// ─── Imports ──────────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import {
    mdiEmailOutline,
    mdiGithub,
    mdiGitlab,
    mdiLinkedin,
    mdiLinkVariant,
    mdiMapMarkerRadiusOutline,
    mdiNpm,
    mdiPhoneClassic,
    mdiWeb,
} from "@mdi/js";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
    name: string;
    url: string;
    skills?: string[];
    works: string[];
}

interface Experience {
    designation: string;
    company: string;
    company_url: string;
    duration: string;
    projects?: Project[];
    works?: string[];
}

interface OpenSourceItem {
    name: string;
    url: string;
    year: string;
    description: string;
}

export default function ResumeFreelance() {
    // ─── Dynamic avatar height (matches header height via ResizeObserver) ─────
    const headerRef = useRef<HTMLDivElement>(null);
    const [avatarWrapperHeight, setAvatarWrapperHeight] = useState<number | null>(null);

    useEffect(() => {
        if (!headerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) setAvatarWrapperHeight(entry.target.clientHeight);
        });
        observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    // ─── Layout primitives ────────────────────────────────────────────────────
    const page = "w-[21cm] h-[29.7cm] mx-auto mb-10 last:mb-0 overflow-hidden relative bg-white shadow-[inset_0_1px_0_0_rgba(55,31,24,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] text-sm print:mb-0 print:rounded-none print:shadow-none";
    const header = "w-full bg-primary-200 mt-4 pl-[280px]";
    const headerSection = "px-8 py-5";
    const sidebar = "w-[264px] h-full bg-white border-x-2 border-primary-200 absolute left-4 top-0";
    const sidebarSection = "pt-8 pb-0 px-5";
    const sidebarAvatarWrapper = "px-5 py-2 mt-4 flex items-center justify-center";
    const sidebarAvatar = "w-full aspect-square rounded-full border-8 border-primary-200";
    const innerPadding = "pl-[280px]";
    const sectionPadding = "px-8 pt-8 pb-3";

    // ─── Section titles ───────────────────────────────────────────────────────
    const sectionTitle = "text-base text-primary-900 uppercase font-semibold relative pb-2 mb-6 tracking-[4px] leading-[1.1rem] after:content-[''] after:w-8 after:h-px after:bg-primary-400 after:absolute after:left-0 after:bottom-0";
    const sidebarSectionTitle = sectionTitle + " mb-5";

    // ─── Header text styles ───────────────────────────────────────────────────
    const designation = "font-Raleway text-xs text-gray-900 uppercase font-light mb-2 tracking-widest";
    const name = "font-Raleway text-2xl text-primary-900 uppercase font-medium relative pb-1 mb-2 after:content-[''] after:w-8 after:h-px after:bg-primary-400 after:absolute after:left-0 after:bottom-0";
    const desc = "text-primary-800 text-sm";

    // ─── Link interaction (shared by all anchor instances) ───────────────────
    const linkInteraction = "hover:text-secondary-700 hover:underline focus-visible:text-secondary-700 focus-visible:underline focus-visible:outline-none transition-colors";

    // ─── Sidebar (contact / skills) styles ────────────────────────────────────
    // Anchors use `inline-flex` (not `flex`) so Chrome's "Save as PDF" attaches
    // clickable link rects — it skips block/flex-level <a> elements.
    const contact = "w-full flex flex-col gap-2";
    const contactItem = `inline-flex items-center text-[13px] gap-2 text-gray-600 w-max ${linkInteraction}`;
    const contactIcon = "size-4";
    const skillsList = "grid grid-flow-row grid-cols-2 list-disc list-inside text-[13px] text-gray-600 gap-1";

    // ─── Experience styles ────────────────────────────────────────────────────
    const experiencesWrap = "w-full flex flex-col gap-8";
    const experienceTitle = "text-sm text-primary-900 uppercase font-semibold mb-1";
    const experienceCompany = `text-sm text-gray-600 font-medium italic hover:underline inline-flex items-center gap-1 w-max ${linkInteraction}`;
    const experienceDuration = "text-sm text-primary-900 font-medium";
    const experienceList = "list-disc text-gray-500 mt-2 pl-4 font-normal";
    const experienceListItem = "text-gray-600 mb-1 last:mb-0 text-xs leading-snug";

    // ─── Nested project styles ────────────────────────────────────────────────
    const nestedProjects = "w-full flex flex-col gap-3 border-l-2 border-primary-200 pl-4 mt-3";
    const projectName = `text-sm text-primary-900 uppercase font-semibold inline-flex items-center gap-1 w-max ${linkInteraction}`;
    const skillTags = "flex flex-wrap gap-1.5 mt-1";
    const skillTag = "text-[10px] uppercase tracking-wide text-primary-900 bg-primary-100 px-2 py-0.5 rounded";

    // ─── Other-projects (freelance) styles ────────────────────────────────────
    const otherProjectsWrap = "w-full flex flex-col gap-4";
    const otherProjectTitle = `text-sm text-primary-900 uppercase font-semibold mb-1 inline-flex items-center gap-1 w-max ${linkInteraction}`;

    // ─── Data: skills & tools ─────────────────────────────────────────────────
    const skills = [
        "TypeScript", "JavaScript",
        "React.js", "Next.js",
        "Vue.js", "Nuxt.js",
        "Redux Toolkit", "Zustand",
        "Tailwind CSS", "shadcn/ui",
        "GraphQL", "Vitest",
        "Generative AI", "Node.js",
    ];

    const tools = [
        "Git", "GitHub Actions",
        "NPM", "Yarn",
        "Docker", "Sentry",
        "Figma", "Postman",
        "AI Coding (Cursor, Claude Code)",
    ];

    // ─── Data: contact links ──────────────────────────────────────────────────
    const links = [
        { label: "al-fahad.vercel.app", icon: mdiWeb, url: "https://al-fahad.vercel.app/" },
        { label: "github.com/im-fahad", icon: mdiGithub, url: "https://github.com/im-fahad" },
        { label: "gitlab.com/im-fahad", icon: mdiGitlab, url: "https://gitlab.com/im-fahad" },
        { label: "linkedin.com/in/im-fahad", icon: mdiLinkedin, url: "https://www.linkedin.com/in/im-fahad/" },
        { label: "npmjs.com/~glitchlab", icon: mdiNpm, url: "https://www.npmjs.com/~glitchlab" },
    ];

    // ─── Data: experience — page 1 (most recent) ──────────────────────────────
    const experiencesPage1: Experience[] = [
        {
            designation: "SENIOR FRONT-END ENGINEER",
            company: "IDEEZA",
            company_url: "https://ideeza.com/",
            duration: "2025 - Present",
            projects: [
                {
                    name: "Ideeza Platform",
                    url: "https://ideeza.com/",
                    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Generative AI", "Web3", "Three.js"],
                    works: [
                        "Architected the AI-facing frontend for a blockchain platform that converts product ideas into hardware blueprints (circuits, 3D models, code) and secures IP on-chain.",
                        "Owned the full prompt-to-output UX — streaming LLM responses, generation flow, and real-time feedback loops.",
                        "Shipped Web3 wallet integration and NFT marketplace for trading blueprints with the $IDZ token.",
                        "Collaborated with the Three.js team on interactive 2D/3D viewers and blueprint customization tools.",
                    ],
                },
            ],
        },
        {
            designation: "SENIOR FRONT-END ENGINEER",
            company: "Revo Interactive",
            company_url: "http://revo-interactive.com/",
            duration: "2024 - 2025",
            works: [
                "Delivered multiple client projects in partnership with STEAH Inc. (Japan), a social-tech studio serving healthcare, welfare, and environmental sectors.",
            ],
            projects: [
                {
                    name: "Eneos Dryice System (B2B Portal)",
                    url: "",
                    skills: ["Next.js", "TypeScript", "Golang", "GraphQL", "Tailwind CSS"],
                    works: [
                        "Built a secure B2B portal for industrial dry-ice operations — ordering, inventory, real-time status, and reporting.",
                        "Implemented RBAC, session management, and secure API integration across auth and authorization flows.",
                        "Automated the end-to-end fulfillment workflow by integrating logistics, ERP, and monitoring APIs.",
                    ],
                },
            ],
        },
    ];

    // ─── Data: experience — page 2 (earlier) ──────────────────────────────────
    const experiencesPage2: Experience[] = [
        {
            designation: "SENIOR FRONT-END ENGINEER",
            company: "UMR Labs",
            company_url: "https://umrlabs.com/",
            duration: "2023 - 2024",
            projects: [
                {
                    name: "Webaccess",
                    url: "https://webaccess.ai/",
                    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
                    works: [
                        "Built a WCAG/ADA-compliant accessibility plugin in vanilla JavaScript — drop-in compatible with any host site.",
                        "Designed reusable Next.js component library and integrated Laravel REST APIs with Next-Auth.",
                    ],
                },
                {
                    name: "Pintoe",
                    url: "http://178.128.209.181/",
                    skills: ["Next.js", "TypeScript", "Redux", "WebRTC", "WebSocket", "Tailwind CSS"],
                    works: [
                        "Delivered real-time audio/video calling and live streaming using WebRTC from scratch.",
                        "Implemented WebSocket-driven live chat and PayPal checkout for premium plan upgrades.",
                    ],
                },
                {
                    name: "Sentinel EP",
                    url: "https://sentinelepgroup.com/",
                    skills: ["Vue.js", "Vuex", "Tailwind CSS", "Laravel"],
                    works: [
                        "Architected the Vue.js + Tailwind CSS frontend from scratch and integrated it with a Laravel Blade backend.",
                    ],
                },
            ],
        },
        {
            designation: "SOFTWARE ENGINEER",
            company: "iQuantile",
            company_url: "https://www.iquantile.com/",
            duration: "2022 - 2023",
            projects: [
                {
                    name: "Quantibly",
                    url: "https://quantibly.com/",
                    skills: ["Vue.js", "Vuex", "Tailwind CSS", "Django"],
                    works: [
                        "Led the Vue.js rewrite of a non-profit SaaS platform end-to-end — from planning through production launch.",
                        "Mentored junior engineers through code reviews, pair programming, and architecture decisions.",
                        "Integrated Django REST APIs covering fundraising, financial reporting, and donor engagement modules.",
                    ],
                },
            ],
        },
        {
            designation: "SOFTWARE DEVELOPER",
            company: "Joules Labs",
            company_url: "https://www.jouleslabs.com/",
            duration: "2018 - 2022",
            projects: [
                {
                    name: "Crowdfundly",
                    url: "https://crowdfundly.com/",
                    skills: ["Nuxt.js", "Vuex", "Tailwind CSS", "Laravel", "WordPress Plugin"],
                    works: [
                        "Built a multi-tenant crowdfunding SaaS with Nuxt.js, including an admin panel and reusable component library.",
                        "Shipped a companion WordPress plugin in coordination with the plugin team, extending the SaaS to 1,000+ WP sites.",
                        "Integrated Laravel REST APIs and collaborated with the UI team on design system specs.",
                    ],
                },
            ],
        },
        {
            designation: "WEB DEVELOPER",
            company: "Kodeeo",
            company_url: "https://www.kodeeo.com/",
            duration: "2017 - 2018",
            works: [
                "Started my professional career building the company branding site — first exposure to production-grade HTML, SCSS, and JavaScript.",
                "Collaborated with the PHP/Laravel backend team, picking up API integration patterns and backend fundamentals that still inform how I work with backend engineers today.",
                "Completed an internship that transitioned into a full role, shipping client-facing pages under real deadlines.",
            ],
        },
    ];

    // ─── Data: freelance / contract projects ──────────────────────────────────
    const freelanceProjects: Project[] = [
        {
            name: "Traders Connect",
            url: "https://tradersconnect.com/",
            skills: ["Next.js", "TypeScript", "Tailwind CSS"],
            works: [
                "Redesigned the full trading-management UI — copy-trading dashboard, performance analytics, and broker comparison.",
                "Integrated real-time account data and execution flows via updated REST APIs across the frontend.",
                "Improved page load performance by optimizing component rendering and reducing unnecessary re-fetches.",
            ],
        },
        {
            name: "AI or NOT",
            url: "https://www.aiornot.com/",
            skills: ["Next.js", "TypeScript", "AWS Amplify", "Tailwind CSS"],
            works: [
                "Implemented PayPal-based premium subscription flow and resolved critical bugs across the React codebase.",
                "Worked directly with the founder to scope, estimate, and ship features on a fast-moving production codebase.",
            ],
        },
        {
            name: "Floatpic",
            url: "https://floatpic.com/",
            skills: ["Next.js", "TypeScript", "AWS Amplify"],
            works: [
                "Delivered feature additions and production bug fixes on a React-based image-sharing platform.",
                "Maintained code quality and consistency across the codebase with minimal onboarding time.",
            ],
        },
        {
            name: "Keeno",
            url: "https://keeno.app/",
            skills: ["JavaScript", "jQuery", "SCSS", "Laravel"],
            works: [
                "Built the eCommerce storefront in HTML/SCSS and converted it into reusable Laravel Blade templates.",
                "Ensured cross-browser compatibility and pixel-perfect implementation from Figma designs.",
            ],
        },
    ];

    // ─── Data: open source / npm packages ─────────────────────────────────────
    const openSourceItems: OpenSourceItem[] = [
        {
            name: "@glitchlab/react-video-player",
            url: "https://www.npmjs.com/package/@glitchlab/react-video-player",
            year: "2025",
            description: "A modern, feature-rich video player component for React — published to npm under the GlitchLab namespace.",
        },
        {
            name: "@glitchlab/vue-video-player",
            url: "https://www.npmjs.com/package/@glitchlab/vue-video-player",
            year: "2025",
            description: "Vue.js port of the GlitchLab video player — same API surface, idiomatic Vue 3 composition.",
        },
        {
            name: "Video Player Playground",
            url: "https://video-player-playgraound.vercel.app/",
            year: "2025",
            description: "Live demo and playground showcasing both React and Vue video players with configurable props.",
        },
    ];

    // ─── Renderers ────────────────────────────────────────────────────────────

    // Renders a real <a> anchor when a URL exists, plain text otherwise.
    // A plain <Link href=""> produces a broken anchor that doesn't export to PDF.
    const titledLink = (url: string, className: string, children: React.ReactNode) =>
        url ? (
            <a href={url} target="_blank" rel="noreferrer noopener" className={className}>
                <Icon size={0.6} path={mdiLinkVariant} />
                {children}
            </a>
        ) : (
            <span className={className}>{children}</span>
        );

    const renderExperience = (exp: Experience, key: number) => (
        <div key={key}>
            <h2 className={experienceTitle}>{exp.designation}</h2>
            <div className="flex items-center gap-2">
                {titledLink(exp.company_url, experienceCompany, exp.company)}
                <span className="font-bold">-</span>
                <h4 className={experienceDuration}>{exp.duration}</h4>
            </div>

            {exp.works && (
                <ul className={experienceList}>
                    {exp.works.map((work, key_2) => (
                        <li className={experienceListItem} key={key_2}>{work}</li>
                    ))}
                </ul>
            )}

            {exp.projects && (
                <div className={nestedProjects}>
                    {exp.projects.map((project, p_key) => (
                        <div key={p_key}>
                            {titledLink(project.url, projectName, project.name)}
                            {project.skills && (
                                <div className={skillTags}>
                                    {project.skills.map((s) => (
                                        <span key={s} className={skillTag}>{s}</span>
                                    ))}
                                </div>
                            )}
                            <ul className={experienceList}>
                                {project.works.map((work, key_2) => (
                                    <li className={experienceListItem} key={key_2}>{work}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    const renderProject = (project: Project, key: number) => (
        <div key={key}>
            {titledLink(project.url, otherProjectTitle, project.name)}
            {project.skills && (
                <div className={skillTags}>
                    {project.skills.map((s) => (
                        <span key={s} className={skillTag}>{s}</span>
                    ))}
                </div>
            )}
            <ul className={experienceList}>
                {project.works.map((work, key_2) => (
                    <li className={experienceListItem} key={key_2}>{work}</li>
                ))}
            </ul>
        </div>
    );

    const renderOpenSource = (item: OpenSourceItem, key: number) => (
        <div key={key}>
            <div className="flex items-center gap-2">
                {titledLink(item.url, otherProjectTitle, item.name)}
                <span className="text-[10px] text-gray-400 font-normal">{item.year}</span>
            </div>
            <p className="text-xs text-gray-600 mt-0.5 leading-snug">{item.description}</p>
        </div>
    );

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <>
            {/* Floating PDF download button (hidden on print) */}
            <button
                onClick={() => window.print()}
                className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-primary-900 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-all print:hidden"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 11l-5 5zm-7 2h14v2H5v-2z" />
                </svg>
                Download PDF
            </button>

            <div
                id="resumeFreelance"
                className="w-full h-auto p-10 font-Raleway text-gray-600 print:p-0"
            >
                {/* ═══════════════════════════════════════════════════════════════
                     PAGE 1 — Header · Education · Experience (recent)
                     Sidebar — Avatar · Contact · Links · Skills · Tools
                   ═══════════════════════════════════════════════════════════════ */}
                <div className={page}>
                    {/* Sidebar */}
                    <div className={sidebar}>
                        {/* Avatar (height syncs with header via ResizeObserver) */}
                        <div
                            className={sidebarAvatarWrapper}
                            style={avatarWrapperHeight ? { height: `${avatarWrapperHeight}px` } : undefined}
                        >
                            <Image className={sidebarAvatar} src="/images/avatar.jpg" alt="Avatar" width={200} height={200} />
                        </div>

                        {/* Contact */}
                        <div className={sidebarSection}>
                            <h1 className={sidebarSectionTitle}>Contact</h1>
                            <div className={contact}>
                                <a href="tel:008801738-916935" className={`${contactItem} font-Roboto`}>
                                    <Icon className={contactIcon} path={mdiPhoneClassic} />
                                    +880 1738916935
                                </a>
                                <a href="mailto:abdullahalfahad.bd@gmail.com" className={contactItem}>
                                    <Icon className={contactIcon} path={mdiEmailOutline} />
                                    abdullahalfahad.bd@gmail.com
                                </a>
                                <div className={contactItem}>
                                    <Icon className={contactIcon} path={mdiMapMarkerRadiusOutline} />
                                    Dhaka, Bangladesh
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className={sidebarSection}>
                            <h1 className={sidebarSectionTitle}>Links</h1>
                            <div className={contact}>
                                {links.map((link, key) => (
                                    <a key={key} href={link.url} target="_blank" rel="noreferrer noopener" className={contactItem}>
                                        <Icon className={contactIcon} path={link.icon} />
                                        {link.label}
                                        <Icon size={.6} path={mdiLinkVariant} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div className={sidebarSection}>
                            <h1 className={sidebarSectionTitle}>Skills</h1>
                            <ul className={skillsList}>
                                {skills.map((skill, key) => (
                                    <li key={key}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools */}
                        <div className={sidebarSection}>
                            <h1 className={sidebarSectionTitle}>Tools</h1>
                            <ul className={skillsList}>
                                {tools.map((tool, key) => (
                                    <li key={key} className={tool.startsWith("AI Coding") ? "col-span-2" : ""}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Header — designation, name, summary */}
                    <div className={header}>
                        <div ref={headerRef} className={headerSection}>
                            <h2 className={designation}>Senior Front-end Engineer · Available for Contract</h2>
                            <h1 className={name}>Abdullah Al Fahad</h1>
                            <p className={desc}>
                                Senior Frontend Engineer with 8+ years building production web and mobile applications.
                                Specialized in AI-integrated products, Web3 interfaces, and real-time systems using
                                React, Next.js, Vue, and Nuxt. I work directly with founders and product teams —
                                taking projects from architecture to deployment with minimal hand-holding.
                                Available for full-project builds, long-term contracts, and specialized consulting
                                in Generative AI UX and Web3 frontends.
                            </p>
                        </div>
                    </div>

                    {/* Main content — Education + Experience */}
                    <div className={innerPadding}>
                        {/* Education */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Education</h1>
                            <div className="w-full flex flex-col gap-2">
                                <div>
                                    <h2 className="text-sm text-primary-900 font-semibold mb-1">
                                        MECHATRONICS ENGINEERING (B.Sc.)
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <a href="https://wub.edu.bd/" target="_blank" rel="noreferrer noopener"
                                            className={`text-sm text-gray-600 font-medium italic hover:underline flex items-center gap-1 ${linkInteraction}`}>
                                            <Icon size={.6} path={mdiLinkVariant} />
                                            World University of Bangladesh
                                        </a>
                                        <span className="font-bold">-</span>
                                        <h4 className="text-sm text-primary-900 font-medium">2022</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience — recent */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Experience</h1>
                            <div className={experiencesWrap}>
                                {experiencesPage1.map((exp, key) => renderExperience(exp, key))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════════════════
                     PAGE 2 — Experience (continued, earlier roles)
                   ═══════════════════════════════════════════════════════════════ */}
                <div className={page}>
                    <div className="w-0 h-full bg-white border-l-2 border-primary-200 absolute left-4 top-0" />
                    <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]" />

                    <div className="pl-[18px]">
                        {/* Experience — earlier */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Experience</h1>
                            <div className={experiencesWrap}>
                                {experiencesPage2.map((exp, key) => renderExperience(exp, key))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════════════════════════
                     PAGE 3 — Freelance · Open Source · Languages · Availability
                   ═══════════════════════════════════════════════════════════════ */}
                <div className={page}>
                    <div className="w-0 h-full bg-white border-l-2 border-primary-200 absolute left-4 top-0" />
                    <div className="w-full h-[2px] bg-primary-200 mt-4 pl-[280px]" />

                    <div className="pl-[18px]">
                        {/* Freelance / Contract Work */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Freelance / Contract Work</h1>
                            <div className={otherProjectsWrap}>
                                {freelanceProjects.map((project, key) => renderProject(project, key))}
                            </div>
                        </div>

                        {/* Open Source & NPM */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Open Source & NPM</h1>
                            <div className="w-full flex flex-col gap-3">
                                {openSourceItems.map((item, key) => renderOpenSource(item, key))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div className={sectionPadding}>
                            <h1 className={sectionTitle}>Languages</h1>
                            <ul className="flex flex-wrap list-disc list-inside text-sm text-gray-600 gap-x-8 gap-y-1">
                                <li>Bengali</li>
                                <li>English</li>
                            </ul>
                        </div>

                        {/* Availability callout — final CTA for clients */}
                        <div className="mx-8 mt-8 mb-3 p-5 bg-primary-100 border-l-4 border-primary-400 rounded-sm">
                            <h2 className="text-sm text-primary-900 uppercase font-semibold tracking-wider mb-2">Available for Contract</h2>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Open to full-project builds, long-term contracts, and consulting engagements —
                                particularly in <span className="font-medium text-primary-900">Generative AI UX</span>,{" "}
                                <span className="font-medium text-primary-900">Web3 frontends</span>, and{" "}
                                <span className="font-medium text-primary-900">real-time web applications</span>.
                                I work async-friendly across time zones and integrate directly into existing teams or lead solo.
                                Reach me at{" "}
                                <a href="mailto:abdullahalfahad.bd@gmail.com" className={`underline text-primary-900 font-medium ${linkInteraction}`}>
                                    abdullahalfahad.bd@gmail.com
                                </a>{" "}
                                or via{" "}
                                <a href="https://al-fahad.vercel.app/" target="_blank" rel="noreferrer noopener" className={`underline text-primary-900 font-medium ${linkInteraction}`}>
                                    al-fahad.vercel.app
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
