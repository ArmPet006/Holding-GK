"use client";

import Arrow from "@/Helpers/Svg/arrow.tsx";
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="back_button">
            <Arrow size={"1.875rem"}/>
        </button>
    )
}
export default BackButton
