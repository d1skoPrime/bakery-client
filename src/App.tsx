import './global/index.css'
import About from './pages/components/About'
import Footer from './pages/components/Contacts'
import Hero from './pages/components/Hero'
import PlaceOrder from './pages/components/PlaceOrder'
import Products from './pages/components/Products'
import NavBar from './pages/components/UI/NavBar'

function App() {
	return (
		<div className="">
			<NavBar />
			<Hero />
			<Products />
			<PlaceOrder />
			<About />
			<Footer />
		</div>
	)
}

export default App
