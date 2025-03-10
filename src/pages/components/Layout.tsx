import React, { useEffect, useState } from 'react'
import NavBar from './UI/NavBar'

type LayoutProps = {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
		}
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])
	return (
		<div className="bg-black flex min-h-screen">
			<NavBar />
			<main
				className={`flex-1 p-4 sm:p-6 flex items-center justify-center min-h-screen bg-primary ${
					isMobile ? 'mt-16' : 'md:ml-64'
				}`}
			>
				{children}
			</main>
		</div>
	)
}
