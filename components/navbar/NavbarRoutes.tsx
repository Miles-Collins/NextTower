"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/events`,
      label: "Events",
      active: pathname === `/events`,
    },
    {
      href: `/organize`,
      label: "Create Events",
      active: pathname === `/organize`,
    },
  ];

  return (
    <nav className={"flex items-center space-x-4 lg:space-x-6 mx-6"}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm font-medium transition-color hover:text-primary ${
            route.active
              ? "text-black dark:text-white "
              : "text-muted-foreground"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
