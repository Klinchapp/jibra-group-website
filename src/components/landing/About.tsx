import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Target, Lightbulb, Shield, Leaf } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Quality Excellence',
    description:
      'ISO-certified manufacturing processes ensuring every tobacco product meets the highest international standards of quality and consistency.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description:
      'Pioneering LSS (Low Smoke Smell) technology and click-flavour systems, alongside cutting-edge IT and e-commerce solutions for our clients.',
  },
  {
    icon: Shield,
    title: 'Integrity Always',
    description:
      'Building lasting partnerships through ethical practices, transparency in global trading, and unwavering commitment to regulatory compliance.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Growth',
    description:
      'Responsible sourcing of agricultural commodities, sustainable farming partnerships, and investing in communities where we operate.',
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#F8F9FA]" aria-labelledby="about-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#D4622A] text-sm font-bold tracking-wider uppercase mb-4"
            >
              About Jibra Group
            </motion.span>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#1A1A2E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Legacy of Excellence Since 1999
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-[#1A1A2E]/70 text-lg leading-relaxed">
                Founded over two decades ago, <strong>Jibra Group of Companies</strong> has
                grown into a leading manufacturer of high-quality tobacco products and
                cigarettes, with our flagship <strong>XMAN</strong> and <strong>Robin</strong> brands
                trusted by consumers across Africa, the Middle East, and South Asia.
              </p>

              <p className="text-[#1A1A2E]/70 text-lg leading-relaxed">
                Beyond manufacturing, our global trading division handles tobacco and tobacco products,
                agro products, metals, spices, grains, and pulses — connecting producers with
                markets across 40+ countries. We also provide specialised consultancy services
                in tobacco product development, information technology, and e-commerce solutions.
              </p>

              <p className="text-[#1A1A2E]/70 text-lg leading-relaxed">
                Headquartered in Kampala, Uganda, Jibra Group operates with a commitment to
                quality, innovation, and integrity — delivering value to partners, clients,
                and communities worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[#D4622A] hover:text-[#1A1A2E] font-semibold transition-colors duration-200"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 border-l-4 border-[#D4622A] hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="w-10 h-10 text-[#1A1A2E] mb-4" aria-hidden="true" />
                <h3 className="text-[#1A1A2E] text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-[#1A1A2E]/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
