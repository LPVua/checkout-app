import * as React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import { Button } from '.';

describe('Button', () => {
  afterEach(cleanup)
 
  it('should pass click event to event handler', () => {
    const onClickSpy = jest.fn();
    const { getByText } = render(<Button onClick={onClickSpy} >Click me!</Button>)
    
    fireEvent.click(getByText('Click me!'));
    expect(onClickSpy).toHaveBeenCalledTimes(1)
  });

  it('should not trigger click event if button is disabled', () => {
    const onClickSpy = jest.fn();
    const { getByText } = render(<Button onClick={onClickSpy} isDisabled>Click me!</Button>)
    
    fireEvent.click(getByText('Click me!'));
    expect(onClickSpy).not.toHaveBeenCalled()
  });
});
