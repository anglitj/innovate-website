import "@/app/_styles/global.css";

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
      <body>{children}</body>
    </html>
  );
}
