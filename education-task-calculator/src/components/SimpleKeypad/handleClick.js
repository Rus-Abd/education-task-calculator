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

  if (e.target.tagName === 'BUTTON' && operand === null) {
    switch (value) {
      case '+':
        setOperand('add');
        calculator.value = currentVal;
        break;

      case '-':
        setOperand('subtract');
        calculator.value = currentVal;
        break;

      case '*':
        setOperand('multiply');
        calculator.value = currentVal;
        break;

      case '/':
        setOperand('divide');
        calculator.value = currentVal;
        break;

      case '%':
        setOperand('percent');
        calculator.value = currentVal;
        break;

      case '+/-':
        setCurrentVal(currentVal * -1);
        setDisplayVal(currentVal);
        break;

      case '=':
        try {
          setDisplayVal(calculator.value);
          setHistory(history.concat(calculator.value));
        } catch (error) {
          throw Error(error);
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
        setCurrentVal(`${currentVal}${value}`);
        setDisplayVal(currentVal);
        break;

      default:
        setCurrentVal(parseFloat(`${currentVal}${value}`));
        setDisplayVal(currentVal);
    }
  } else if (e.target.tagName === 'BUTTON' && operand !== null) {
    switch (value) {
      case '+':
        setOperand('add');
        break;

      case '-':
        setOperand('subtract');
        break;

      case '*':
        setOperand('multiply');
        break;

      case '/':
        setOperand('divide');
        break;

      case '%':
        setOperand('percent');
        break;

      case '+/-':
        calculator.secondvalue *= -1;
        setDisplayVal(calculator.secondvalue);
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
        calculator.secondvalue = `${calculator.secondvalue}${value}`;

        setCurrentVal(calculator.secondvalue);
        setDisplayVal(calculator.secondvalue);
        break;
      case '=':
        setHistory(
          history.concat(
            `${calculator.value} ${nameToSymbol(operand)} ${
              calculator.secondvalue
            } `,
          ),
        );
        calculator.executeCommand(operation(operand, calculator.secondvalue));
        setCurrentVal(calculator.value);
        setDisplayVal(calculator.value);
        setOperand(null);

        calculator.secondvalue = 0;
        break;

      default:
        calculator.secondvalue = parseFloat(
          `${calculator.secondvalue}${value}`,
        );
        setCurrentVal(calculator.secondvalue);
        setDisplayVal(calculator.secondvalue);

        break;
    }
  }
};
export default handleClick;
