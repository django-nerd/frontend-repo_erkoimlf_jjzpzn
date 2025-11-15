import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
