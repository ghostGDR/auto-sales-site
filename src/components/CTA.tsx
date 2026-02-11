import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-12 md:p-16 text-center">
          {/* 装饰背景 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好让 AI 为您工作了吗？
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              加入 10,000+ 已经在使用 AISellr 的企业，开始您的 AI 销售之旅。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              免费开始
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
