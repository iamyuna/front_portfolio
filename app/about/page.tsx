interface Career{
    company: string;
    period: string;
    duration: string;
    position: string;
    work: string;
}
interface Skills{
    icon: string;
    name: string;
}

interface AboutData{
    career: Career[];
    skills: Skills[];
}

export default async function About(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/about`, {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch data");
    }

    const aboutData: AboutData = await res.json();

    return (
        <section className="min-h-[100vh] p-[300px_0] max-md:p-[180px_0_200px]">
            <div>
                <div className="flex justify-between items-end">
                    <span className="text-[3.3rem]">
                        My Career 
                        <p className="inline-block text-[1.5rem] text-[#b3b2b2] ml-[15px]">*총 3년 5개월</p>
                    </span>
                    <span className="text-[1.5rem] mb-[6px] pr-[1.5rem] bg-[url('/images/arrow1.png')] bg-no-repeat bg-right bg-[length:0.6rem] max-md:hidden">Scroll Down</span>
                </div>
                <div className="mt-[150px] max-md:mt-[100px]">
                    <ul className="space-y-[100px] max-md:space-y-[50px]">
                        {aboutData.career?.map((career, id) => {
                            return(
                                <li  key={id}>
                                    <strong className="block text-[1.3rem] italic font-medium mb-[30px]">* {career.company} <em>({career.period})</em></strong>
                                    <p className="text-[1.2rem] text-[#7a7979] font-light">경력: {career.duration}</p>
                                    <p className="text-[1.2rem] text-[#7a7979] font-light mt-[10px]">직책: {career.position}</p>
                                    <p className="text-[1.2rem] text-[#7a7979] font-light mt-[10px]">업무: {career.work}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="mt-[200px] max-md:mt-[150px]">
                <div>
                    <span className="text-[3.3rem]">My Skills</span>
                </div>
                <ul className="flex flex-wrap gap-[40px_20px] mt-[150px] max-md:mt-[100px]">
                    {aboutData.skills?.map((skill, id) => {
                        return(
                            <li className="w-[calc(25%-15px)] max-w-[220px] text-center max-md:w-[calc(33.333%-15px)]" key={id}>
                                <div>
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className="text-[1.4rem] mt-[20px]">{skill.name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}