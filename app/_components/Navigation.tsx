import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/accounts">Go to Accounts</Link>
      </li>
      <li>
        <Link href="/about">Go to About</Link>
      </li>
    </ul>
  );
}
