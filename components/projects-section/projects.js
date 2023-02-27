import { useEffect, useState } from "react"
import Link from "next/link"

import ProjectItem from "../project-item/project"
import ProjectList from "../../data/project-list"



export default function Projects() {
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        setProjectData(ProjectList);
    }, []);
    return (
        <section className="flex-col">
            <div className="flex gap-10 lg:gap-16 flex-col md:flex-row">
                <div className="w-full">
                    <h2 className="text-6xl md:text-7xl">My Work</h2>
                </div>
                <div className="w-full">
                    <p className="text-xl md:text-2xl opacity-70 leading-relaxed">A proactive approach to learning and development has resulted in a diverse portfolio of projects, ranging from personal endeavors to freelance work. Each project serves as a reflection of a passion for design and a dedication to pushing boundaries.</p>
                </div>
            </div>
            <div className="row w-full">
                <div className="grid gap-8 w-100 overflow-hidden grid-cols-2 ">
                    {projectData.map((project, index) => (
                        <Link className={"col-span-2 lg:col-span-1"} href={`${project.link}`} key={project.id}>
                            <ProjectItem name={project.title} job={project.job} cardImage={project.cardImage} bgColor={project.color} wip={project.wip} github={project.github} website={project.website} classes={`${project.type === 2 ? "max-w-none	md:right-[-25%] bottom-[-40%] md:bottom-[-60%] lg:bottom-[-70%] w-[500px] md:w-[720px] lg:w-[720px] xl:w-[720px]" : "w-5/6 md:w-4/5 inset-x-1/2 left-[10%] bottom-[-5%] md:bottom-[-15%]"}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}