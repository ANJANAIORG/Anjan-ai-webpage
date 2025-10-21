import './App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Products from './components/Products.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
