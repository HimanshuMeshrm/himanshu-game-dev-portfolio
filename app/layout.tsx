import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu — Game Programmer",
  description: "Himanshu's game development portfolio — Unity, C#, gameplay programming and interactive systems."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
