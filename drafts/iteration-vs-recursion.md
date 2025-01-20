---
title: "Iteration vs. Recursion"
author: "Ryan Hillard"
date: "2025-MM-DD"
abstract: ""
category: "technology"
keywords: ["programming"]
---

# Iteration vs. Recursion

I am mentoring a developer at the beginning of his career, and last week we were discussing recursion.  He made the interesting comment that, "I find for loops easier to use than recursion, because you can just iterate through the values you need."  But recursion solves a different problem than iteration and should be used in different situations.  Funny enough, in working on this site, I recently chose the *wrong strategy* and tried to use recursion, when I should have been iterating.  Let's dive into my use case and unpack these concepts, as well as provide concrete strategies for using each one.

## My problem

## Iteration
To iterate through the lowest level of the directory tree up to the top, the ideal approach is iteration instead of recursion, using a bottom-up traversal technique. This approach ensures you handle the leaf directories first and then move up toward the root.

### Why Bottom-Up Traversal?

In this approach, you:

1. Start processing files/directories from the deepest level.
2. Work your way up the directory tree, processing parent directories only after their children.

This is useful when the processing of parent directories depends on data from their subdirectories.

### When to Use Bottom-Up Iteration
- Dependency Processing: When a parent depends on data from children (e.g., aggregating files, generating summaries).
- Efficiency: When recursion risks hitting a stack limit.

## Recursion

### Introduction

### Key Elements
- Base Case

- Recursive Case

### Directory Traversal using Recursion

```bash
# Function to recursively list files
list_files() {
  local dir=$1
  echo "Directory: $dir"
  for file in "$dir"/*; do
    if [[ -d "$file" ]]; then
      # Recursive case: it's a directory, call list_files
      list_files "$file"
    else
      # Base case: it's a file, just print it
      echo "  File: $file"
    fi
  done
}
```

### How Recursion Works

1. Call stack builds up:

2. Base case reached:

3. Results propagate back:


```
/root
  ├── file1.txt
  ├── /subdir1
  │     ├── file2.txt
  │     ├── file3.txt
  └── /subdir2
        └── file4.txt
```

So for our function above and this file system, the recursive program works as follows:
- Call list_files("/root")
-- Print files in /root
-- Call list_files("/root/subdir1")
--- Print files in /root/subdir1
-- Call list_files("/root/subdir2")
--- Print files in /root/subdir2

### Key Concepts to Master Recursion

1. Always define a base case.
2. Reduce the problem size with each recursive call.
3. Use a debugger (or print statements) to trace recursive calls.
4. Understand the call stack: Every recursive call is pushed onto the stack and popped off as it completes.

### An Example Where Recursion Works

Include fidojs example

### Comparison: Iteration vs Recursion

| Feature               | Iteration (Bottom-Up)                                  | Recursion (Top-Down)                              |
|-----------------------|--------------------------------------------------------|---------------------------------------------------|
| **Traversal Order**   | Processes child directories first.                     | Processes parent directories first.               |
| **Ease of Debugging** | Easier to follow and debug.                            | Can be harder to trace due to call stack.         |
| **Stack Usage**       | Uses no additional stack (uses a loop).                | Relies on the call stack (risk of overflow).      |
| **Performance**       | Generally more efficient.                              | Can be less efficient if recursion is deep.       |


