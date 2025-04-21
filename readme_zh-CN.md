# marquee.js

[English](readme.md) | 简体中文

> 一个用 JavaScript 实现的已废弃标签 `<marquee>` 的复刻版本  
> 使用 [WTFPL 协议](http://www.wtfpl.net/)

🔗 English version: [readme.md](readme.md)

## 🌀 特性

- 轻量无依赖，简单直接
- 模拟 `<marquee>` 标签的滚动行为
- 支持多个 `.marquee` 元素同时滚动
- 效果由 CSS 控制，可自由定制

## 🚀 用法

HTML：

```html
<div class="marquee">
  <span>这里是滚动的文字</span>
</div>
<script src="marquee.js"></script>
```

CSS：

```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}
.marquee span {
  display: inline-block;
  position: absolute;
  will-change: transform;
}
```

JS 会自动为所有 `.marquee` 元素应用滚动效果。

## ⚠️ 注意

这个脚本**不是为了生产环境设计的**，它只是对旧网页风格的一种致敬或复古玩法。

## 🪦 为什么？

因为我们怀念 `<marquee>`。

## 📜 许可证

![WTFPL badge](https://img.shields.io/badge/license-WTFPL-brightgreen.svg)

你可以随意使用它，做任何你想做的事。

```

---

要不要我也打包好 demo 页面和 GitHub readme 展示图？你也可以加个 GIF 看起来更酷～
```
