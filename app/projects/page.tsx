import ProjectList from "@/components/ProjectList";

export default async function Projects(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/projects`, {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    const projects = await res.json();

    return (
        <section className="min-h-[100vh] p-[300px_0] max-md:p-[180px_0_200px]">
            <div>
                <div className="flex justify-between items-end">
                    <span className="text-[3.3rem]">My Projects<em className="inline-block text-[1.2rem] align-text-top mt-[3px]">({projects.length})</em></span>
                    <span className="text-[1.5rem] mb-[6px] pr-[1.5rem] bg-[url('/images/arrow1.png')] bg-no-repeat bg-right bg-[length:0.6rem] max-md:hidden">Scroll Down</span>
                </div>
                <ul className="flex flex-wrap gap-[150px_30px] mt-[150px] max-md:gap-[100px] max-md:mt-[100px]">
                    {projects.map((project: any) => (
                        <ProjectList key={project.id} project={project}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}