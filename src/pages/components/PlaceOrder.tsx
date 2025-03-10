'use client'

import { memo, useCallback, useState } from 'react'

// Memoize form input to prevent unnecessary re-renders
const FormInput = memo(
	({
		id,
		name,
		type = 'text',
		value,
		onChange,
		placeholder,
		isFocused,
		onFocus,
		onBlur,
	}: {
		id: string
		name: string
		type?: string
		value: string
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
		placeholder: string
		isFocused: boolean
		onFocus: () => void
		onBlur: () => void
	}) => {
		return (
			<div className="space-y-1">
				<label
					htmlFor={id}
					className={`block text-base md:text-lg transition-colors duration-300 ${
						isFocused ? 'text-pink-600' : 'text-green-700/50'
					}`}
				>
					{placeholder}:
				</label>
				<input
					id={id}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className={`w-full rounded-lg border-2 border-gray-300 p-2 text-base md:text-lg outline-none transition-all duration-500 ease-in-out focus:border-pink-600 focus:ring-2 focus:ring-pink-600 ${
						isFocused
							? 'scale-[1.02] border-pink-600 ring-2 ring-pink-600/30'
							: ''
					}`}
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			</div>
		)
	}
)

FormInput.displayName = 'FormInput'

// Memoize success modal to prevent unnecessary re-renders
const SuccessModal = memo(({ onClose }: { onClose: () => void }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center z-50">
			<div className="fixed inset-0 bg-gray-200/40 backdrop-blur-sm"></div>
			<div className="bg-white rounded-lg p-4 md:p-8 shadow-xl z-10 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
				<div className="text-center">
					<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
						<svg
							className="h-10 w-10 text-green-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
					</div>
					<h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
						Order Submitted Successfully!
					</h3>
					<p className="text-gray-600 mb-6">
						Thank you for your order. We have received your information and
						will contact you shortly.
					</p>
					<button
						type="button"
						onClick={onClose}
						className="w-full inline-flex cursor-pointer justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-base font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-300"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	)
})

SuccessModal.displayName = 'SuccessModal'

export default function PlaceOrder() {
	const [isSuccessfull, setIsSuccessfull] = useState(false)
	const [focusedInput, setFocusedInput] = useState<string | null>(null)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		productname: '',
		phonenumber: '',
		message: '',
	})

	const [loading, setLoading] = useState(false)

	// Memoize handlers to prevent recreating functions on each render
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target
			setFormData((prevState) => ({ ...prevState, [name]: value }))
		},
		[]
	)

	const handleSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault()
			setLoading(true)

			try {
				const response = await fetch('https://zinasbakery-api/send-email', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
				})

				// Проверяем, успешен ли ответ
				if (!response.ok) {
					throw new Error(`Server error: ${response.status}`)
				}

				// Даем серверу время обработать запрос (если нужно)
				await new Promise((resolve) => setTimeout(resolve, 1000))

				// Парсим JSON-ответ
				const data = await response.json()
				console.log(data.message)

				// Только после успешного ответа очищаем форму и ставим успешный статус
				setIsSuccessfull(true)
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					productname: '',
					phonenumber: '',
					message: '',
				})
			} catch (error) {
				console.error('Error submitting:', error)
				alert('Error submitting order')
			} finally {
				setLoading(false)
			}
		},
		[formData]
	)

	const handleFocus = useCallback((inputName: string) => {
		setFocusedInput(inputName)
	}, [])

	const handleBlur = useCallback(() => {
		setFocusedInput(null)
	}, [])

	const closeModal = useCallback(() => {
		setIsSuccessfull(false)
	}, [])

	return (
		<div
			className="py-20 px-4 bg-[#f3f1f2] border-b-2 bg-gradient-to-r from-pink-500 via-indigo-400 to-green-600 bg-clip-text"
			id="placeorder"
		>
			<div className="container mx-auto max-w-3xl">
				<div className="w-full rounded-2xl bg-[#cbb6c1] p-4 md:p-8 shadow-lg">
					<h1 className="mb-6 text-center text-2xl md:text-3xl font-bold text-pink-500">
						Place Your Order
					</h1>

					<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* First Name */}
							<FormInput
								id="first_name"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="First Name"
								isFocused={focusedInput === 'first_name'}
								onFocus={() => handleFocus('first_name')}
								onBlur={handleBlur}
							/>

							{/* Last Name */}
							<FormInput
								id="last_name"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Last Name"
								isFocused={focusedInput === 'last_name'}
								onFocus={() => handleFocus('last_name')}
								onBlur={handleBlur}
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{/* Phone Number */}
							<FormInput
								id="phone"
								name="phonenumber"
								type="tel"
								value={formData.phonenumber}
								onChange={handleChange}
								placeholder="Phone Number"
								isFocused={focusedInput === 'phone'}
								onFocus={() => handleFocus('phone')}
								onBlur={handleBlur}
							/>

							{/* Email */}
							<FormInput
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email Address"
								isFocused={focusedInput === 'email'}
								onFocus={() => handleFocus('email')}
								onBlur={handleBlur}
							/>
						</div>

						{/* Product Name */}
						<FormInput
							id="product"
							name="productname"
							value={formData.productname}
							onChange={handleChange}
							placeholder="Product Name"
							isFocused={focusedInput === 'product'}
							onFocus={() => handleFocus('product')}
							onBlur={handleBlur}
						/>

						{/* Additional Message */}
						<div className="space-y-1">
							<label
								htmlFor="message"
								className={`block text-base md:text-lg transition-colors duration-300 ${
									focusedInput === 'message'
										? 'text-pink-600'
										: 'text-green-700/50'
								}`}
							>
								Additional Message:
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={4}
								placeholder="Additional Message"
								className={`w-full rounded-lg border-2 border-gray-300 p-2 text-base md:text-lg outline-none transition-all duration-500 ease-in-out focus:border-pink-600 focus:ring-2 focus:ring-pink-600 ${
									focusedInput === 'message'
										? 'scale-[1.02] border-pink-600 ring-2 ring-pink-600/30'
										: ''
								}`}
								onFocus={() => handleFocus('message')}
								onBlur={handleBlur}
							/>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							disabled={loading}
							className={`mt-4 w-full transform rounded-lg bg-pink-500 py-3 text-base md:text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-600 hover:shadow-lg active:scale-95 ${
								loading ? 'opacity-70 cursor-not-allowed' : ''
							}`}
						>
							{loading ? 'Submitting...' : 'Submit Order'}
						</button>
					</form>

					{isSuccessfull && <SuccessModal onClose={closeModal} />}
				</div>
			</div>
		</div>
	)
}
