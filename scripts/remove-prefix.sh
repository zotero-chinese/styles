#!/bin/bash


TARGET_DIR="tests/styles"

# 检查目标目录是否存在
if [ ! -d "$TARGET_DIR" ]; then
  echo "目标目录不存在。"
  exit 1
fi

# # 删除子文件夹的数字前缀
# find "$TARGET_DIR" -maxdepth 1 -type d -name '[0-9]*' | while read -r dir; do
#   base_name=$(basename "$dir")
#   new_name=$(echo "$base_name" | sed 's/^...//')
#   echo $base_name $TARGET_DIR $new_name
#   mv "$dir" "$TARGET_DIR/$new_name"
# done

# # 删除 .csl 文件的数字前缀
# find "$TARGET_DIR" -maxdepth 2 -type f -name '[0-9]*.csl' | while read -r file; do
#   base_name=$(basename "$file")
#   new_name=$(echo "$base_name" | sed 's/^...//')
#   echo $base_name $TARGET_DIR $new_name

#   mv "$file" "$TARGET_DIR/$new_name"
# done



echo "所有子文件夹和 .csl 文件的数字前缀已删除。"
