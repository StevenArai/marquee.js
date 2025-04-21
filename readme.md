# marquee.js

English | [简体中文](readme_zh-CN.md)

> A JavaScript implementation of the deprecated `<marquee>` tag  
> Licensed under the [WTFPL](http://www.wtfpl.net/)

📖 中文版请见：[readme_zh-CN.md](readme_zh-CN.md)

## 🌀 Features

- Lightweight, dependency-free
- Mimics `<marquee>` scrolling behavior
- Supports multiple `.marquee` elements on the same page
- Customizable via CSS

## 🚀 Usage

```html
<div class="marquee">
  <span>Your scrolling text goes here</span>
</div>
<script src="marquee.js"></script>
```

Add CSS:

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

`marquee.js` will automatically apply the scrolling effect on all elements with the class `marquee`.

## ⚠️ Note

This script is **not meant for production use**. It's a nostalgic throwback for retro-styled pages or experimental designs.

## 🪦 Why?

Because we miss `<marquee>`.

## 📜 License

![WTFPL badge](https://img.shields.io/badge/license-WTFPL-brightgreen.svg)

Do whatever you want.

```

```
