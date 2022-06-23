export default function calculate(eq, callback) {
  function handleCallback(errObject, result) {
    if (typeof callback !== 'function') {
      if (errObject !== null) throw errObject;
    } else {
      callback(errObject, result);
    }
    return parseFloat(result.toFixed(3));
  }

  if (typeof eq !== 'string') {
    return handleCallback(
      new TypeError('The [String] argument is expected.'),
      null,
    );
  }
  const mulDiv =
    /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
  const plusMin =
    /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
  const parentheses = /(\d)?\s*\(([^()]*)\)\s*/;
  let current;
  let equation = eq;
  while (equation.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/) === -1) {
    equation = fParentheses(equation);
    if (equation === current) {
      return handleCallback(new SyntaxError('The equation is invalid.'), null);
    }
    current = equation;
  }
  return handleCallback(null, +equation);

  function fParentheses(str) {
    let eqWithParanth = str;
    while (eqWithParanth.search(parentheses) !== -1) {
      eqWithParanth = eqWithParanth.replace(parentheses, (a, b, c) => {
        let temp = fMulDiv(c);
        temp = fPlusMin(c);
        return typeof b === 'string' ? `${b}*${temp}` : temp;
      });
    }
    eqWithParanth = fMulDiv(eqWithParanth);
    eqWithParanth = fPlusMin(eqWithParanth);
    return eqWithParanth;
  }

  function fMulDiv(str) {
    let val = str;
    while (val.search(mulDiv) !== -1) {
      val = val.replace(mulDiv, (a) => {
        const sides = mulDiv.exec(a);
        const result =
          sides[2] === '*' ? sides[1] * sides[3] : sides[1] / sides[3];
        return result >= 0 ? `+${result}` : result;
      });
    }
    return val;
  }

  function fPlusMin(str) {
    let res = str.replace(
      /([+-])([+-])(\d|\.)/g,
      (a, b, c, d) => (b === c ? '+' : '-') + d,
    );
    while (res.search(plusMin) !== -1) {
      res = res.replace(plusMin, (a) => {
        const sides = plusMin.exec(a);
        return sides[2] === '+' ? +sides[1] + +sides[3] : sides[1] - sides[3];
      });
    }
    return res;
  }
}
