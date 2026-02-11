import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AISellr - AI 驱动的销售自动化平台',
  description: '24/7 自动化销售、客户沟通、报告生成。让您的业务永不休眠。',
  keywords: 'AI销售, 自动化, 客服机器人, 销售自动化, 24/7客服',
  openGraph: {
    title: 'AISellr - 您的AI销售助手',
    description: '让AI为您工作，24小时不间断销售',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
