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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-50 text-primary-950 min-h-screen p-4`}
      >
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
