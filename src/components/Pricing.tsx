import { Check } from 'lucide-react'

const tiers = [
  {
    name: '入门版',
    id: 'starter',
    price: '¥99',
    description: '适合个人创业者和小型团队',
    features: [
      '1 个 AI 销售代理',
      '每月 1,000 次对话',
      '基础数据分析',
      '邮件支持',
      '标准响应速度',
    ],
    cta: '开始试用',
    mostPopular: false,
  },
  {
    name: '专业版',
    id: 'professional',
    price: '¥299',
    description: '适合成长型企业',
    features: [
      '5 个 AI 销售代理',
      '每月 10,000 次对话',
      '高级数据分析',
      '优先邮件支持',
      '快速响应',
      '自定义对话流程',
      'API 接入',
    ],
    cta: '立即升级',
    mostPopular: true,
  },
  {
    name: '企业版',
    id: 'enterprise',
    price: '定制',
    description: '适合大型企业定制需求',
    features: [
      '无限 AI 销售代理',
      '无限对话次数',
      '专属客户经理',
      '7x24 小时支持',
      '私有化部署选项',
      '定制 AI 训练',
      'SLA 保障',
    ],
    cta: '联系销售',
    mostPopular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8 bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            简单透明的定价
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            选择适合您的方案，随时升级或降级，没有隐藏费用。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-8 ${
                tier.mostPopular
                  ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-sm font-medium text-white">
                    最受欢迎
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                {tier.price !== '定制' && (
                  <span className="text-slate-400">/月</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  tier.mostPopular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
