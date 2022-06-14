import React, { useState, useEffect } from 'react';
import Calculator, {
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
} from '../../utils/simpleCalculate';
import { setToLS } from '../../utils/storage';
import { Button, Container } from './styled';
import types from './types';

const calculatorValues = [
  'C',
  7,
  8,
  9,
  '*',
  '-',
  4,
  5,
  6,
  '/',
  '+',
  1,
  2,
  3,
  '=',
  '.',
  '+/-',
  0,
  '%',
  'CE',
];

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
    default:
      break;
  }
}

const calculator = new Calculator();
export default function SimpleKeypad({
  setDisplayVal,
  setHistory,
  history,
  theme,
}) {
  const [currentVal, setCurrentVal] = useState(() => calculator.getValue());
  const [operand, setOperand] = useState(null);

  const handleClick = (e) => {
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

        case '+/-':
          setCurrentVal(currentVal * -1);
          setDisplayVal(currentVal);
          break;

        case '=':
          try {
            setDisplayVal(calculator.value);
            setHistory(history.concat(calculator.getValue()));
          } catch (error) {
            throw Error(error);
          }
          break;

        case 'CE':
          setCurrentVal(calculator.undo());
          break;

        case 'C':
          setCurrentVal(calculator.reset());
          setDisplayVal(calculator.getValue());
          break;

        default:
          setCurrentVal(parseFloat(`${currentVal}${value}`));
          setDisplayVal(currentVal);
      }
    } else if (e.target.tagName === 'BUTTON' && operand !== null) {
      switch (value) {
        case '+':
          console.log(`value to add: ${calculator.secondvalue}`);
          setOperand(new AddCommand(calculator.secondvalue));
          break;

        case '-':
          console.log(`value to subtract: ${calculator.secondvalue}`);
          setOperand(new SubtractCommand(calculator.secondvalue));
          break;

        case '*':
          console.log(`value to multiply: ${calculator.secondvalue}`);
          setOperand(new MultiplyCommand(calculator.secondvalue));
          break;

        case '/':
          console.log(`value to divide: ${calculator.secondvalue}`);
          setOperand(new DivideCommand(calculator.secondvalue));
          break;

        case '+/-':
          calculator.secondvalue *= -1;
          setDisplayVal(calculator.secondvalue);
          break;
        case 'C':
          setCurrentVal(calculator.reset());
          setDisplayVal(calculator.getValue());
          break;
        case '=':
          calculator.executeCommand(operation(operand, calculator.secondvalue));
          setCurrentVal(calculator.value);
          setDisplayVal(calculator.value);
          setOperand(null);
          break;

        default:
          calculator.secondvalue = parseFloat(
            `${calculator.secondvalue}${value}`,
          );
          setCurrentVal(calculator.secondvalue);
          setDisplayVal(calculator.secondvalue);
          console.log(`AA: ${calculator.secondvalue}`);
          break;
      }
    }
  };

  // useEffect(() => {
  //   setDisplayVal(currentVal);
  // }, [currentVal, setDisplayVal]);

  useEffect(() => {
    setDisplayVal(currentVal);
    return () => setToLS('history', history);
  }, [currentVal, setDisplayVal, history]);

  return (
    <Container onClick={(e) => handleClick(e)}>
      {calculatorValues.map((el) => (
        <Button key={el} color={theme.bodyText} backGround={theme.background}>
          {el}
        </Button>
      ))}
    </Container>
  );
}

SimpleKeypad.propTypes = types;
SimpleKeypad.defaultProps = {
  history: [],
};
