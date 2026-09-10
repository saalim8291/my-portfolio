import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.scss";

const lexendDeca = Lexend_Deca({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saalim Bhatkar — Full-Stack Developer",
  description: "Saalim Bhatkar builds performant web applications and developer tools, focused on clear architecture, delightful interfaces, and measurable impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lexendDeca.variable}>
      <body>{children}</body>
    </html>
  );
}
