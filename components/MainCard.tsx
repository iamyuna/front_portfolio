import Link from "next/link"

type MainCardProps = {
    href: string,
    img: string,
    label: string,
    className?: string,
};

export default function MainCard({href, img, label, className = ""}: MainCardProps) {

    return (
        <div className={`relative overflow-hidden group bg-black ${className}`}>
            <Link href={href} className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full transition duration-[600ms] lg:group-hover:scale-110 lg:group-hover:opacity-30">
                    <img src={img} alt={`${label} 썸네일`} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                    <p className="text-[1.1rem] text-white translate-y-full transition duration-[600ms] lg:group-hover:translate-y-0">{label}</p>
                </div>
            </Link>  
        </div>
    );
}