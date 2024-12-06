import Image from "next/image";
import bg from "@/public/bg7.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center mt-32">
      <Image
        className="object-fill object-top"
        src={bg}
        fill
        alt="Home background"
        placeholder="blur"
        quality={100}
      />

      <div className="z-10 text-center backdrop-blur-sm ">
        <h2 className="text-7xl">Welcome Innovators</h2>
        <Link href="/innovation" className="text-4xl underline">
          Let&apos;s get started
        </Link>
      </div>
    </main>
  );
}
