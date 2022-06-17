/* eslint-disable no-param-reassign */
import {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  PercentCommand,
} from '../../utils/simpleCalculate';

function operation(currOperation, val) {
  switch (currOperation) {
    case 'add':
      return new AddCommand(val);
    case 'subtract':
      return new SubtractCommand(val);
    case 'multiply':
      return new MultiplyCommand(val);
    case 'divide':
      return new DivideCommand(val);
    case 'percent':
      return new PercentCommand(val);
    default:
      break;
  }
}
function nameToSymbol(name) {
  switch (name) {
    case 'add':
      return '+';
    case 'subtract':
      return '-';
    case 'multiply':
      return '*';
    case 'divide':
      return '/';
    case 'percent':
      return '%';
    default:
      return 'Unknown';
  }
}
const handleClick = (
  e,
  calculator,
  operand,
  setOperand,
  currentVal,
  setCurrentVal,
  setDisplayVal,
  setHistory,
  history,
) => {
  const value = e.target.innerText;

  if (e.target.tagName === 'BUTTON') {
    switch (value) {
      case '+':
        setOperand('add');
        if (operand === null) {
          calculator.value = currentVal;
        }
        break;

      case '-':
        setOperand('subtract');
        if (operand === null) {
          calculator.value = currentVal;
        }
        break;

      case '*':
        setOperand('multiply');
        if (operand === null) {
          calculator.value = currentVal;
        }
        break;

      case '/':
        setOperand('divide');
        if (operand === null) {
          calculator.value = currentVal;
        }
        break;

      case '%':
        setOperand('percent');
        if (operand === null) {
          calculator.value = currentVal;
        }
        break;

      case '+/-':
        if (operand === null) {
          setCurrentVal(currentVal * -1);
          setDisplayVal(currentVal);
        } else {
          calculator.secondvalue *= -1;
          setDisplayVal(calculator.secondvalue);
        }
        break;

      case 'CE':
        setCurrentVal(calculator.undo());
        setDisplayVal(calculator.value);
        break;

      case 'C':
        setCurrentVal(calculator.reset());
        setDisplayVal(calculator.value);
        break;

      case '.':
        if (operand === null) {
          setCurrentVal(`${currentVal}${value}`);
          setDisplayVal(currentVal);
        } else {
          calculator.secondvalue = `${calculator.secondvalue}${value}`;
          setCurrentVal(calculator.secondvalue);
          setDisplayVal(calculator.secondvalue);
        }

        break;

      case '=':
        if (operand === null && `${calculator.value}`.length < 13) {
          try {
            setDisplayVal(calculator.value);
            setHistory(history.concat(calculator.value));
          } catch (error) {
            throw Error(error);
          }
        } else if (`${calculator.value}`.length < 13) {
          setHistory(
            history.concat(
              `${calculator.value} ${nameToSymbol(operand)} ${
                calculator.secondvalue
              }`,
            ),
          );
          calculator.executeCommand(operation(operand, calculator.secondvalue));
          setCurrentVal(calculator.value);
          setDisplayVal(calculator.value);
          setOperand(null);

          calculator.secondvalue = 0;
        }
        break;

      default:
        if (operand === null && `${currentVal}${value}`.length < 13) {
          setCurrentVal(parseFloat(`${currentVal}${value}`));
          setDisplayVal(currentVal);
        } else if (`${currentVal}${value}`.length < 13) {
          calculator.secondvalue = parseFloat(
            `${calculator.secondvalue}${value}`,
          );
          setCurrentVal(calculator.secondvalue);
          setDisplayVal(calculator.secondvalue);
        }
    }
  }
};
export default handleClick;
