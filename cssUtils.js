export function getRootCssStyles(rootRule = ":root") {
    // Get all CSS rules for the document using Array methods
    const cssRulesArray = [...document.styleSheets]
        .map(styleSheet => {
            try {
                return [...styleSheet.cssRules]
                    .map(rule => rule)
            } catch (e) {
                // console.log('Access to stylesheet %s is denied. Ignoring...', styleSheet.href);
            }
        })

    var cssVars = [];
    // Get custom styles from root css rule 
    Object.values(cssRulesArray).forEach(arrayElement => {
        Object.values(arrayElement).forEach(ruleElement => {
            if (ruleElement.selectorText === rootRule) {
                Object.values(ruleElement.style).forEach(style => {
                    if (style.startsWith('--spine-') && cssVars.indexOf(style) == -1) {
                        cssVars.push(style);
                    }
                })
            }
        })
    })

    return cssVars;
}
