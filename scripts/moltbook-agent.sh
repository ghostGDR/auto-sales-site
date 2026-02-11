#!/bin/bash

# Moltbook 自动营销脚本
# 与 AISellr 营销系统集成

WORKSPACE="/Users/gan/clawd/auto-sales-site"
MOLTBOOK_API="https://www.moltbook.com/api/v1"
API_KEY=$(jq -r '.api_key' "$WORKSPACE/.moltbook/credentials.json" 2>/dev/null || echo "")

# 日志函数
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [Moltbook] $1"
}

# 检查认领状态
check_status() {
    if [ -z "$API_KEY" ]; then
        log "❌ 未找到 API Key"
        return 1
    fi
    
    local response=$(curl -s "$MOLTBOOK_API/agents/status" \
        -H "Authorization: Bearer $API_KEY")
    
    local status=$(echo "$response" | jq -r '.status // "unknown"')
    log "认领状态: $status"
    
    if [ "$status" = "claimed" ]; then
        return 0
    else
        log "⏳ 等待用户认领..."
        return 1
    fi
}

# 获取 Feed 并分析
get_feed() {
    log "📰 获取 Moltbook Feed..."
    
    local response=$(curl -s "$MOLTBOOK_API/posts?sort=hot&limit=10" \
        -H "Authorization: Bearer $API_KEY")
    
    # 保存到日志
    echo "$response" | jq '.' > "$WORKSPACE/logs/moltbook-feed-$(date +%Y%m%d-%H%M).json"
    
    local count=$(echo "$response" | jq '.posts | length')
    log "获取到 $count 条帖子"
    
    return 0
}

# 发布帖子
post_content() {
    local title="$1"
    local content="$2"
    local submolt="${3:-general}"
    
    log "📝 发布帖子: $title"
    
    local response=$(curl -s -X POST "$MOLTBOOK_API/posts" \
        -H "Authorization: Bearer $API_KEY" \
        -H "Content-Type: application/json" \
        -d "{\"submolt\": \"$submolt\", \"title\": \"$title\", \"content\": \"$content\"}")
    
    if echo "$response" | jq -e '.success' > /dev/null 2>&1; then
        log "✅ 帖子发布成功"
        return 0
    else
        local error=$(echo "$response" | jq -r '.error // "Unknown error"')
        log "❌ 发布失败: $error"
        return 1
    fi
}

# 自动评论
comment_on_post() {
    local post_id="$1"
    local content="$2"
    
    log "💬 评论帖子: $post_id"
    
    local response=$(curl -s -X POST "$MOLTBOOK_API/posts/$post_id/comments" \
        -H "Authorization: Bearer $API_KEY" \
        -H "Content-Type: application/json" \
        -d "{\"content\": \"$content\"}")
    
    if echo "$response" | jq -e '.success' > /dev/null 2>&1; then
        log "✅ 评论成功"
        return 0
    else
        local error=$(echo "$response" | jq -r '.error // "Unknown error"')
        log "❌ 评论失败: $error"
        return 1
    fi
}

# 主函数
main() {
    local task="${1:-status}"
    
    log "========================================"
    log "Moltbook 营销任务启动: $task"
    log "========================================"
    
    # 检查认领状态
    if ! check_status; then
        log "⚠️ Agent 尚未被认领，跳过任务执行"
        log "请访问认领链接: https://moltbook.com/claim/moltbook_claim_KFoQkdFgQVzx5denpx3FqtB7FlccyRsF"
        return 1
    fi
    
    case $task in
        status)
            get_feed
            ;;
        post)
            # 示例：发布产品推广
            post_content "AI 销售的未来已来 🚀" "AISellr 帮助企业在 Moltbook 上自动化销售流程。24/7 工作，永不休眠。想了解 AI 如何提升你的销售效率吗？" "showcase"
            ;;
        engage)
            # 获取 Feed 并互动
            get_feed
            # 这里可以添加自动评论逻辑
            log "📊 已分析 Feed，准备互动..."
            ;;
        *)
            log "❌ 未知任务: $task"
            log "可用任务: status, post, engage"
            return 1
            ;;
    esac
    
    log "========================================"
    log "任务完成"
    log "========================================"
}

main "$@"
