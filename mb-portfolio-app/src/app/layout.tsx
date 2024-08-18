import type { Metadata } from 'next';
import './styles/globals.css';
import { NavBar, Footer } from '@Common/Components';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import Loading from './loading';
import Image from 'next/image';
import { mainBodyBg } from '../../public/backgrounds';
import ClientWrapper from './clientWrapper';

export const metadata: Metadata = {
	title: 'M.B. Portfolio app',
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
				<Image
					src={mainBodyBg}
					alt="BG IMAGE"
					className="fixed z-[-1] min-h-bg-image-height w-full object-cover brightness-[1]"
					priority
				/>
				<Analytics />
				<NavBar />
				<ClientWrapper>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ClientWrapper>
				<Footer />
			</body>
		</html>
	);
}
