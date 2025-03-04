"use client";

import {useEffect, useState} from "react";

const useMobile = (): { loading: boolean, isMobile: boolean } => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);

        // @ts-ignore
        return () => window.removeEventListener("resize", checkWindowSize);
    }, []);

    const checkWindowSize = () => {
        if (window.innerWidth <= 640) {
            setIsMobile(true);
            setLoading(false);
            return;
        }
        setIsMobile(false);
        setLoading(false);
    }

    return {isMobile, loading};
}

export default useMobile
