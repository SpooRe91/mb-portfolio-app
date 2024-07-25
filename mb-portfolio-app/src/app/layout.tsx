import type { Metadata } from "next";
import "./styles/globals.css";
import NavBar from "@PortfolioApp/Components/NavBar";
import Footer from "@PortfolioApp/Components/FooterComponent";

export const metadata: Metadata = {
    title: "Portfolio app",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="fixed top-0 backdrop-blur-[5px] left-0 w-full bg-cover bg-no-repeat min-h-[100%] bg-fixed bg-center bg-main-bg-image"></div>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
