"use client";

import { useEffect, useState } from "react";
import IntroPage from "./IntroPage";

export default function IntroGate({ children }: { children: React.ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    },[]);


    return (
        <div className={`${ready ? "intro" : ""}`}>
            {children}
            <IntroPage />
        </div>
    );
}
