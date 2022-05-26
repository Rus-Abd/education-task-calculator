import React, { useEffect, useState } from 'react';
import { calculate } from '../../utils/calculate';
import { setToLS } from '../../utils/storage';
import './keypad.css';
export const Keypad = ({ setDisplayVal, setHistory, history }) => {
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
      <button className="button">C</button>
      <button className="button">7</button>
      <button className="button">8</button>
      <button className="button">9</button>
      <button className="button">*</button>
      <button className="button">-</button>
      <button className="button">4</button>
      <button className="button">5</button>
      <button className="button">6</button>
      <button className="button">/</button>
      <button className="button">+</button>
      <button className="button">1</button>
      <button className="button">2</button>
      <button className="button">3</button>
      <button className="button">=</button>
      <button className="button">.</button>
      <button className="button">(</button>
      <button className="button">0</button>
      <button className="button">)</button>
      <button className="button">CE</button>
    </div>
  );
};
