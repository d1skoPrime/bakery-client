import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import type React from 'react'
import { memo } from 'react'

// Memoize social icon to prevent unnecessary re-renders
const SocialIcon = memo(
	({ Icon, href, label }: { Icon: React.ElementType; href: string; label: string }) => (
		<a
			href={href}
			className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center hover:bg-amber-300 transition-colors"
			aria-label={label}
		>
			<Icon size={20} className="text-amber-800" />
		</a>
	)
)

SocialIcon.displayName = 'SocialIcon'

// Memoize contact item to prevent unnecessary re-renders
const ContactItem = memo(
	({ Icon, children }: { Icon: React.ElementType; children: React.ReactNode }) => (
		<li className="flex items-start gap-2 text-amber-700">
			<Icon size={18} className="text-amber-600 mt-1 flex-shrink-0" />
			<span>{children}</span>
		</li>
	)
)

ContactItem.displayName = 'ContactItem'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-amber-100 pt-12 pb-6" id="contacts">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Column */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-amber-800">
							ZINA'S BAKERY
						</h3>
						<p className="text-amber-700">
							Crafting delicious moments with love and passion. Our bakery
							brings the finest traditional recipes with a modern twist to
							your special occasions.
						</p>
					</div>

					{/* Contact Information */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-amber-800">
							Contact Information
						</h3>
						<ul className="space-y-3">
							<ContactItem Icon={Phone}>(123) 456-7890</ContactItem>
							<ContactItem Icon={Mail}>
								<a
									href="mailto:info@zinasbakery.com"
									className="hover:text-amber-500 transition-colors"
								>
									info@zinasbakery.com
								</a>
							</ContactItem>
							<ContactItem Icon={MapPin}>
								123 Bakery Street, Sweet City, SC 12345
							</ContactItem>
							<li className="text-amber-700">
								<span className="font-medium">Hours:</span> Mon-Fri:
								7am-7pm, Sat-Sun: 8am-5pm
							</li>
						</ul>
					</div>

					{/* Social Media Links */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-amber-800">
							Connect With Us
						</h3>
						<p className="text-amber-700">
							Follow us on social media for the latest updates, special
							offers, and behind-the-scenes content.
						</p>
						<div className="flex gap-4">
							<SocialIcon Icon={Instagram} href="#" label="Instagram" />
							<SocialIcon Icon={Facebook} href="#" label="Facebook" />
							<SocialIcon Icon={Twitter} href="#" label="Twitter" />
							<SocialIcon Icon={Youtube} href="#" label="YouTube" />
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-amber-200 my-6"></div>

				{/* Copyright */}
				<div className="text-center text-amber-700 text-sm">
					<p>© {currentYear} Zina's Bakery. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
