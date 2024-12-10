// "use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

export default function Navigation() {
  // const [currentNav, setCurrentNav] = useState("home");
  // const pathname = usePathname();
  // console.log(pathname);

  // if (pathname.includes("innovation")) setCurrentNav("innovation");
  // else if (pathname.includes("about")) setCurrentNav("about");
  // else if (pathname.includes("accounts")) setCurrentNav("accounts");
  // else setCurrentNav("home");

  return (
    <nav className="z-10">
      <ul className="flex gap-10">
        <li className="transition ease-in-out hover:scale-110">
          <Link href="/">Home</Link>
        </li>
        <li className="transition ease-in-out hover:scale-110">
          <Link href="/innovation/dashboard">Innovations</Link>
        </li>
        <li className="transition ease-in-out hover:scale-110">
          <Link href="/about">About</Link>
        </li>
        <li className="transition ease-in-out hover:scale-110">
          <Link href="/accounts">Accounts</Link>
        </li>
      </ul>
    </nav>
  );
}
