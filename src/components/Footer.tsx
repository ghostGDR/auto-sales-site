export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AISellr
            </span>
          </div>

          <nav className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">功能</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">定价</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">关于</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">联系</a>
          </nav>

          <p className="text-slate-500 text-sm">
            © 2025 AISellr. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
