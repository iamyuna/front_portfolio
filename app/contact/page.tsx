export default function Contact(){

    return (
        <section className="h-[100vh] pt-[300px] max-md:pt-[180px]">
            <div className="flex justify-between h-full bg-[url('/images/contact_bg.png')] bg-no-repeat bg-bottom bg-contain max-md:block">
                <div>
                    <h3 className="text-[3.2rem]">View My Resume</h3>
                    <a className="inline-block text-[1.2rem] p-[15px_30px] bg-[#dddddd] rounded-[50vh] mt-[25px]" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">OPEN PDF</a>
                </div>
                <div className="p-[22px_60px_0_0] max-md:p-0  max-md:mt-[50px]">
                    <strong className="text-[1.2rem] italic font-medium">CONTACT ME</strong>
                    <ul className="mt-[20px]">
                        <li className="text-[1.3rem] transition duration-300 lg:text-[#cbcbcb] lg:hover:text-black"><a href="mailto:dbsdk95331@naver.com">dbsdk95331@naver.com</a></li>
                        <li className="text-[1.3rem] mt-[10px] transition duration-300 lg:text-[#cbcbcb] lg:hover:text-black"><a href="tel:+821087456413">+82 1087456413</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}