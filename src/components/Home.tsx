import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Products from './Products.tsx'
import Contact from './Contact.tsx'
import Footer from './Footer.tsx'

export default function Home() {
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

