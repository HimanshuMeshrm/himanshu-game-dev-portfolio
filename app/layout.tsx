import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu — Game Programmer",
  description: "Himanshu's game development portfolio — Unity, C#, gameplay programming, systems and interactive experiences.",
  openGraph: {
    title: "Himanshu — Game Programmer",
    description: "Games, systems and experiments by Himanshu.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
