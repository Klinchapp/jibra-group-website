import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Factory,
  Globe2,
  Users,
  Leaf,
  TrendingUp,
  Laptop,
  ArrowRight,
} from 'lucide-react'

const companies = [
  {
    name: 'Tobacco Manufacturing',
    sector: 'Production',
    icon: Factory,
    description:
      'State-of-the-art manufacturing facilities producing the XMAN and Robin cigarette brands with ISO-certified quality standards and proprietary LSS technology.',
    stats: {
      quality: 'ISO Certified',
      service: '12+ Product Lines',
    },
  },
  {
    name: 'Global Commodity Trading',
    sector: 'Commodities',
    icon: Globe2,
    description:
      'Comprehensive international trading operations for tobacco products, agro commodities, metals, spices, grains, and pulses — connecting suppliers with buyers across six continents.',
    stats: {
      quality: '40+ Countries',
      service: '24/7 Operations',
    },
  },
  {
    name: 'Tobacco Product Consultancy',
    sector: 'Advisory',
    icon: Users,
    description:
      'Expert end-to-end consultancy for clients developing their own tobacco products — from leaf selection and blend formulation to product testing, packaging design, and market launch strategy.',
    stats: {
      quality: 'Expert Team',
      service: 'End-to-End',
    },
  },
  {
    name: 'Agro Products Trading',
    sector: 'Agriculture',
    icon: Leaf,
    description:
      'Sourcing and trading premium-grade agricultural products including spices, grains, and pulses from trusted growers across East Africa, South Asia, and beyond.',
    stats: {
      quality: 'Premium Grade',
      service: 'Global Supply Chain',
    },
  },
  {
    name: 'Metals Trading',
    sector: 'Industrial Commodities',
    icon: TrendingUp,
    description:
      'Strategic trading operations in ferrous and non-ferrous metals, connecting mining operations with industrial buyers in emerging and established markets worldwide.',
    stats: {
      quality: 'Competitive Pricing',
      service: 'Reliable Delivery',
    },
  },
  {
    name: 'IT & E-Commerce Solutions',
    sector: 'Technology',
    icon: Laptop,
    description:
      'Full-service IT consultancy and e-commerce platform development, helping businesses digitise operations, launch online stores, and grow their digital presence.',
    stats: {
      quality: 'Modern Stack',
      service: 'Full Service',
    },
  },
]

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white" aria-labelledby="services-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#D4622A] text-sm font-bold tracking-wider uppercase mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A2E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Comprehensive Business Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1A1A2E]/70 text-lg max-w-2xl"
          >
            From tobacco manufacturing to global commodity trading and technology consultancy,
            Jibra Group delivers excellence across every division of our operations.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-white border border-gray-200 hover:border-[#D4622A] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Header */}
              <div className="p-8 border-b border-gray-200">
                <div className="w-16 h-16 bg-[#1A1A2E] group-hover:bg-[#D4622A] flex items-center justify-center mb-4 transition-colors duration-300">
                  <company.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-[#1A1A2E] text-2xl font-bold mb-1">
                  {company.name}
                </h3>
                <span className="text-[#D4622A] text-sm font-semibold">
                  {company.sector}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[#1A1A2E]/60 text-sm leading-relaxed mb-6">
                  {company.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-[#1A1A2E]/40 text-xs uppercase tracking-wider mb-1">
                      Quality
                    </div>
                    <div className="text-[#1A1A2E] text-xl font-bold">
                      {company.stats.quality}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#1A1A2E]/40 text-xs uppercase tracking-wider mb-1">
                      Service
                    </div>
                    <div className="text-[#1A1A2E] text-xl font-bold">
                      {company.stats.service}
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#D4622A] hover:text-[#1A1A2E] text-sm font-semibold transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
