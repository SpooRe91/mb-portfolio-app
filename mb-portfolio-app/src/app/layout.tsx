import type { Metadata } from "next";
import "./styles/globals.css";
import NavBar from "@PortfolioApp/Components/NavBar";
import Footer from "@PortfolioApp/Components/FooterComponent";

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
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
