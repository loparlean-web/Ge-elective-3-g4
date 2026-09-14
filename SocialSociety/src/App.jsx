import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Members from './components/Members'
import History from './sections/History'
import Today from './sections/Today'
import Laws from './sections/Laws'
import Issues from './sections/Issues.jsx'
import Sources from './sections/Sources'
import Footer from './components/Footer'
import ScrollTopButton from './components/ScrollTopButton'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Members />
      <History />
      <Today />
      <Laws />
      <Issues />
      <Sources />
      <Footer />
      <ScrollTopButton />
    </>
  )
}