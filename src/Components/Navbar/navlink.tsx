import {FC} from "react";

import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props {
    href: string;
    pageName: string;
    children: React.ReactNode;
}

const NavLink: FC<Props> = ({href, pageName, children}) => {
    const path: string = usePathname();

    const isActive: string = path === href ? "active" : "";

    return (
        <Link className={isActive} href={href} page-name={pageName}>
            {children}
        </Link>
    )
}
export default NavLink
