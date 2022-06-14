import React, { Component } from 'react';

import calculate from '../../utils/calculate';
import { setToLS } from '../../utils/storage';

import { Container, Button } from './styled';
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

export default class KeypadCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [],
    };
  }

  componentDidMount() {
    const { stack } = this.state;
    const { setDisplayVal } = this.props;
    setDisplayVal({ displayVal: stack.join('') });
  }

  componentDidUpdate(prevProps, prevState) {
    const { stack } = this.state;
    const { setDisplayVal } = this.props;
    if (prevState.stack !== stack) {
      setDisplayVal({ displayVal: stack.join('') });
    }
  }

  componentWillUnmount() {
    const { history } = this.props;
    setToLS('history', history);
  }

  handleClick(e) {
    const { stack, setState } = this.state;
    const { setHistory, setDisplayVal, history } = this.props;
    const value = e.target.innerText;
    if (e.target.tagName === 'BUTTON') {
      switch (value) {
        case '=':
          try {
            setDisplayVal({ displayVal: calculate(stack.join('')) });
            setHistory({ history: history.concat(stack.join('')) });
          } catch (error) {
            throw Error(error);
          }
          break;
        case 'CE':
          this.setState({
            stack: stack.filter((el, index) => index !== stack.length - 1),
          });
          setDisplayVal({ displayVal: stack.join('') });
          break;
        case 'C':
          this.setState({ stack: stack.filter((el) => false) });
          setDisplayVal({ displayVal: stack.join('') });
          break;
        default:
          if (stack.length < 13) {
            this.setState({ stack: stack.concat(value) });
            setDisplayVal({ displayVal: stack.join('') });
          }
      }
    }
  }

  render() {
    const { theme } = this.props;

    return (
      <Container onClick={(e) => this.handleClick(e)}>
        {calculatorValues.map((el) => (
          <Button key={el} color={theme.bodyText} backGround={theme.background}>
            {el}
          </Button>
        ))}
      </Container>
    );
  }
}

KeypadCC.propTypes = types;
KeypadCC.defaultProps = {
  history: [],
};
