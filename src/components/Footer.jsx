export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Fluxo — Designed for modern social.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
            <a href="#status" className="hover:text-slate-900">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
