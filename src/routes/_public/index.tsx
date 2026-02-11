import { createFileRoute } from '@tanstack/react-router'
import {
  Nav,
  Hero,
  About,
  Portfolio,
  GlobalPresence,
  BrandPortfolio,
  News,
  Footer,
} from '@/components/landing'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <BrandPortfolio />
        <GlobalPresence />
        <News />
      </main>
      <Footer />
    </div>
  )
}
