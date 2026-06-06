// "use client"
import type { Metadata } from "next";
import "@/assets/styles/tailwind.css";
import Accessify from "@/components/Accessify";

export const metadata: Metadata = {
    title: "Abdullah AL Fahad",
    description: "A highly skilled and results-driven software engineer with a proven track record of innovation and excellence in the field",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
            {children}
            <Accessify/>
        </body>
        </html>
    );
}
