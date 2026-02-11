'use client'

import { useState } from 'react'
import { Bot, ArrowRight, Sparkles, Zap, Globe } from 'lucide-react'

export function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // 这里可以添加邮件收集逻辑
  }

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 lg:px-8">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl text-center">
        {/* 徽章 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">🚀 新功能：AI 智能客户分析已上线</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            让 AI 为您销售
          </span>
          <br />
          <span className="text-white">24/7 永不休眠</span>
        </h1>

        {/* 副标题 */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
          AISellr 是您的智能销售助手，自动寻找客户、进行对话、完成交易。
          不需要雇佣销售团队，AI 为您的业务全天候工作。
        </p>

        {/* CTA 表单 */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          {!submitted ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的邮箱"
                required
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 group"
              >
                免费试用
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 font-medium">✓ 感谢注册！我们会尽快与您联系。</p>
            </div>
          )}
        </form>

        <p className="mt-4 text-sm text-slate-500">14天免费试用，无需信用卡</p>

        {/* 统计数据 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Bot, value: '10,000+', label: '活跃AI代理' },
            { icon: Zap, value: '500万+', label: '自动化对话' },
            { icon: Globe, value: '50+', label: '覆盖国家' },
            { icon: Sparkles, value: '98%', label: '客户满意度' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
