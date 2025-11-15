import { motion } from 'framer-motion'

const cards = [
  { title: 'Minimal profile', subtitle: 'Focus on content', color: 'from-slate-900 to-slate-700', img: null },
  { title: 'Immersive stories', subtitle: 'Edge-to-edge motion', color: 'from-fuchsia-600 to-violet-600', img: null },
  { title: 'Live moments', subtitle: 'React in real-time', color: 'from-sky-500 to-cyan-500', img: null },
]

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">A cleaner, calmer social</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">We trimmed the clutter and elevated the craft. Your feed feels curated, not crowded.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${c.color} text-white p-6 shadow-xl`}
            >
              <div className="min-h-[260px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{c.subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Preview</span>
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs">WIP</span>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 h-28 w-28 rounded-2xl bg-white/20"
                animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
