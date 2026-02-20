'use client'
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const hideFooter = pathname === "/contact";

    if(hideFooter) return null;

    return (
        <footer className="bg-[#eeeeee]">
            <div className="w-[91%] max-w-[1560px] m-[0_auto] flex justify-between p-[110px_0_490px] bg-[url('/images/footer_bg.png')] bg-no-repeat bg-bottom bg-contain max-md:block max-md:pb-[200px]">
                <div>
                    <h3 className="text-[3.2rem]">View My Resume</h3>
                    <a className="inline-block text-[1.2rem] p-[15px_30px] rounded-[50vh] bg-[#dddddd] mt-[25px]" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">OPEN PDF</a>
                </div>
                <div className="p-[22px_60px_0_0] max-md:mt-[50px] max-md:p-0">
                    <strong className="text-[1.2rem] italic font-medium">CONTACT ME</strong>
                    <ul>
                        <li className="text-[1.3rem] mt-[20px] transition duration-300 lg:text-[#cbcbcb] lg:hover:text-black"><a href="mailto:dbsdk95331@naver.com">dbsdk95331@naver.com</a></li>
                        <li className="text-[1.3rem] mt-[10px] transition duration-300 lg:text-[#cbcbcb] lg:hover:text-black"><a href="tel:+821087456413">+82 1087456413</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
