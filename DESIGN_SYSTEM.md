# AISellr UI 设计系统

## 设计来源
使用 ui-ux-pro-max skill 生成

## 设计风格

### 1. Pattern - Enterprise Gateway
- 专注于转化：信任信号突出
- CTA 布局：Contact Sales (主要) + Login (次要)
- 配色策略：企业级海军蓝/灰色，高诚信度

### 2. Style - Glassmorphism (毛玻璃效果)
- 磨砂玻璃、透明、模糊背景
- 分层设计、鲜艳背景、光源效果
- 深度感、多层级

## 配色方案

| 角色 | Hex | 用途 |
|------|-----|------|
| Primary 500 | #6366F1 | 主色（靛蓝） |
| Primary 600 | #4F46E5 | 主色深色 |
| CTA 500 | #10B981 | 行动按钮（翠绿） |
| CTA 600 | #059669 | CTA深色 |
| Background | #0F172A | 背景深蓝 |
| Text | #FFFFFF | 主要文字 |
| Muted | #94A3B8 | 次要文字 |

## 字体

- **标题**: Poppins (font-heading)
- **正文**: Open Sans (font-body)
- Google Fonts: https://fonts.google.com/share?selection.family=Open+Sans:wght@300;400;500;600;700|Poppins:wght@400;500;600;700

## 特效

- Backdrop blur (20px)
- 微妙边框 (1px solid rgba white 0.1-0.2)
- 光线反射效果
- Z轴深度感
- 渐变动画 (gradient 8s)

## 动画

- Float: 6s ease-in-out infinite
- Pulse-slow: 4s cubic-bezier
- Gradient: 8s linear infinite
- Fade-in-up: 0.6s ease-out
- 卡片悬停: translateY(-8px) + 阴影

## 避免的 Anti-patterns

- ✅ 不使用 emoji 作为图标（使用 Lucide SVG）
- ✅ 所有可点击元素有 cursor-pointer
- ✅ 悬停状态有平滑过渡 (150-300ms)
- ✅ 浅色模式文字对比度 4.5:1
- ✅ 支持 prefers-reduced-motion

## 技术实现

### 玻璃效果 CSS
```css
.glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### 渐变文字
```css
.gradient-text {
    background: linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #10b981 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 8s ease infinite;
}
```

### 按钮样式
```css
.btn-primary {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

.btn-cta {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
```

## 文件位置
设计系统保存在: `/Users/gan/clawd/design-system/aisellr/MASTER.md`

## 更新日志
- 2025-02-11: 使用 ui-ux-pro-max skill 生成初始设计系统
- 应用 Glassmorphism 风格
- 使用 Lucide Icons 替换 emoji
- 添加 Poppins + Open Sans 字体
- 实现完整的动画系统
