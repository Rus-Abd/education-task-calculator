import React, { useState, useEffect } from 'react';
import Calculator from '@utils/simpleCalculate';
import { setToLS } from '@utils/storage';
import handleClick from './handleClick';
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

const calculator = new Calculator();
export default function SimpleKeypad({
  setDisplayVal,
  setHistory,
  history,
  theme,
}) {
  const [currentVal, setCurrentVal] = useState(() => calculator.value);
  const [operand, setOperand] = useState(null);

  useEffect(() => {
    setDisplayVal(currentVal);
    setToLS('history', history);
  }, [currentVal, setDisplayVal, history]);

  useEffect(
    () => () => {
      setOperand(null);
      calculator.reset();
    },
    [],
  );

  return (
    <Container
      onClick={(e) =>
        handleClick(
          e,
          calculator,
          operand,
          setOperand,
          currentVal,
          setCurrentVal,
          setDisplayVal,
          setHistory,
          history,
        )
      }>
      {calculatorValues.map((el) => (
        <Button
          key={el}
          color={theme.bodyText}
          backGround={theme.background}
          data-cy={`button${el}`}>
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
