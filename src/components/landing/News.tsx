import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const newsItems = [
  {
    category: 'Manufacturing',
    title: 'Jibra Group Expands Production Capacity with New Manufacturing Facility',
    excerpt:
      'Our state-of-the-art tobacco manufacturing plant has increased production capacity by 40%, enabling us to meet growing international demand for XMAN and Robin brands.',
    date: 'December 15, 2024',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    category: 'Global Trading',
    title: 'Commodity Trading Network Now Spans 40+ Countries Across Six Continents',
    excerpt:
      'Jibra Group\'s global trading division has expanded operations into new markets across West Africa and Southeast Asia, strengthening our supply chain for agro products and spices.',
    date: 'November 28, 2024',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
  },
  {
    category: 'Technology',
    title: 'New E-Commerce Platform Launched for East African Market',
    excerpt:
      'Our IT consultancy division has launched a comprehensive e-commerce platform, helping regional businesses digitise their operations and reach customers online.',
    date: 'November 10, 2024',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
  },
]

export function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="news" className="relative py-24 lg:py-32 bg-[#F8F9FA]" aria-labelledby="news-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-[#D4622A] text-sm font-bold tracking-wider uppercase mb-4"
          >
            Latest News
          </motion.span>

          <motion.h2
            id="news-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1A1A2E] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            News & Company Updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#1A1A2E]/70 text-lg max-w-2xl"
          >
            Stay informed about Jibra Group's latest developments, market expansions,
            and strategic initiatives across our manufacturing, trading, and technology divisions.
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-white border border-gray-200 hover:border-[#D4622A] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#D4622A] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <time
                  className="text-[#1A1A2E]/40 text-xs uppercase tracking-wider mb-3 block"
                  dateTime={new Date(item.date).toISOString().split('T')[0]}
                >
                  {item.date}
                </time>
                <h3 className="text-[#1A1A2E] text-xl font-bold mb-3 leading-tight group-hover:text-[#D4622A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#1A1A2E]/60 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#D4622A] hover:text-[#1A1A2E] text-sm font-semibold transition-colors duration-200"
                >
                  Read more
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
