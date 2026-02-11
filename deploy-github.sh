#!/bin/bash

# GitHub 部署脚本 - AISellr
# 使用方式: ./deploy-github.sh YOUR_GITHUB_USERNAME

set -e

USERNAME="${1:-}"
REPO_NAME="auto-sales-site"
WORKSPACE="/Users/gan/clawd/auto-sales-site"

if [ -z "$USERNAME" ]; then
    echo "❌ 请提供 GitHub 用户名"
    echo "用法: ./deploy-github.sh YOUR_USERNAME"
    exit 1
fi

echo "🚀 开始部署 AISellr 到 GitHub..."
echo "   GitHub 用户名: $USERNAME"
echo "   仓库名: $REPO_NAME"
echo ""

cd "$WORKSPACE"

# 检查 git 状态
echo "📋 检查 Git 状态..."
git status --short || true

# 配置远程仓库
echo "🔗 配置远程仓库..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

# 推送代码
echo "⬆️  推送代码到 GitHub..."
git push -u origin main || {
    echo ""
    echo "❌ 推送失败！可能原因:"
    echo "   1. 仓库 $REPO_NAME 不存在，请在 GitHub 创建"
    echo "   2. 没有权限，请检查用户名是否正确"
    echo ""
    echo "💡 创建仓库步骤:"
    echo "   1. 访问 https://github.com/new"
    echo "   2. 仓库名: $REPO_NAME"
    echo "   3. 设为 Public"
    echo "   4. 不要勾选 'Add a README file'"
    exit 1
}

echo ""
echo "✅ 代码推送成功！"
echo ""
echo "📋 下一步：启用 GitHub Pages"
echo "   1. 访问: https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "   2. Source 选择: Deploy from a branch"
echo "   3. Branch 选择: main, 文件夹: / (root)"
echo "   4. 点击 Save"
echo ""
echo "🌐 网站地址将是:"
echo "   https://$USERNAME.github.io/$REPO_NAME"
echo ""

# 更新 README 中的链接
sed -i '' "s|your-username.github.io|$USERNAME.github.io|g" README.md 2>/dev/null || true
sed -i '' "s|aisellr.github.io|$USERNAME.github.io/$REPO_NAME|g" README.md 2>/dev/null || true

echo "📝 README 已更新"
echo ""
echo "🎉 部署脚本执行完成！"
