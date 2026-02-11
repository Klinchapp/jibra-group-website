import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Brand Portfolio', href: '#portfolio' },
    { label: 'Global Presence', href: '#global' },
    { label: 'News & Updates', href: '#news' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'Follow Jibra Group on LinkedIn' },
  { icon: Twitter, href: '#', label: 'Follow Jibra Group on Twitter' },
  { icon: Facebook, href: '#', label: 'Follow Jibra Group on Facebook' },
  { icon: Instagram, href: '#', label: 'Follow Jibra Group on Instagram' },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer className="relative bg-white border-t border-gray-200" role="contentinfo">
      {/* CTA Section */}
      <section id="contact" className="bg-[#1A1A2E] py-20" aria-labelledby="cta-heading">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 id="cta-heading" className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Partner with Jibra Group?
              </h2>
              <p className="text-white/80 text-lg">
                Whether you're looking for premium tobacco products, commodity trading partnerships,
                or expert consultancy services — our team is ready to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@jibragroup.com"
                className="inline-flex items-center justify-center gap-2 bg-[#D4622A] hover:bg-[#E8A547] text-white px-8 py-4 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border-2 border-white/70 px-8 py-4 text-base font-semibold transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
              >
                View Our Brands
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Logo + Name */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/jibra-logo.png"
                  alt="Jibra Group of Companies Logo"
                  className="h-16 w-auto"
                  width="65"
                  height="64"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span
                    className="text-[#1A1A2E] text-xl font-extrabold tracking-wide leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    JIBRA GROUP
                  </span>
                  <span className="text-[#D4622A] text-[10px] font-semibold tracking-[0.15em] uppercase leading-tight">
                    of Companies
                  </span>
                </div>
              </div>

              <p className="text-[#1A1A2E]/70 text-sm leading-relaxed mb-6">
                Jibra Group of Companies is a diversified conglomerate specialising in
                tobacco manufacturing, global commodity trading, and professional
                consultancy services across Africa, the Middle East, and Asia.
              </p>

              {/* Contact Info */}
              <address className="space-y-3 not-italic">
                <a
                  href="mailto:info@jibragroup.com"
                  className="flex items-center gap-3 text-[#1A1A2E]/70 hover:text-[#D4622A] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  info@jibragroup.com
                </a>
                <a
                  href="tel:+256700000000"
                  className="flex items-center gap-3 text-[#1A1A2E]/70 hover:text-[#D4622A] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +256-700-000-000
                </a>
                <p className="flex items-center gap-3 text-[#1A1A2E]/70 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Kampala, Uganda
                </p>
              </address>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Company links"
          >
            <h4 className="text-[#1A1A2E] font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#1A1A2E]/70 hover:text-[#D4622A] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Legal Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Legal links"
          >
            <h4 className="text-[#1A1A2E] font-bold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#1A1A2E]/70 hover:text-[#D4622A] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-[#1A1A2E]/60 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Jibra Group of Companies. All rights
              reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-[#F8F9FA] hover:bg-[#D4622A] flex items-center justify-center transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-[#1A1A2E] group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
