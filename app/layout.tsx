import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Innovate AI",
  description: "A repository of innovate ideas with AI Assistance System",
};

type ChildrenProp = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-50 min-h-screen p-4 flex flex-col`}
      >
        <Header />
        <div className="grid flex-1">{children}</div>
      </body>
    </html>
  );
}
