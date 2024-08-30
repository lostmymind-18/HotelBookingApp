import type { Metadata } from "next";
import { Inter } from "next/font/google";
import headerStyle from "@/app/styles/header.module.css"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hotel booking",
    description: "An app for hotel booking",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={headerStyle.background}>
                    <header className={headerStyle.logo}>Hotel booking</header>
                </div>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
