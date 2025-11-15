import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:bg-white/10 dark:border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 text-white shadow-lg">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-violet-700 to-sky-600 bg-clip-text text-transparent">
                Fluxo
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-700/80 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#download" className="text-sm font-medium text-slate-700 hover:text-slate-900">Download App</a>
              <a href="#join" className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition">
                Join the beta
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 shadow">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-slate-700/90 hover:text-slate-900">
                    {item.label}
                  </a>
                ))}
                <a href="#join" className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow">Join the beta</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
