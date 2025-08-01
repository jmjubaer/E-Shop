"use client"; // if using Next.js 13+ App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import clsx from "clsx";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    exact?: boolean;
    activeClassName?: string;
    className?: string;
}

export default function NavLink({
    href,
    children,
    exact = false,
    activeClassName = "",
    className = "",
}: NavLinkProps) {
    const pathname = usePathname();

    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={clsx(className, isActive && activeClassName)}>
            {children}
        </Link>
    );
}
