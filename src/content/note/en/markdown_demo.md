---
title: Markdown Demo
timestamp: 2025-11-22 18:57:15+08:00
tags: [Markdown]
description: Demonstrate the Markdown features used on this site and their rendering effects
toc: true
draft: false
---

.red { color: #ef4444; font-weight: 600; } .big { font-size: 1.25em; font-weight: bold; } .colorful { font-weight: bold; background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3); background-size: 200% auto; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: rainbow 3s linear infinite; } @keyframes rainbow { 0% { background-position: 0 center; } 100% { background-position: 200% center; } }

## Basic Markdown syntax

Markdown is a lightweight and easy-to-use syntax for styling your writing.

### Headings

When there is a lot of content in an article, you can use headings to divide it:

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

Title preview will disrupt the structure of the article, so it is not displayed here.

### Bold Italic

```markdown
*Italic Text*

**Bold text**

***Italic bold text***
```

Preview:

*Italic Text*

**Bold text**

***Italic bold text***

### Link

```markdown
Text link [Link name](https://feli77.com)
```

Preview:

Text link [Link name](https://feli77.com)

### Inline code

```markdown
This is a `inline code`
```

Preview:

This is a `inline code`

### Code block

````markdown
```js
// calculate fibonacci
function fibonacci(n) {
	if (n <= 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
````

````

预览：

```js
// calculate fibonacci
function fibonacci(n) {
	if (n <= 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
````

Currently using shiki as the code highlight plugin, supported languages can be referred to at [shiki / languages](https://shiki.matsu.io/languages.html).

### Inline formula

```latex
This is an inline formula $e^{i\pi} + 1 = 0$
```

Preview:

This is an inline formula $e^{i\pi} + 1 = 0$

### Formula block

```latex
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

Preview:

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

Currently using KaTeX as the mathematical formula plugin, please refer to [KaTeX Supported Functions](https://katex.org/docs/supported.html) for supported syntax.

### Image

```markdown
![Pink Floyd](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)
```

Preview:

![](https://www.helloimg.com/i/2025/11/22/69219d393cdb1.jpg)

### Strikethrough

```markdown
~~Strikethrough~~
```

Preview:

~~Strikethrough~~

### Separator

If you are in the habit of writing separators, you can start a new line and input three dashes `---` or asterisks `***`. When there are paragraphs before and after, please leave a blank line:

```markdown
---
```

Preview:

* * *

### List

Bulleted list

```markdown
*   Psychedelic rock
*   Punk
*   Metal
    *   Heavy Metal
    *   Death Metal
```

Preview:

*   Psychedelic rock
*   Punk
*   Metal
    *   Heavy Metal
    *   Death Metal

Plain ordered list

```markdown
1. The Dark Side of the Moon
    1. Time
    2. Money
2. The Wall
3. Wish You Were Here
```

Preview:

1.  The Dark Side of the Moon
    1.  Time
    2.  Money
2.  The Wall
3.  Wish You Were Here

The list can continue to nest syntax

### Notes

```markdown
Use [^1] to add notes where referenced.

Then, add the note content at the end of the document (it will be rendered by default at the end of the article).

[^1]: This is the note content.

Can also use inline comments^[Here is the content of the inline comment] 

```

Preview:

Use [^1] to add notes where referenced.

Then, add the note content at the end of the document (it will be rendered by default at the end of the article).

[^1]: This is the note content.

Can also use inline comments^[Here is the content of the inline comment]

### To-Do list

```markdown
- [ ] Unfinished tasks
- [x] Completed Tasks
```

Preview:

- [ ] Unfinished tasks
- [x] Completed Tasks

### Citations

```markdown
> No one told you when to run
> You missed the starting gun.
```

Preview:

> No one told you when to run
> You missed the starting gun.

Nested syntax can also continue within quotes.

## Extended features

### Insert

```
++Insert Content++
```

Preview:

++Insert Content++

## Mark

```
==Marked Content==
```

Preview:

==Marked Content==

## Ruby

```
{拼音}(pīn|yīn)
```

Preview:

{拼音}(pīn|yīn)

```
{振り仮名}(ふ||が|な)
```

Preview:

{振り仮名}(ふ||が|な)

### Mask

```
!!Masked Content!!
```

Preview:

!!Masked Content!!

### GitHub Alert

```markdown
> [!NOTE]
> Normal info
```

Preview:

> \[!NOTE\] 
> Normal information

Tip information can be nested multiple levels

```markdown
> [!TIP]
> Tip info
>
> > [!IMPORTANT]
> > Important Info
> >
> > > [!WARNING]
> > > Risk Info
> > >
> > > > [!CAUTION]
> > > > Caution Info
```

Preview:

> [!TIP]
> Tip info
>
> > [!IMPORTANT]
> > Important Info
> >
> > > [!WARNING]
> > > Risk Info
> > >
> > > > [!CAUTION]
> > > > Caution Info

You can also customize the title

```markdown
> [!NOTE] (･ρ･)ﾉ
> Custom title text
```

Preview:

> [!NOTE] (･ρ･)ﾉ
> Custom title text

### Enhance table

```markdown
| Left-aligned | Centered | Right-aligned | Centered |
| --- | --- | --- | --- |
| Normal cell | Merged cell |  | Merge columns |
| Normal cell | 2x2 Cell |  | ^ |
| Regular Cell | ^ |  | Regular Cell |
```

Preview:

| Left-aligned | Centered | Right-aligned | Centered |
| --- | --- | --- | --- |
| Normal cell | Merged cell |  | Merge columns |
| Normal cell | 2x2 Cell |  | ^ |
| Regular Cell | ^ |  | Regular Cell |

### Emoji

```markdown
:wink: :cry: :laughing: :yum:
```

Preview:

:wink: :cry: :laughing: :yum:

[Emoji Quick Reference](https://github.com/ikatyang/emoji-cheat-sheet?tab=readme-ov-file#table-of-contents)

### Inline Element Attribute Extensions

```markdown
![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}
```

Preview:

![The Wall](https://www.helloimg.com/i/2025/11/24/69246b46b2859.png){width=300}

```markdown
**Important**{.colorful} content
```

Preview:

**Important**{.colorful} content

```markdown
_Multiple_{.red .big} class names
```

Preview

*Multiple*{.red .big} class names

```markdown
**Custom attributes**{key="This is a value"}
```

Preview

**Custom attributes**{key="This is a value"}

## Footnotes