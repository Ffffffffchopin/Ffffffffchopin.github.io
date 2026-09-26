# ffffffffchopin.github.io

Personal research portfolio for Yuhao Xu / HsuYugo. The site keeps the original
Jekyll notes area and adds case studies for four open research projects:
TriMemory, CrowdTensor, NeuralEngine, and Oblivionis.

The portfolio intentionally separates observed evidence from active hypotheses.
Project images are copied from the corresponding project repositories' existing
research or engineering artifacts; no private logs, credentials, or local
environments are published here.

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

## Publish
Push changes to `main`, then configure GitHub Pages:

- Settings → Pages
- Build and deployment: Deploy from a branch
- Branch: `main` / `/(root)`

Site: `https://ffffffffchopin.github.io/`

## Local preview
如果你安装了 Ruby + Bundler：

```bash
bundle install
bundle exec jekyll serve
```

The repository uses custom layouts and static CSS/JavaScript, so the build does
not depend on the Minima theme. The generated `_site/` directory is local build
output and is intentionally ignored by Git.
