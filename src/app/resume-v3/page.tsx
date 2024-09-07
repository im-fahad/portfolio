import Image from "next/image";
import Link from "next/link";
import Skills from "@/components/resume-v3/Skills";
import Experiences from "@/components/resume-v3/Experiences";
import Contact from "@/components/resume-v3/Contact";
import Links from "@/components/resume-v3/Links";
import Header from "@/components/resume-v3/Header";
import Tools from "@/components/resume-v3/Tools";
import Projects from "@/components/resume-v3/Projects";

export default function Resume() {
    return (
        <div className="resume resume--v3" id="resumeNew">
            <div className="resume__page resume__page--first">
                {/*sidebar*/}
                <div className="resume__sidebar">
                    <div className={`resume__sidebar-header`}>
                        <Image className="resume__sidebar-avatar" src="/images/avatar.jpg" alt="Avatar" width={200}
                               height={200}/>
                    </div>
                    
                    <Contact/>
                    
                    <Links/>
                    
                    <Skills/>
                    
                    <Tools/>
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
                <div className="resume__sidebar !w-0 !border-r-0"/>
                <div className="resume__header !h-[2px]"></div>
                
                {/*inner*/}
                <div className="resume__inner !pl-[18px]">
                    <Experiences page={1}/>
                    
                    {/*<div className="resume__section">*/}
                    {/*    <h1 className="resume__section-title">*/}
                    {/*        Education*/}
                    {/*    </h1>*/}
                    {/*    <div className="experiences">*/}
                    {/*        <div className="experience">*/}
                    {/*            <h4 className="experience__duration mb-1">2017 - 2022</h4>*/}
                    {/*            <h2 className="experience__title">Bachelor of Science</h2>*/}
                    {/*            <Link href="https://wub.edu.bd/" target="_blank" className="experience__company">*/}
                    {/*                World University of Bangladesh*/}
                    {/*            </Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    
                    <Projects/>
                </div>
            </div>
        </div>
    );
}
