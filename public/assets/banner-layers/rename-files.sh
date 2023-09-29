#!/bin/bash

if [ $# -ne 1 ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

directory="$1"

if [ ! -d "$directory" ]; then
  echo "Error: Directory '$directory' does not exist."
  exit 1
fi

i=1
cd "$directory" || exit 1

for file in *; do
  if [ -f "$file" ]; then
    extension="${file##*.}"
    new_name=$(printf "%d.%s" "$i" "$extension")
    mv -i "$file" "$new_name"
    ((i++))
  fi
done

echo "File renaming completed."