# dom-styler
A simple tool to apply styles to dom-elements.

## Usage
```
import style from 'dom-styler';
const el = window.querySelector('#some-element');

const rollbackColor = style(el, 'color', 'white'); // apply a style
style(el, rollback); // revert the changes

// apply multiple styles
const rollbackStyles = style(el, {
  'background-color': 'green', //backgroundColor works aswell
  color: 'white'
});

// revert the changes
style(el, rollbackStyles);
```