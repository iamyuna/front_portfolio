interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  skills?: string[];
}

interface Props {
    project: Project;
}

export default function ProjectList({project}: Props){

    return (
        <li className="w-[calc(33.333%-20px)] group max-lg:w-[calc(50%-15px)] max-md:w-full">
            <a href={project.link} target="_blank">
                <div className="relative w-full pb-[100%] top-0 left-0">
                    <div className="absolute bg-black overflow-hidden">
                        <img className="w-full h-full object-cover transition duration-[600ms] lg:group-hover:opacity-30" src={project.image} alt={project.title} />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                            <p className="text-[1.1rem] text-white translate-y-full transition duration-[600ms] lg:group-hover:translate-y-0">VIEW SITE</p>
                        </span>
                    </div>
                </div>
                <div className="mt-[34px]">
                    <strong className="text-[1.4rem] font-medium">{project.title}</strong>
                    <p className="text-[1.1rem] mt-[7px]">{project.description}</p>
                    <ul className="flex flex-wrap gap-[7px] mt-[20px]">
                        {project.skills?.map((skill) => (
                            <li key={skill} className="text-[1rem] text-[#0052ce] bg-[#E7E7EC] p-[3px_8px] rounded-[5px]">#{skill}</li>
                        ))}
                    </ul>
                </div>
            </a>
        </li>
    );
}