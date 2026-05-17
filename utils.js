export function getRootCssStyles(rootRule = ":root") {
  const cssRulesArray = [...document.styleSheets].map((styleSheet) => {
    try {
      return [...styleSheet.cssRules].map((rule) => rule);
    } catch (e) {
      return [];
    }
  });

  let cssVars = [];
  Object.values(cssRulesArray).forEach((arrayElement) => {
    Object.values(arrayElement).forEach((ruleElement) => {
      if (ruleElement.selectorText === rootRule) {
        Object.values(ruleElement.style).forEach((style) => {
          if (style.startsWith("--spine-") && cssVars.indexOf(style) === -1) {
            cssVars.push(style);
          }
        });
      }
    });
  });

  return cssVars;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getAngleInRadians(value) {
  return (parseFloat(value) * Math.PI) / 180;
}
