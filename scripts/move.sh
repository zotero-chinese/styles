#!/bin/bash

# # 检查是否提供了目录参数
# if [ -z "$1" ]; then
#   echo "请提供目录路径作为参数。"
#   exit 1
# fi

TARGET_DIR="src"

# 检查目标目录是否存在
if [ ! -d "$TARGET_DIR" ]; then
  echo "目标目录不存在。"
  exit 1
fi

# 查找目录中的所有 .csl 文件
find "$TARGET_DIR" -maxdepth 1 -name "*.csl" | while read -r file; do
  # 获取文件名，不包括扩展名
  base_name=$(basename "$file" .csl)

  # 创建与文件名同名的文件夹（如果不存在）
  target_folder="$TARGET_DIR/$base_name"
  if [ ! -d "$target_folder" ]; then
    mkdir "$target_folder"
  fi

  # 移动 .csl 文件到相应的文件夹
  mv "$file" "$target_folder"
done

echo "所有 .csl 文件已移动到对应的文件夹。"

# 移动 json 文件
# find "$TARGET_DIR" -maxdepth 2 -type f -name '*.json' | while read -r file; do
#   base_name=$(basename "$file")
#   # new_name=$(echo "$base_name" | sed 's/^...//')
#   # echo $base_name $TARGET_DIR $new_name $file
#   dir_name=$(echo $(dirname "$file") | sed 's/^.............//')
#   echo "src/$dir_name/$base_name"

#   mv "$file" "src/$dir_name/$base_name"
# done
