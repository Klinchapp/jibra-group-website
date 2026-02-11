import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { MapPin, Globe, TrendingUp } from 'lucide-react'

const stats = [
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '6', label: 'Continents Reached', icon: MapPin },
  { value: '500+', label: 'Trading Partners', icon: TrendingUp },
]

const regions = [
  {
    name: 'East & Central Africa',
    description:
      'Our home base and manufacturing hub. Headquartered in Kampala, Uganda, with distribution networks across Kenya, Tanzania, Rwanda, DRC, and South Sudan.',
    stats: { presence: 'HQ + Factory', markets: '8+ Countries' },
  },
  {
    name: 'West & Southern Africa',
    description:
      'Expanding reach across West African markets including Nigeria, Ghana, and Senegal, with growing commodity trading operations in Southern Africa.',
    stats: { presence: 'Trading Offices', markets: '10+ Countries' },
  },
  {
    name: 'Middle East & North Africa',
    description:
      'Strong trading presence in the UAE, Saudi Arabia, and Egypt. Key hub for our spice, grain, and tobacco product exports serving the broader MENA region.',
    stats: { presence: 'Dubai Hub', markets: '12+ Countries' },
  },
  {
    name: 'South & Southeast Asia',
    description:
      'Sourcing partnerships for premium agro products, spices, and grains from India, Sri Lanka, and Southeast Asian markets, with growing export operations.',
    stats: { presence: 'Sourcing Network', markets: '10+ Countries' },
  },
]

export function GlobalPresence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="global" className="relative py-24 lg:py-32 bg-white" aria-labelledby="global-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#D4622A] text-sm font-bold tracking-wider uppercase mb-4"
          >
            Global Presence
          </motion.span>

          <motion.h2
            id="global-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A2E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trading Across Continents
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1A1A2E]/70 text-lg max-w-2xl"
          >
            From our manufacturing base in Uganda, Jibra Group serves markets across Africa,
            the Middle East, and Asia — building trusted partnerships in every region we operate.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8F9FA] p-8 text-center border border-gray-200"
            >
              <stat.icon className="w-12 h-12 text-[#1A1A2E] mx-auto mb-4" aria-hidden="true" />
              <div className="text-[#D4622A] text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-[#1A1A2E]/60 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.article
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-[#F8F9FA] hover:bg-white p-8 border border-gray-200 hover:border-[#D4622A] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[#1A1A2E] text-2xl font-bold mb-2">
                    {region.name}
                  </h3>
                  <p className="text-[#1A1A2E]/60 text-sm leading-relaxed">
                    {region.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-[#1A1A2E]/40 text-xs uppercase tracking-wider mb-1">
                    Presence
                  </div>
                  <div className="text-[#D4622A] text-xl font-bold">
                    {region.stats.presence}
                  </div>
                </div>
                <div>
                  <div className="text-[#1A1A2E]/40 text-xs uppercase tracking-wider mb-1">
                    Markets
                  </div>
                  <div className="text-[#D4622A] text-xl font-bold">
                    {region.stats.markets}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
