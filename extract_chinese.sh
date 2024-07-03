#!/bin/bash

# 设置目标目录列表
TARGET_DIRS=("app" "components")  # 请将其替换为你的目标目录列表
LOCALE_DIR="locale"
LOCALE_FILE="$LOCALE_DIR/zh_CN.json"

# 创建 locale 文件夹
mkdir -p "$LOCALE_DIR"

# 初始化 locale 文件
echo "{" > "$LOCALE_FILE"

# 创建一个临时文件来存储唯一的中文字符串
TEMP_FILE=$(mktemp)

# 查找目标目录下所有包含中文字符的文件，并提取中文内容
for TARGET_DIR in "${TARGET_DIRS[@]}"; do
    find "$TARGET_DIR" \( -path "$TARGET_DIR/node_modules" -o -path "$TARGET_DIR/.*" \) -prune -o -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.html" \) -print0 | while IFS= read -r -d '' file; do
        echo "Processing file: $file"  # 调试信息
        grep -oP '(?<!//)[\x{4e00}-\x{9fa5}]+' "$file" >> "$TEMP_FILE"
    done
done

# 检查临时文件内容
echo "Contents of TEMP_FILE:"
cat "$TEMP_FILE"

# 去重并将中文内容添加到 locale 文件中
sort -u "$TEMP_FILE" | while read -r line; do
    echo "Adding line to locale file: $line"  # 调试信息
    echo "  \"$line\": \"$line\"," >> "$LOCALE_FILE"
done

# 去掉最后一个逗号，并补上结束的花括号
sed -i '$ s/,$//' "$LOCALE_FILE"
echo "}" >> "$LOCALE_FILE"

# 删除临时文件
rm "$TEMP_FILE"

echo "Locale 文件已生成在 $LOCALE_FILE"
