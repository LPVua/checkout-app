import * as React from 'react'
import {render, cleanup} from '@testing-library/react';
import { Error } from '.';

describe('Error', () => {
  afterEach(cleanup);

  it('should render proper markup', () => {
    const { asFragment } = render(<Error>Message</Error>)
    
    expect(asFragment()).toMatchSnapshot();
  })
});
