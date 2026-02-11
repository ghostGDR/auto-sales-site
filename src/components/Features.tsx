import { MessageSquare, Target, BarChart3, Shield, Clock, Users } from 'lucide-react'

const features = [
  {
    name: '智能对话',
    description: 'AI 理解客户意图，进行自然流畅的多轮对话，像真人一样交流。',
    icon: MessageSquare,
  },
  {
    name: '精准获客',
    description: '自动在各个平台寻找潜在客户，主动发起对话，不错过任何商机。',
    icon: Target,
  },
  {
    name: '数据分析',
    description: '实时追踪销售数据，生成详细报告，帮助您优化销售策略。',
    icon: BarChart3,
  },
  {
    name: '安全可靠',
    description: '企业级数据加密，符合 GDPR 标准，保护您和客户的隐私。',
    icon: Shield,
  },
  {
    name: '全天候运行',
    description: '无需人工值守，AI 代理 24/7 不间断工作，随时响应客户需求。',
    icon: Clock,
  },
  {
    name: '多平台覆盖',
    description: '支持网站、微信、WhatsApp、邮件等多个渠道，统一管理所有对话。',
    icon: Users,
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            为什么选择 AISellr？
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            我们的 AI 代理经过专业训练，能够处理各种销售场景，从初次接触到成交转化。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
