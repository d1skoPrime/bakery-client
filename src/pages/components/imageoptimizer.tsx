import { useState } from 'react'

interface ImageOptimizerProps {
	src: string
	alt: string
	width: number
	height: number
	className?: string
	priority?: boolean
}

export default function ImageOptimizer({
	src,
	alt,
	width,
	height,
	className = '',
	priority = false,
}: ImageOptimizerProps) {
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(false)

	// Use the original image source - client-side WebP conversion is unreliable
	// In a production app, you would use a server-side solution for image optimization

	return (
		<>
			{!isLoaded && !error && (
				<div
					className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}
					style={{
						width: `${width}px`,
						height: `${height}px`,
						maxWidth: '100%',
					}}
				>
					<span className="text-gray-400 text-sm">Loading...</span>
				</div>
			)}

			<img
				src={src || '/placeholder.svg'}
				alt={alt}
				width={width}
				height={height}
				loading={priority ? 'eager' : 'lazy'}
				className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
				onLoad={() => setIsLoaded(true)}
				onError={() => {
					setError(true)
					setIsLoaded(true)
				}}
			/>

			{error && (
				<div
					className={`${className} bg-gray-100 flex items-center justify-center`}
					style={{
						width: `${width}px`,
						height: `${height}px`,
						maxWidth: '100%',
					}}
				>
					<span className="text-gray-500 text-sm">Failed to load image</span>
				</div>
			)}
		</>
	)
}
