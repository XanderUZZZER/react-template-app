import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function ThemeProvider({ children }) {
  const { value } = useSelector(state => state.theme)

  console.log(value);
  const updateCSSVariables = theme => {
    console.log('inside update ', theme);
    theme = '.' + theme
    let vars = Array.from(document.styleSheets)
      .filter(
        sheet =>
          sheet.href === null || sheet.href.startsWith(window.location.origin)
      )
      .reduce(
        (acc, sheet) =>
        (acc = [
          ...acc,
          ...Array.from(sheet.cssRules).reduce(
            (def, rule) =>
            (def =
              rule.selectorText === theme
                ? [
                  ...def,
                  ...Array.from(rule.style).filter(name =>
                    name.startsWith("--")
                  ),

                ]
                : def),
            []
          )
        ]),
        []
      );
    const arrayOfVariableKeys = Object.keys(vars);
    const arrayOfVariableValues = Object.values(vars);
    const bodyStyles = window.getComputedStyle(document.body);
    const varValues = arrayOfVariableValues.map(cssVar => bodyStyles.getPropertyValue(cssVar))

    //Loop through each array key and set the CSS Variables
    // arrayOfVariableKeys.forEach((cssVariableKey, index) => {
    //   //Based on our snippet from MDN
    //   document.documentElement.style.setProperty(
    //     cssVariableKey,
    //     arrayOfVariableValues[index]
    //   );
    // });
    arrayOfVariableKeys.forEach(item => document.body.style.setProperty(arrayOfVariableValues[item], varValues[item])//set
    )
  };

  useEffect(() => {
    console.log('inside useeffect val var', value);
    updateCSSVariables(value);
  }, [value])

  return <>{children}</>
}

export default ThemeProvider