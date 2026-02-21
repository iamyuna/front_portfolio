"use client";

export default function IntroPage(){

    return(
        <div className="intro-inner fixed inset-0 w-full h-full bg-[#000]">
            <div className="w-[91%] max-w-[1560px] h-full flex items-center m-[0_auto]">
                <div className="relative flex text-[2.3rem] text-white text-center max-md:block max-md:text-left">
                    <p className="intro-text ani-01">
                        FRONT-END DEVELOPER
                    </p>
                    <p className="intro-text ani-02 ml-[300px] max-md:ml-0 max-md:mt-[15px]">
                        PARK YUNA
                    </p>
                </div>
            </div>
        </div>
    );
}