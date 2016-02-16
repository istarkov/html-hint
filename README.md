## HTML HINT

*based on [hint.css](https://github.com/chinchang/hint.css) with html content support*

The main disadvantage of [hint.css](https://github.com/chinchang/hint.css) is it's inability to show html content inside hint.
This css library extends [hint.css](https://github.com/chinchang/hint.css) with html hints.

#### Example

[Base, click to view](http://istarkov.github.io/html-hint/#exampleMain)

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

[Base, click to view](http://istarkov.github.io/html-hint/#exampleMain)

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

[Hoverable example, click to view](http://istarkov.github.io/html-hint/#exampleHoverable)

Sometimes you need to set hover by yourself.

Using `hint--always` class you will make tooltip always visible,
using `hint--hidden` you will prevent tooltip to show.

(_both hint--always and hint--hidden will hide tooltip on hover_)

#### hint--always example

[Always example, click to view](http://istarkov.github.io/html-hint/#exampleAlways)

### Contribute

```bash
npm install
npm run start
# open http://localhost:4000 and you will get hot reloadable env
```

### License

MIT (http://www.opensource.org/licenses/mit-license.php)
