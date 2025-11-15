import { motion } from 'framer-motion'
import { Camera, Heart, MessageSquare, Share2, Sparkles, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Creator-first tools',
    desc: 'Ultra-fast camera, studio-grade filters, and editing tools that keep your flow.'
  },
  {
    icon: Heart,
    title: 'Smart discovery',
    desc: 'An adaptive feed that learns your aesthetic and surfaces what sparks joy.'
  },
  {
    icon: MessageSquare,
    title: 'Fluid conversations',
    desc: 'Threads and DMs designed like chat bubbles—crisp, contextual, and fun.'
  },
  {
    icon: Share2,
    title: 'Seamless sharing',
    desc: 'Share to your circles or go global in a tap—no friction, just vibes.'
  },
  {
    icon: Sparkles,
    title: 'Delightful micro-motion',
    desc: 'Subtle haptics and motion cues guide interactions without stealing focus.'
  },
  {
    icon: Shield,
    title: 'Privacy by design',
    desc: 'You own your data. Granular controls and safety baked in from day one.'
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-x-0 -top-20 -z-0 h-40 bg-gradient-to-b from-transparent via-fuchsia-100/50 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Built for expression</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">Everything you love about social—reimagined with craft, clarity, and care.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 text-white shadow-md">
                  {<f.icon className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
