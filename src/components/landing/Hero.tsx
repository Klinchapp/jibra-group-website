import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    // Trade route nodes
    const nodes: Array<{x:number;y:number;vx:number;vy:number;r:number;pulse:number;pulseSpeed:number}> = []
    const particles: Array<{x:number;y:number;vx:number;vy:number;size:number;alpha:number;life:number}> = []

    const init = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      nodes.length = 0
      particles.length = 0
      for (let i = 0; i < 18; i++) {
        nodes.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 3 + 1.5, pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        })
      }
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15, vy: -Math.random() * 0.3 - 0.1,
          size: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.3 + 0.05,
          life: Math.random(),
        })
      }
    }

    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      t += 0.005

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += n.pulseSpeed
        if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 280
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12
            const midX = (nodes[i].x + nodes[j].x) / 2 + Math.sin(t + i) * 30
            const midY = (nodes[i].y + nodes[j].y) / 2 + Math.cos(t + j) * 30
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.quadraticCurveTo(midX, midY, nodes[j].x, nodes[j].y)
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            grad.addColorStop(0, `rgba(212,98,42,${alpha})`)
            grad.addColorStop(0.5, `rgba(232,165,71,${alpha * 1.2})`)
            grad.addColorStop(1, `rgba(212,98,42,${alpha})`)
            ctx.strokeStyle = grad
            ctx.lineWidth = 1
            ctx.stroke()

            if (dist < maxDist * 0.7) {
              const tt2 = ((t * 2 + i * 0.3) % 1), tt1 = 1 - tt2
              const px = tt1*tt1*nodes[i].x + 2*tt1*tt2*midX + tt2*tt2*nodes[j].x
              const py = tt1*tt1*nodes[i].y + 2*tt1*tt2*midY + tt2*tt2*nodes[j].y
              ctx.beginPath()
              ctx.arc(px, py, 1.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(232,165,71,${alpha * 3})`
              ctx.fill()
            }
          }
        }
      }

      nodes.forEach(n => {
        const pf = 1 + Math.sin(n.pulse) * 0.3
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 8 * pf)
        grd.addColorStop(0, 'rgba(212,98,42,0.15)')
        grd.addColorStop(1, 'rgba(212,98,42,0)')
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 8 * pf, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * pf, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,165,71,${0.5 + Math.sin(n.pulse) * 0.2})`; ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fill()
      })

      particles.forEach(p => {
        p.x += p.vx + Math.sin(t * 2 + p.life * 10) * 0.1; p.y += p.vy; p.life += 0.001
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha * (0.5 + Math.sin(p.life * 3) * 0.5)})`; ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize(); init(); draw()
    window.addEventListener('resize', () => { resize(); init() })
    return () => { cancelAnimationFrame(animId) }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{ background: '#0a0a1a' }}
      aria-label="Introduction to Jibra Group of Companies"
    >
      {/* Animated Canvas */}
      <HeroCanvas />

      {/* Gradient overlays for depth */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,98,42,.08) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(26,26,46,.6) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(232,165,71,.06) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(10,10,26,.3) 0%, transparent 30%, transparent 70%, rgba(10,10,26,.5) 100%)',
        }}
      />

      {/* Floating orbs */}
      {[
        { className: 'w-[500px] h-[500px] -top-[10%] right-[10%]', bg: 'rgba(212,98,42,.12)', delay: '0s' },
        { className: 'w-[400px] h-[400px] bottom-[10%] right-[30%]', bg: 'rgba(232,165,71,.1)', delay: '-4s' },
        { className: 'w-[350px] h-[350px] top-[30%] -left-[5%]', bg: 'rgba(100,120,200,.06)', delay: '-8s' },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full z-[2] blur-[60px] ${orb.className}`}
          style={{ background: `radial-gradient(circle, ${orb.bg}, transparent 70%)` }}
          animate={{
            x: [0, 30, -15, 20, 0],
            y: [0, -20, 25, 10, 0],
            scale: [1, 1.05, 0.95, 1.02, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: parseFloat(orb.delay) }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-16 pb-32 w-full">
        <div className="max-w-[800px]">
          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-20 h-[3px] mb-8 origin-left"
            style={{ background: 'linear-gradient(90deg, #D4622A, #E8A547)' }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium Tobacco<br />
            Manufacturing <span className="text-[#D4622A] italic">&amp;</span><br />
            <em className="text-[#E8A547] font-normal">Global Commodity</em> Trading
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/75 text-lg md:text-xl mb-10 leading-relaxed max-w-[600px]"
          >
            Jibra Group is a diversified conglomerate manufacturing premium tobacco products,
            trading agricultural commodities across 40+ countries, and delivering expert
            consultancy in product development, IT, and e-commerce.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#D4622A] hover:bg-[#c0571f] text-white px-9 py-4 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(212,98,42,.4)] hover:-translate-y-px overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/[.08] hover:bg-white/15 text-white border-[1.5px] border-white/25 hover:border-white/50 px-9 py-4 text-base font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-[0_8px_30px_rgba(255,255,255,.08)] hover:-translate-y-px"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-white/[.97] backdrop-blur-xl border-t border-black/[.06]"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Years of Excellence' },
              { value: '40+', label: 'Countries Served' },
              { value: 'ISO', label: 'Certified Quality' },
              { value: '12+', label: 'Product Lines' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center md:text-left relative">
                <div className="text-[#D4622A] text-3xl md:text-4xl font-bold leading-none">
                  {stat.value}
                </div>
                <div className="text-[#1A1A2E]/50 text-[.8rem] font-medium mt-1 tracking-wide">
                  {stat.label}
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute right-0 top-[10%] h-[80%] w-px bg-[#1A1A2E]/[.08]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
