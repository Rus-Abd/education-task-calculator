import React, { useEffect, useState } from 'react';
import { calculate } from '../../utils/calculate';
import './keypad.css';
export const Keypad = ({ setDisplayVal }) => {
  const [stack, setStack] = useState([]);
  const handleClick = (e) => {
    const value = e.target.innerHTML;

    if (value !== '=' && value !== 'C' && value !== 'CE') {
      setStack(stack.concat(value));
      setDisplayVal(stack.join(''));
    } else if (value === '=') {
      console.log(calculate(stack.join('')));
      setDisplayVal(calculate(stack.join('')));
    }

    // console.log(e.target.innerHTML);
    // console.log(stack);
  };
  useEffect(() => {
    setDisplayVal(stack.join(''));
  }, [setDisplayVal, stack]);
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
