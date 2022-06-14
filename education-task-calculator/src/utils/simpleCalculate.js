// eslint-disable-next-line max-classes-per-file
class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
    this.secondvalue = 0;
  }

  input(value) {
    const newVal = `${this.value}${value}`;
    this.value = parseFloat(newVal);
    return this.value;
  }

  executeCommand(command) {
    this.value = command.execute(this.value);

    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  getValue() {
    return this.value;
  }

  reset() {
    this.value = 0;
    this.secondvalue = 0;
    return this.value;
  }
}

export class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

export class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

export class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

export class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}
export class percentCommand {
  constructor(valueToPercent) {
    this.valueToPercent = valueToPercent;
    this.prevValue = 0;
  }

  execute(currentValue) {
    this.prevValue = currentValue;
    return currentValue % this.valueToPercent;
  }

  undo(currentValue) {
    return this.prevValue;
  }
}
export default Calculator;
