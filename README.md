#css html hint 
*based on [hint.css](https://github.com/chinchang/hint.css) with html content support*

The main disadvantage of [hint.css](https://github.com/chinchang/hint.css) is it's inability to show html content inside hint.
This css library extends [hint.css](https://github.com/chinchang/hint.css) with html hints.

###Example
See [example](http://istarkov.github.io/html-hint/)

###How to
To create HTML hint, download any css from [dist folder](https://github.com/istarkov/html-hint/tree/master/dist),
Create hint as in [hint.css documentation](https://github.com/chinchang/hint.css), add `hint--html` class,
add `div` (*or other*) tag with `hint__content` class
*example*
```html
 I'm a
<span class="hint hint--html hint--right" style="color: #0099FF">
  hint right
  <div class="hint__content"> <!--your html hint content goes here-->
    <div style="width: 140px; margin: 5px">
      I'm a <strong>hint html content</strong>
    </div>
    <div>
      <img style="width: 20px;height:20px" src="GitHub-Mark-64px.png">
    </div>
  </div>
</span>
```

##Build
```bash
npm install
#create dist/html-hint.css
npm run build 
#create dist/html-hint.min.css
npm run min
```

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
