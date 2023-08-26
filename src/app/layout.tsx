import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
	weight:["400","500","700"],
	subsets:["latin"],
	display:"swap",
})

export const metadata: Metadata = {
	title: 'kumitoru',
	description: 'kumitoruのホームページです',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja" className={notojp.className}>
			<body className="flex h-auto min-h-screen w-full">
				<div className="box-border items-start rounded-none flex-col flex-nowrap h-full min-h-screen justify-start w-full max-w-full  flex-none bg-white">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
