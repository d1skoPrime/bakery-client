'use client'

import { useState } from 'react'

type Props = {}

type ProductItem = {
	id: number
	name: string
	image: string
	price: string
}

const cakesItems: ProductItem[] = [
	{ id: 1, name: 'Russian Honey Cake', image: '/medovick.jpg', price: '$60' },
	{ id: 2, name: 'Berry Kiss Cake', image: '/berrykiss.jpg', price: '$60' },
	{ id: 3, name: 'Cheese Cake', image: '/chezcake.jpg', price: '$50' },
	{
		id: 4,
		name: 'Berry Flavored Zephyr',
		image: '/zefir.jpg',
		price: '$2 per/ 1 piece',
	},
	{ id: 5, name: 'Mini Pavlova', image: '/pavlova2.jpg', price: '$5 per/ 1 piece' },
	{ id: 6, name: 'Cup Cakes', image: '/cupcake.jpg', price: '$3 per/ 1 piece' },
	{ id: 7, name: 'Meringue Roulade', image: '/mirengra2.jpg', price: '$40' },
	{
		id: 8,
		name: 'Triple Chocolate Mousse Cake Standard',
		image: '/chocolatecake.jpg',
		price: '$65',
	},
	{ id: 10, name: 'Sour cream cake', image: '/creamcake.jpg', price: '$45' },
	{ id: 11, name: 'Tiramisu', image: '/teramisu.jpg', price: '$65' },
	{ id: 12, name: 'Scones ', image: '/sweetbulki.jpg', price: '$2 per/ 1 piece' },
	{
		id: 13,
		name: 'Nuts with condensed milk',
		image: '/orehi.jpg',
		price: '$20 per/ 1 container or 40 nuts',
	},
	{ id: 14, name: "Chocolate bird's milk", image: '/chocobird.jpg', price: '$30' },
	{ id: 15, name: "Vanilla bird's milk", image: '/vanilebird.jpg', price: '$30' },
	{ id: 16, name: "Nut bird's milk ", image: '/nutbird.jpg', price: '$30' },
	{ id: 17, name: 'Sancho Pancho Cake', image: '/sancho32.jpg', price: '$50' },
	{ id: 18, name: 'Eclairs ', image: '/eclairs.jpg', price: '$3 per/ 1 piece' },
]

const foodItems: ProductItem[] = [
	{ id: 1, name: 'Samsa', image: '/samsa.jpg', price: '$7 per 1 piece' },
	{
		id: 2,
		name: 'Russian Chicken Pie',
		image: '/kurniki2.jpg',
		price: '$5 per 1 piece',
	},
	{
		id: 3,
		name: 'Pancakes/Russian Blini with meat or cottage cheese',
		image: '/puncakes.jpg',
		price: '$2 per / 1 piece',
	},
]

export default function Products({}: Props) {
	const [activeCategory, setActiveCategory] = useState<'cakes' | 'food'>('cakes')

	return (
		<div className="py-20 px-4 bg-[#f3f1f2]" id="products">
			<div className="container mx-auto">
				<div className="mb-8 flex flex-col items-center">
					<h1 className="text-4xl md:text-5xl text-black font-bold mb-8 text-center">
						Our Products
					</h1>

					{/* Category Tabs */}
					<div className="flex space-x-4 mb-6">
						<button
							className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
								activeCategory === 'cakes'
									? 'bg-pink-500 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
							onClick={() => setActiveCategory('cakes')}
						>
							Cakes
						</button>
						<button
							className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
								activeCategory === 'food'
									? 'bg-pink-500 text-white'
									: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
							onClick={() => setActiveCategory('food')}
						>
							Food
						</button>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{(activeCategory === 'cakes' ? cakesItems : foodItems).map((item) => (
						<div
							className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
							key={item.id}
						>
							<div className="w-full aspect-square mb-4 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
								<img
									loading="lazy"
									src={item.image || '/placeholder.svg'}
									alt={item.name}
									className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<h2 className="text-orange-600 mb-3 text-lg text-center font-medium">
								{item.name}
							</h2>
							<p className="text-red-500 font-semibold">
								Price: {item.price}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
