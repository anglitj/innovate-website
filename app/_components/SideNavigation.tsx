import { ChartPieIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import LogoutButton from "@/app/_components/LogoutButton";

const NavList = [
  {
    name: "Dashboard",
    href: "/innovation/dashboard",
    className:
      "flex h-9 items-center cursor-pointer hover:bg-primary-800 transition",
    icon: <ChartPieIcon className="h-5 w-5 mx-4" />,
  },
  {
    name: "Ideas",
    href: "/innovation/ideas",
    className:
      "flex h-9 items-center cursor-pointer hover:bg-primary-800 transition",
    icon: <RocketLaunchIcon className="text-primary-100 h-5 w-5 mx-4" />,
  },
];
export default function SideNavigation() {
  return (
    <div className="grid grid-rows-[1fr_2rem] h-full py-2 bg-primary-900 border-r border-primary-800">
      <ul className="flex flex-col gap-2 bg-primary-900 ">
        {NavList.map((nav) => (
          <li key={nav.name} className={nav.className}>
            {nav.icon}
            <Link href={nav.href}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <LogoutButton />
    </div>
  );
}
