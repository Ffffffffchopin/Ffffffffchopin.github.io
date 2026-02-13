# ffffffffchopin.github.io

这是我的 GitHub Pages 博客仓库（Jekyll + minima）。

## 写文章
在 `_posts/` 新建文件：

- `YYYY-MM-DD-title.md`

示例：

```md
---
layout: post
title: "My First Post"
date: 2026-02-13
---

正文内容...
<!--more-->
后续内容...
```

## 发布
把改动 push 到 `main` 分支，然后到 GitHub 仓库：

- Settings → Pages
- Build and deployment: Deploy from a branch
- Branch: `main` / `/(root)`

站点地址：`https://<username>.github.io/`

## 本地预览（可选）
如果你安装了 Ruby + Bundler：

```bash
bundle install
bundle exec jekyll serve
```
