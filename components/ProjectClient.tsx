"use client";

import type { Project } from "@/types/project";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

export default function ProjectClient(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async() => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get<Project[]>("https://iamyuna.github.io/api-repo/projects.json");
            setProjects(res.data);
        } catch(err) {
            setError("data load failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return(
        <section className="min-h-[100vh] p-[300px_0] max-md:p-[180px_0_200px]">
             <div>
                <div className="flex justify-between items-end">
                    <span className="text-[3.3rem]">My Projects<em className="inline-block text-[1.2rem] align-text-top mt-[3px]">({projects.length})</em></span>
                    <span className="text-[1.5rem] mb-[6px] pr-[1.5rem] bg-[url('/images/arrow1.png')] bg-no-repeat bg-right bg-[length:0.6rem] max-md:hidden">Scroll Down</span>
                </div>
                <ul className="flex flex-wrap gap-[150px_30px] mt-[150px] max-md:gap-[100px] max-md:mt-[100px]">
                    {projects.map((project) => (
                        <ProjectList key={project.id} project={project}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}