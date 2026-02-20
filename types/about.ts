export interface Career{
    company: string;
    period: string;
    duration: string;
    position: string;
    work: string;
}
export interface Skills{
    icon: string;
    name: string;
}

export interface AboutData{
    career: Career[];
    skills: Skills[];
}