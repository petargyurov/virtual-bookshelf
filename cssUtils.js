// Get all CSS rules for the document using Array methods
export function getAllCssRules() {
    const allCSS = [...document.styleSheets]
        .map(styleSheet => {
            try {
                return [...styleSheet.cssRules]
                    .map(rule => rule)
            } catch (e) {
                console.log('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
            }
        })

    return allCSS;
}

// Get custom styles from root css rule 
export function getRootCssStyles(cssRulesArray, rootRule = ":root") {
    var cssVars = [];

    Object.values(cssRulesArray).forEach(arrayElement => {
        Object.values(arrayElement).forEach(ruleElement => {
            if (ruleElement.selectorText === rootRule) {
                Object.values(ruleElement.style).forEach(style => {
                    if (style.startsWith('--') && cssVars.indexOf(style) == -1) {
                        cssVars.push(style);
                    }
                })
            }
        })
    })

    return cssVars;
}
