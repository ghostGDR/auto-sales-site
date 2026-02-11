#!/bin/bash
# 快速部署脚本 - 等用户创建仓库后执行

echo "🚀 AISellr GitHub 部署脚本"
echo ""
echo "步骤1: 请在浏览器中创建仓库"
echo "   访问: https://github.com/new"
echo "   仓库名: auto-sales-site"
echo "   设为 Public"
echo "   不要勾选 'Add a README file'"
echo ""
read -p "仓库创建完成后按回车继续..."

echo ""
echo "步骤2: 推送代码..."
cd /Users/gan/clawd/auto-sales-site
git push -u origin main

echo ""
echo "步骤3: 启用 GitHub Pages..."
echo "   访问: https://github.com/ghostGDR/auto-sales-site/settings/pages"
echo "   Source: Deploy from a branch"
echo "   Branch: main, 文件夹: / (root)"
echo "   点击 Save"
echo ""
echo "🌐 网站地址: https://ghostGDR.github.io/auto-sales-site"
