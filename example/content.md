---:part1

### HINT HTML

Based on great [hint-css](https://github.com/chinchang/hint.css),
but allows to create html hoverable tooltips.

### Install

```bash
npm install --save html-hint
```

### Usage

```html
<div class="hint--html hint--top">
  Place here any element
  <div class="hint__content">
    Place here your tooltip HTML content
  <div>
</div>
```

If you are prefer to use css-modules you can use composes

```html
<div class={styles.myClass}>
  Place here any element
  <div class={styles.myTooltip}>
    Place here your tooltip HTML content
  <div>
</div>
```

```scss
@import 'html-hint'

.myClass
  composes: hint--html
  composes: hint--top
  composes: hint--info
  cursor: pointer

.myTooltip
  composes: hint__content
```

There are different placement options
- `hint--top-left`, `hint--top`, `hint--top-right`;
- `hint--left`, `hint--right`,
- `hint--bottom-left`, `hint--bottom`, `hint--bottom-right`,

And different type options
- `hint--warning`, `hint--error`, `hint--info`, `hint--success`

(_To change color you can also use mixin_)

```scss
.myClass
  composes: hint--html
  composes: hint--top
  @include hint-color(yellow)
  cursor: pointer
```

#### Placement options example

(_Hover on any block below_)

---:part2

---

By default tootips are not hoverable, adding `hint--hoverable` class makes them hoverable.

```html
<div class="hint--html hint--top hint--hoverable">
  Place here any element
  <div class="hint__content">
    Place here your tooltip HTML content
  <div>
</div>
```

#### Hoverable example

(_Hover on any block and tooltip below_)

---:part3

---

Sometimes you need to set hover by yourself.

Using `hint--always` class you will make tooltip always visible,
using `hint--hidden` you will prevent tooltip to show.

(_both hint--always and hint--hidden will hide tooltip on hover_)

#### hint--always example
