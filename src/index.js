import toCamelCase from 'to-camel-case';

const transforms = {
  'float': 'cssFloat',
};

function transformProperty(property) {
  let result = toCamelCase(property);
  result = transforms[result] || result;
  return result;
}

function one(element, name, value) {
  let property = transformProperty(name);
  let rollback = element.style[property];

  element.style[property] = value;
  return rollback;
}

function all(element, css) {
  let rollback = {};

  Object
    .keys(css)
    .forEach((key) => {
      rollback[key] = one(element, key, css[key]);
    });

  return rollback;
}

/**
 * examples:
 * style(body, 'background', 'maroon')
 * style(body, {background: 'maroon', color: 'white'})
 */
function style(element) {
  if (arguments.length === 3) {
    let rollback = one(element, arguments[1], arguments[2]);
    return {
      [arguments[1]]: rollback
    };
  }

  return all(element, arguments[1]);
}

export default style;
