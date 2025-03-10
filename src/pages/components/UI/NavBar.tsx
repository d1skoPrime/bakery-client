'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

type Props = {}

export default function NavBar({}: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className="z-50 fixed top-0 left-0 right-0 w-full bg-gray-100 border-b-2 border-amber-300 shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16 md:h-20">
					<div className="flex items-center">
						<h1 className="font-bold text-xl md:text-2xl">ZINA'S BAKERY</h1>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="p-2 rounded-md hover:bg-gray-200 transition-colors"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:block">
						<ul className="flex items-center space-x-1 lg:space-x-4 text-black cursor-pointer text-base lg:text-lg">
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-1 rounded-lg">
								<a href="#home">Home</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-1 rounded-lg">
								<a href="#products">Products</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-1 rounded-lg">
								<a href="#placeorder">Place Order</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-1 rounded-lg">
								<a href="#about">About</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-1 rounded-lg">
								<a href="#contacts">Contact</a>
							</li>
						</ul>
					</nav>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden bg-gray-100 py-4 px-2 border-t border-gray-200">
						<ul className="flex flex-col space-y-3">
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-2 rounded-lg">
								<a href="#home" onClick={toggleMenu}>
									Home
								</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-2 rounded-lg">
								<a href="#products" onClick={toggleMenu}>
									Products
								</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-2 rounded-lg">
								<a href="#placeorder" onClick={toggleMenu}>
									Place Order
								</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-2 rounded-lg">
								<a href="#about" onClick={toggleMenu}>
									About
								</a>
							</li>
							<li className="transition-colors duration-500 ease-in-out hover:bg-gray-300 px-2 py-2 rounded-lg">
								<a href="#contacts" onClick={toggleMenu}>
									Contact
								</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</header>
	)
}
