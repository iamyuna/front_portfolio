import MainCard from "@/components/MainCard";
import MainTitle from "@/components/MainTitle";

export default function Home() {


  return (
    <div className="p-[265px_0_300px] max-md:p-[180px_0_200px]">
      <div>
        <MainTitle/>
        <div className="pt-[250px] flex flex-wrap items-start gap-[200px_50px] max-lg:pt-[180px] max-md:pt-[100px] max-md:gap-[50px]">
            <MainCard
              href="/about"
              img="/images/main_about_thumb.jpg"
              label="ABOUT"
              className="w-[calc(50%-25px)] pb-[62.7%] max-md:w-full max-md:pb-[100%]"
            />
            <MainCard
              href="/projects"
              img="/images/main_projects_thumb.jpg"
              label="PROJECTS"
              className="w-[calc(50%-25px)] pb-[48.5%] max-md:w-full max-md:pb-[100%]"
            />
            <MainCard
              href="/contact"
              img="/images/main_contact_thumb.jpg"
              label="CONTACT"
              className="w-[80%] ml-[20%] pb-[45.2%] max-md:w-full max-md:pb-[100%] max-md:ml-0"
            />
        </div>
      </div>
    </div>
  );
}
