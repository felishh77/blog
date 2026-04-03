---
title: Markdown演示
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: 展示本站所用到的Markdown特性以及渲染效果
toc: true
draft: false
---


<style>
.red {
  color: #ef4444;
  font-weight: 600;
}

.big {
  font-size: 1.25em;
  font-weight: bold;
}
.colorful {

  font-weight: bold;
  background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 3s linear infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0 center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>


## Markdown基础语法

Markdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。

### 标题

文章内容较多时，可以用标题分段：

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

标题预览会打乱文章的结构，所以在此不展示。

### 粗斜体

```markdown
_斜体文本_

**粗体文本**

**_粗斜体文本_**
```

预览：

*斜体文本*

**粗体文本**

***粗斜体文本*** 

### 链接

```markdown
文字链接 [链接名称](http://链接网址)
```

预览：

文字链接 [链接名称](http://%E9%93%BE%E6%8E%A5%E7%BD%91%E5%9D%80)

### 行内代码

```markdown
这是一条 `单行代码`
```

预览：

这是一条 `行内代码`

### 代码块

```markdown
```js
// calculate fibonacci
function fibonacci(n) {
	if (n <= 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```
```

预览：

```js
// calculate fibonacci
function fibonacci(n) {
	if (n <= 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```

当前使用 shiki 作为代码高亮插件，支持的语言请参考 [shiki / languages](https://shiki.matsu.io/languages.html)。

### 行内公式

```latex
这是一条行内公式 $e^{i\pi} + 1 = 0$
```

预览：

这是一条行内公式 $e^{i\pi} + 1 = 0$

### 公式块

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

预览：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

当前使用 KaTeX 作为数学公式插件，支持的语法请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。



### 图片

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

预览：

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### 删除线

```markdown
~~删除线~~
```

预览：

~~删除线~~

### 分隔符

如果你有写分割线的习惯，可以新起一行输入三个减号`---` 或者星号 `***`。当前后都有段落时，请空出一行：

```markdown
---
```

预览：

***

### 列表

普通无序列表

```markdown
- 迷幻摇滚
- 朋克
- 金属
    - 重金属
    - 死亡金属
```

预览：

- 迷幻摇滚
- 朋克
- 金属

  - 重金属
  - 死亡金属


普通有序列表

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

预览：

1. The Dark Side of the Moon

   1. Time
   2. Money

2. The Wall
3. Wish You Were Here

列表里可以继续嵌套语法

### 注释

```markdown
在引用的地方使用 [^脚标] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^脚标]: 这里是注释的内容

也可以使用行内注释^[这里是行内注释的内容] 
```

预览：

在引用的地方使用 [^1] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^1]: 这里是注释的内容

也可以使用行内注释^[这里是行内注释的内容]

### To-Do 列表

```markdown
- [ ] 未完成的任务
- [x] 已完成的任务
```

预览：

- [ ] 未完成的任务
- [x] 已完成的任务

### 引用

```markdown
> No one told you when to run
> You missed the starting gun.
```

预览：

> No one told you when to run
  
You missed the starting gun.

引用里也可以继续嵌套语法。

## 扩展功能

### 插入

```
++插入内容++
```

预览：

++插入内容++

## 标记

```
==标记内容==
```

预览：

==标记内容==

## Ruby

```
{拼音}(pīn|yīn)
```

预览：

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

预览：

{振り仮名}(ふ||が|な)

### 遮罩

```
!!遮罩内容!!
```

预览：

!!遮罩内容!!

### GitHub Alert

```markdown
> [!NOTE]
> 普通信息
```
预览：

> [!NOTE]
  
普通信息

提示信息可以多层嵌套

```markdown
> [!TIP]
> 提示信息
>
> > [!IMPORTANT]
> > 重要信息
> >
> > > [!WARNING]
> > > 风险信息
> > >
> > > > [!CAUTION]
> > > > 警告信息
```

预览：

> [!TIP]
> 提示信息
>
> > [!IMPORTANT]
> > 重要信息
> >
> > > [!WARNING]
> > > 风险信息
> > >
> > > > [!CAUTION]
> > > > 警告信息

也可以自定义标题

```markdown
> [!NOTE] (･ρ･)ﾉ
> 自定义标题文字
```

预览：

> [!NOTE/(･ρ･)ﾉ]
> 自定义标题文字

### 增强表格

```markdown
| 左对齐 | 居中 | 右对齐 | 居中 |
|:- |:-:| -:| - |
| 普通单元格 | 合并单元格 || 合并列 |
| 普通单元格 | 2×2 单元格 ||^|
| 普通单元格 | ^ || 普通单元格 |
```

预览：

| 左对齐 | 居中 | 右对齐 | 居中 |
|:- |:-:| -:| - |
| 普通单元格 | 合并单元格 || 合并列 |
| 普通单元格 | 2×2 单元格 ||^|
| 普通单元格 | ^ || 普通单元格 |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

预览：

:wink: :cry: :laughing: :yum:

[Emoji 速查表](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### 内联元素属性扩展

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

预览：

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**重要**{.colorful}内容
```

预览：

**重要**{.colorful}内容

```markdown
_多个_{.red .big}类名
```

预览

*多个*{.red .big}类名

```markdown
**自定义属性**{key="This is a value"}
```

预览

**自定义属性**{key="This is a value"}