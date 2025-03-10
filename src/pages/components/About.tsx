'use client'

type Props = {}

export default function About({}: Props) {
	return (
		<div className="py-20 px-4 bg-gray-100" id="about">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* About Us Section */}
					<div className="w-full lg:w-1/2 bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
						<h1 className="text-center text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 py-4 text-white">
							About Us
						</h1>
						<div className="p-6">
							<h2 className="text-center text-xl sm:text-2xl font-bold mb-4">
								TITLE
							</h2>
							<p className="text-base sm:text-lg font-mono">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Ea perferendis omnis tenetur, nulla perspiciatis
								consectetur. Est dolorum voluptatum, nesciunt aspernatur
								dolorem, illo incidunt ullam deleniti, amet esse quo quasi
								provident. Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Facere nobis vitae necessitatibus
								eveniet ullam impedit earum totam, iure deserunt nisi
								corrupti ipsum in fuga voluptate nostrum cum! Nulla, qui
								sed.
							</p>
						</div>
					</div>

					{/* Highlights Section */}
					<div className="w-full lg:w-1/2 bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
						<h1 className="text-center text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 py-4 text-white">
							Some Highlights
						</h1>
						<div className="p-6 flex justify-center items-center">
							<div className="w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-xl">
								<iframe
									src="/iframe2.mp4#t=0.1?autoplay=0&controls=1"
									className="w-full h-full object-cover"
									title="Bakery highlights video"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
