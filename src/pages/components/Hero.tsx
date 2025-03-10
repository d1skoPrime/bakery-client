'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const staggerChildren: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

export default function Hero() {
	const sharedAnimation = {
		initial: 'hidden',
		animate: 'visible',
		variants: staggerChildren,
	}

	const [imageSrc, setImageSrc] = useState<string | null>(null)
	const imageUrl = '/cake.png' // Исходный путь к изображению
	const localStorageKey = 'cachedCakeImage' // Уникальный ключ

	useEffect(() => {
		const cachedImage = localStorage.getItem(localStorageKey)

		if (cachedImage) {
			// Если изображение уже в localStorage, используем его
			setImageSrc(cachedImage)
		} else {
			// Иначе загружаем и кешируем
			fetch(imageUrl)
				.then((response) => response.blob()) // Получаем изображение как Blob
				.then((blob) => {
					const reader = new FileReader()
					reader.onloadend = () => {
						const base64data = reader.result as string
						localStorage.setItem(localStorageKey, base64data) // Сохраняем в localStorage
						setImageSrc(base64data)
					}
					reader.readAsDataURL(blob)
				})
				.catch((error) => console.error('Ошибка загрузки изображения:', error))
		}
	}, [imageUrl])

	return (
		<div
			className="relative min-h-screen w-full bg-[url(/bg2.png)] bg-cover bg-center py-20 px-4 md:py-24 lg:px-8"
			id="home"
		>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<motion.div
						{...sharedAnimation}
						className="w-full lg:w-1/2 max-w-xl mb-12 lg:mb-0"
					>
						<motion.h1
							variants={fadeInUp}
							initial={{ y: -100 }}
							animate={{ y: 0 }}
							transition={{ type: 'spring', stiffness: 100, damping: 20 }}
							className="text-white text-4xl md:text-5xl lg:text-6xl font-bold pb-5 xl:text-6xl xl:w-300"
						>
							Baked to Perfection
						</motion.h1>
						<motion.p
							variants={fadeInUp}
							initial={{ x: -100 }}
							animate={{ x: 0 }}
							transition={{ type: 'spring', stiffness: 100, damping: 30 }}
							className="text-purple-700 font-bold text-lg md:text-xl mb-8"
						>
							Crafting delicious moments with love and passion. My bakery
							brings the finest traditional recipes with a modern twist to
							your special occasions.
						</motion.p>
						<motion.a
							variants={fadeInUp}
							href="#placeorder"
							initial={{ x: -300 }}
							animate={{ x: 0 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								damping: 30,
							}}
							className="inline-block transition-transform text-white text-lg duration-500 bg-[#f87084] px-6 py-3 rounded-full cursor-pointer hover:shadow-xl shadow-black/30 hover:translate-y-1"
						>
							Order My Cake
						</motion.a>
					</motion.div>

					<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
						<img
							src={imageSrc || imageUrl}
							loading="lazy"
							alt="Delicious cake"
							className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-3xl transform rotate-3 shadow-xl"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
