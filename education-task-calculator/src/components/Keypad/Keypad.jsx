import React, { useContext, useEffect, useState } from 'react';
import { calculate } from '../../utils/calculate';
import { setToLS } from '../../utils/storage';
import './keypad.css';
import styled from 'styled-components';
import themeContext from '../../utils/themeContext';

const Button = styled.button`
  width: 150px;
  height: 150px;
  background: ${(theme) => theme.color} 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 64px;
  letter-spacing: 0px;
  color: ${(theme) => theme.color};
  cursor: pointer;
  @media screen and (max-width: 1900px) {
    width: 100px;
    height: 100px;
    font-size: 44px;
  }
`;

export const KeyPad = ({ setDisplayVal, setHistory, history }) => {
  const { theme } = useContext(themeContext);
  console.log(theme);
  const [stack, setStack] = useState([]);
  const handleClick = (e) => {
    const value = e.target.innerHTML;
    if (value === '=') {
      try {
        setDisplayVal(calculate(stack.join('')));
        setHistory(history.concat(stack.join('')));
        setToLS('history', history);
      } catch (error) {
        console.log(error);
      }
    } else if (value === 'CE') {
      setStack(
        stack.filter((el, index) => {
          return index !== stack.length - 1;
        }),
      );
    } else if (value === 'C') {
      setStack(
        stack.filter((el, index) => {
          return index === stack.length;
        }),
      );
      setDisplayVal(stack.join(''));
    } else if (e.target.tagName === 'BUTTON') {
      setStack(stack.concat(value));
      setDisplayVal(stack.join(''));
    }
  };
  useEffect(() => {
    setDisplayVal(stack.join(''));
    setToLS('history', history);
  }, [history, setDisplayVal, stack]);
  useEffect(() => {
    return () => {
      setToLS('history', history);
    };
  });

  return (
    <div className="keypad" onClick={(e) => handleClick(e)}>
      <Button className="button" color={theme}>
        C
      </Button>
      <Button className="button" color={theme}>
        7
      </Button>
      <Button className="button" color={theme}>
        8
      </Button>
      <Button className="button" color={theme}>
        9
      </Button>
      <Button className="button" color={theme}>
        *
      </Button>
      <Button className="button" color={theme}>
        -
      </Button>
      <Button className="button" color={theme}>
        4
      </Button>
      <Button className="button" color={theme}>
        5
      </Button>
      <Button className="button" color={theme}>
        6
      </Button>
      <Button className="button" color={theme}>
        /
      </Button>
      <Button className="button" color={theme}>
        +
      </Button>
      <Button className="button" color={theme}>
        1
      </Button>
      <Button className="button" color={theme}>
        2
      </Button>
      <Button className="button" color={theme}>
        3
      </Button>
      <Button className="button" color={theme}>
        =
      </Button>
      <Button className="button" color={theme}>
        .
      </Button>
      <Button className="button" color={theme}>
        (
      </Button>
      <Button className="button" color={theme}>
        0
      </Button>
      <Button className="button" color={theme}>
        )
      </Button>
      <Button className="button" color={theme}>
        CE
      </Button>
    </div>
  );
};
