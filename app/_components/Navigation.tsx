import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/accounts">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
