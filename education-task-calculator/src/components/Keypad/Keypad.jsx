import React, { useEffect, useState } from 'react';

import calculate from '../../utils/calculate';
import { setToLS } from '../../utils/storage';

import { Container, Button } from './styles';
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
  '(',
  0,
  ')',
  'CE',
];
export default function KeyPad({ setDisplayVal, setHistory, history, theme }) {
  const [stack, setStack] = useState([]);

  const handleClick = (e) => {
    const value = e.target.innerText;
    if (e.target.tagName === 'BUTTON') {
      switch (value) {
        case '=':
          try {
            setDisplayVal(calculate(stack.join('')));
            setHistory(history.concat(stack.join('')));
          } catch (error) {
            throw Error(error);
          }
          break;
        case 'CE':
          setStack(stack.filter((el, index) => index !== stack.length - 1));
          break;
        case 'C':
          setStack(stack.filter((el) => false));
          setDisplayVal(stack.join(''));
          break;
        default:
          setStack(stack.concat(value));
          setDisplayVal(stack.join(''));
      }
    }
  };
  useEffect(() => {
    setDisplayVal(stack.join(''));
  }, [setDisplayVal, stack]);
  useEffect(() => () => {
    setToLS('history', history);
  });

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

KeyPad.propTypes = types;
KeyPad.defaultProps = {
  history: [],
};
