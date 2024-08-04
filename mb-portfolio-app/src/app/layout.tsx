import type { Metadata } from "next";
import "./styles/globals.css";
import NavBar from "@PortfolioApp/Components/NavBar/NavBar";
import Footer from "@PortfolioApp/Components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: "M.B. Portfolio app",
    description: "Martin's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Analytics />
                <NavBar />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Footer />
            </body>
        </html>
    );
}
