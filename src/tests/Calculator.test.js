import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('it should subtract 4 from 7 and get -3', () => {
    const button4 = container.getByTestId('number4');
    const buttonSub = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonSub);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('-3');
  })

  it('multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiple = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiple);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('it should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('it should concatenate multiple button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217');
  })

  it('it should chain multiple operations together', () => {
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const buttonSub = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(equals);
    fireEvent.click(buttonSub);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('-2');
  })

  it('it should clear the running total without affecting the calculation', () => {
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const buttonSub = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(equals);
    fireEvent.click(buttonSub);
    fireEvent.click(button7);
    fireEvent.click(clear)
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })
})

