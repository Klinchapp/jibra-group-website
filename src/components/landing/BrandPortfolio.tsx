import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const brands = [
  {
    name: 'XMAN Blue',
    tagline: 'Exclusive Blend with LSS Technology',
    description:
      'Premium cigarettes featuring our exclusive blend with advanced LSS (Low Smoke Smell) technology for a refined smoking experience.',
    image: '/brands/xman-blue.jpg',
    features: ['LSS Technology', 'Exclusive Blend', 'Premium Quality'],
  },
  {
    name: 'XMAN Black',
    tagline: 'Exclusive Blend with Low Smoke Smell',
    description:
      'Sophisticated black edition with our signature exclusive blend, engineered for minimal smoke odour and maximum satisfaction.',
    image: '/brands/xman-black.jpg',
    features: ['Low Smoke Smell', 'Exclusive Blend', 'Bold Flavour'],
  },
  {
    name: 'XMAN Double Apple Mint',
    tagline: 'Exclusive Blend Flavoured Tobacco',
    description:
      'Innovative flavoured tobacco combining the sweetness of double apple with refreshing mint for a unique taste experience.',
    image: '/brands/xman-apple-mint.jpg',
    features: ['Double Apple', 'Mint Flavour', 'Exclusive Blend'],
  },
  {
    name: 'XMAN Gold',
    tagline: 'Exclusive Blend with LSS Technology',
    description:
      'Luxurious gold edition featuring our premium exclusive blend with LSS technology, delivering a smooth and sophisticated smoking experience.',
    image: '/brands/xman-gold.jpg',
    features: ['LSS Technology', 'Premium Blend', 'Luxury Edition'],
  },
  {
    name: 'XMAN Click Orange',
    tagline: 'Click to Orange Flavour',
    description:
      'Interactive smoking experience with click-activated orange flavour. Transform your smoke with a simple click for a burst of citrus freshness.',
    image: '/brands/xman-orange.jpg',
    features: ['Click Technology', 'Orange Flavour', 'Exclusive Blend'],
  },
  {
    name: 'XMAN Cherry',
    tagline: 'Exclusive Blend Flavoured Tobacco',
    description:
      'Rich cherry-flavoured tobacco with our exclusive blend, offering a sweet and aromatic smoking experience for flavour enthusiasts.',
    image: '/brands/xman-cherry.jpg',
    features: ['Cherry Flavour', 'Exclusive Blend', 'Aromatic'],
  },
  {
    name: 'XMAN Orange Mint',
    tagline: 'Exclusive Blend Flavoured Tobacco',
    description:
      'Vibrant fusion of zesty orange and cool mint flavours, creating a refreshing and invigorating smoking experience with our exclusive blend.',
    image: '/brands/xman-orange-mint.jpg',
    features: ['Orange Mint', 'Dual Flavour', 'Exclusive Blend'],
  },
  {
    name: 'XMAN Menthol',
    tagline: 'Exclusive Blend with Menthol',
    description:
      'Classic menthol cigarettes with our exclusive blend, delivering an icy cool sensation and smooth draw for menthol lovers.',
    image: '/brands/xman-menthol.jpg',
    features: ['Menthol Fresh', 'Exclusive Blend', 'Cool Sensation'],
  },
  {
    name: 'XMAN Gum Mint',
    tagline: 'Exclusive Blend Flavoured Tobacco',
    description:
      'Unique gum mint flavour profile combining sweet bubblegum notes with refreshing mint, offering a playful twist on traditional tobacco.',
    image: '/brands/xman-gum-mint.jpg',
    features: ['Gum Mint', 'Sweet & Fresh', 'Exclusive Blend'],
  },
  {
    name: 'ROBIN',
    tagline: 'Less Smoke Smell',
    description:
      'Classic premium cigarettes featuring advanced LSS (Less Smoke Smell) technology for a refined and discreet smoking experience.',
    image: '/brands/robin.jpg',
    features: ['LSS Technology', 'Classic Blend', 'Premium Quality'],
  },
  {
    name: 'XMAN Black Carbon',
    tagline: 'Exclusive Blend with LSS Technology',
    description:
      'Ultra-premium carbon edition with sophisticated black design, featuring our exclusive blend and advanced LSS technology for the ultimate smoking experience.',
    image: '/brands/xman-black-carbon.jpg',
    features: ['Carbon Design', 'LSS Technology', 'Ultra Premium'],
  },
  {
    name: 'XMAN Silver',
    tagline: 'Exclusive Blend',
    description:
      'Elegant silver edition with our signature exclusive blend, offering a smooth and refined smoking experience with premium quality tobacco.',
    image: '/brands/xman-silver.jpg',
    features: ['Silver Edition', 'Exclusive Blend', 'Smooth Taste'],
  },
]

export function BrandPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#F8F9FA]" aria-labelledby="brands-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#D4622A] text-sm font-bold tracking-wider uppercase mb-4"
          >
            Our Brands
          </motion.span>

          <motion.h2
            id="brands-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A2E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium XMAN & Robin Cigarettes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1A1A2E]/70 text-lg max-w-2xl mx-auto"
          >
            Discover our complete collection of XMAN and Robin cigarettes — crafted with exclusive blends,
            proprietary LSS technology, and innovative click-flavour systems for discerning smokers worldwide.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="XMAN and Robin brand showcase"
        >
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden bg-black rounded-lg shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="min-w-full grid lg:grid-cols-2 gap-0"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${brands.length}: ${brand.name}`}
                >
                  {/* Image Side */}
                  <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                    <img
                      src={brand.image}
                      alt={`${brand.name} cigarette pack — ${brand.tagline}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                  </div>

                  {/* Content Side */}
                  <div className="bg-black text-white p-8 lg:p-16 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        currentIndex === index
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {brand.name}
                      </h3>
                      <p className="text-[#D4622A] text-xl font-semibold mb-6 uppercase tracking-wide">
                        {brand.tagline}
                      </p>
                      <p className="text-white/80 text-lg leading-relaxed mb-8">
                        {brand.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {brand.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-4 py-2 bg-white/10 border border-white/20 text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-[#D4622A] hover:bg-[#E8A547] text-white px-8 py-4 font-semibold transition-all duration-300"
                      >
                        Enquire Now
                      </a>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Previous brand"
            >
              <ChevronLeft className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Next brand"
            >
              <ChevronRight className="w-6 h-6 text-white" aria-hidden="true" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Brand slides">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={currentIndex === index}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-12 bg-[#D4622A]'
                    : 'w-2 bg-[#1A1A2E]/30 hover:bg-[#1A1A2E]/50'
                }`}
                aria-label={`View ${brand.name}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-[#1A1A2E]/70 text-lg mb-6">
            Interested in our products or looking to become an authorised distributor?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1A1A2E] hover:bg-[#D4622A] text-white px-8 py-4 font-semibold transition-all duration-300"
          >
            Contact Our Sales Team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
