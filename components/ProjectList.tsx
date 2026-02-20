import type { Project } from "@/types/project";
import Image from "next/image";

interface Props {
    project: Project;
}

export default function ProjectList({project}: Props){

    return (
        <li className="w-[calc(33.333%-20px)] max-lg:w-[calc(50%-15px)] max-md:w-full">
            <div className="relative block w-full pb-[100%] top-0 left-0 group">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 overflow-hidden">
                    <Image  
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute w-full h-full bg-black opacity-0 transition duration-[600ms] lg:group-hover:opacity-50"></div>
                        <p className="text-[1.1rem] text-white overflow-hidden">
                            <span className="inline-block translate-y-full transition duration-[600ms] lg:group-hover:translate-y-0">VIEW SITE</span>
                        </p>
                    </div>
                </a>
            </div>
            <div className="mt-[34px]">
                <strong className="text-[1.4rem] font-medium">{project.title}</strong>
                <p className="text-[1.1rem] mt-[7px]">{project.description}</p>
                <ul className="flex flex-wrap gap-[7px] mt-[20px]">
                    {project.skills?.map((skill) => (
                        <li key={skill} className="text-[1rem] text-[#0052ce] bg-[#E7E7EC] p-[3px_8px] rounded-[5px]">#{skill}</li>
                    ))}
                </ul>
                    <div className="flex mt-[30px]">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-[1rem] text-white bg-[#0052ce] p-[10px_15px] rounded-[6px]">
                            VIEW SITE
                            <svg className="ml-[5px]" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 3.70715V4.70715H0V3.70715H15Z" fill="#fff"/>
                                <path d="M15.7074 4.00026L15.0003 4.70737L11 0.707107L11.7072 0L15.7074 4.00026Z" fill="#fff"/>
                                <path d="M15.9115 4.20993L15.2044 3.50282L11 7.7072L11.7072 8.41431L15.9115 4.20993Z" fill="#fff"/>
                            </svg>
                        </a>
                        {project.code && 
                            <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center text-[1rem] text-[#0052ce] bg-[#E7E7EC] p-[10px_15px] rounded-[6px] ml-[8px]">
                                VIEW GITHUB
                                <svg className="ml-[5px]" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 3.70715V4.70715H0V3.70715H15Z" fill="#0052ce"/>
                                    <path d="M15.7074 4.00026L15.0003 4.70737L11 0.707107L11.7072 0L15.7074 4.00026Z" fill="#0052ce"/>
                                    <path d="M15.9115 4.20993L15.2044 3.50282L11 7.7072L11.7072 8.41431L15.9115 4.20993Z" fill="#0052ce"/>
                                </svg>
                            </a>
                        }
                    </div>
            </div>
        </li>
    );
}