import {FC} from "react";

interface Props {
    imgSrc?: string;
    coverColor?: string;
    className?: string;
    onClick?: () => void;
}

const Book: FC<Props> = ({imgSrc, coverColor = "#31353E", className, onClick}) => {
    return (
        <figure onClick={onClick}>
            <svg className={className} viewBox="0 0 421 514" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_323_94)">
                    <path
                        d="M0 27.1907C0 24.4292 2.23858 22.1907 5 22.1907H369.344C372.105 22.1907 374.344 24.4293 374.344 27.1907V440.739C374.344 443.501 372.105 445.739 369.344 445.739H4.99999C2.23857 445.739 0 443.501 0 440.739V27.1907Z"
                        fill="white"/>
                    <path
                        d="M5 24.1907H369.344C371.001 24.1907 372.344 25.5338 372.344 27.1907V440.739C372.344 442.396 371.001 443.739 369.344 443.739H4.99999C3.34314 443.739 2 442.396 2 440.739V27.1907C2 25.5338 3.34314 24.1907 5 24.1907Z"
                        stroke="black" strokeWidth="4"/>
                </g>
                <path d="M348.295 3.85938V462.141L370.485 440.893V26.2308L348.295 3.85938Z" fill="white"/>
                <rect width="349.259" height="466" rx="5" fill={coverColor}/>
                <image clipPath="inset(0% round 5px)" href={imgSrc} height="466" width="349.259"
                       preserveAspectRatio="xMidYMid slice"/>
                <defs>
                    <filter id="filter0_d_323_94" x="0" y="22.1907" width="420.844" height="491.049"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dx="24" dy="45"/>
                        <feGaussianBlur stdDeviation="11.25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_323_94"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_323_94" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </figure>
    )
}
export default Book
