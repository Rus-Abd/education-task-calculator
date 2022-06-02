import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { calculate } from '../../utils/calculate';
import { setToLS } from '../../utils/storage';
import './keypad.css';
import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  height: 150px;
  background: ${(theme) => theme.backGround} 0% 0% no-repeat padding-box;
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

export const KeyPad = ({ setDisplayVal, setHistory, history, theme }) => {
  const [stack, setStack] = useState([]);
  const handleClick = (e) => {
    const value = e.target.innerHTML;
    if (value === '=') {
      try {
        setDisplayVal(calculate(stack.join('')));
        setHistory(history.concat(stack.join('')));
      } catch (error) {}
    } else if (value === 'CE') {
      setStack(
        stack.filter((el, index) => {
          return index !== stack.length - 1;
        }),
      );
    } else if (value === 'C') {
      setStack(
        stack.filter((el) => {
          return false;
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
  }, [setDisplayVal, stack]);
  useEffect(() => {
    return () => {
      setToLS('history', history);
    };
  });

  return (
    <div className="keypad" onClick={(e) => handleClick(e)}>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        C
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        7
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        8
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        9
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        *
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        -
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        4
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        5
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        6
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        /
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        +
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        1
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        2
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        3
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        =
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        .
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        (
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        0
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        )
      </Button>
      <Button
        className="button"
        color={theme.bodyText}
        backGround={theme.background}>
        CE
      </Button>
    </div>
  );
};

KeyPad.propTypes = {
  setDisplayVal: PropTypes.func,
  setHistory: PropTypes.func,
  history: PropTypes.array,
};
