import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="z-10 flex gap-4 items-center">
      <Image src={logo} width={50} height={50} alt="Innovate AI Logo" />
      <h2 className="text-xl font-semibold transition ease-in-out hover:scale-110">
        Innovate AI
      </h2>
    </Link>
  );
}
