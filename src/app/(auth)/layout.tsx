import type { Metadata } from "next";
import "@/app/globals.scss";
import {ViewTransitions} from "next-view-transitions";

export const metadata: Metadata = {
    title: "Hyperion",
    description: "Generated with Next.js",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
            <body
                className={`antialiased`}
            >
            {children}
            </body>
            </html>
        </ViewTransitions>
    );
}
