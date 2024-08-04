import Image from "next/image";
import Link from "next/link";
import Skills from "@/components/resume/Skills";
import Experiences from "@/components/resume/Experiences";
import Contact from "@/components/resume/Contact";
import Links from "@/components/resume/Links";
import Header from "@/components/resume/Header";
import Tools from "@/components/resume/Tools";
import Projects from "@/components/resume/Projects";

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
                    
                    <Contact/>
                    
                    <Links/>
                    
                    <Skills/>
                </div>
                
                {/*header*/}
                <Header/>
                
                {/*inner*/}
                <div className="resume__inner">
                    <Experiences page={0}/>
                </div>
            </div>
            
            {/*page 2*/}
            <div className="resume__page">
                {/*sidebar*/}
                <div className="resume__sidebar">
                    <div className="resume__header !h-[2px] !bg-transparent"></div>
                    
                    <Tools/>
                    
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
                    <Experiences page={1}/>
                    
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
                    
                    <Projects/>
                </div>
            </div>
        </div>
    );
}
