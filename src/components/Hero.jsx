import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Now open for creators
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Share life beautifully
                <span className="block bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">with the new social canvas</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
                A visually immersive social space that blends stunning aesthetics with fluid interactions. Create, discover, and connect in a feed that feels alive.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#join" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition">Get started</a>
                <a href="#showcase" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow hover:shadow-md transition border border-slate-200/60">See how it looks</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-slate-500">
                <div className="flex -space-x-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-fuchsia-400 to-sky-400" />
                  ))}
                </div>
                <span className="text-sm">Join 25k+ early members</span>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl p-2 shadow-xl">
                  <div className="aspect-[9/18] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white">
                    <div className="h-full w-full grid place-items-center text-slate-400">
                      <div className="text-center px-6 py-12">
                        <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">Preview</p>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900">Fluid feed interactions</h3>
                        <p className="mt-2 text-sm text-slate-600">Subtle motion, delightful micro-interactions, and a distraction-free layout.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
