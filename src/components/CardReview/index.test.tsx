import * as React from 'react'
import {render, cleanup} from '@testing-library/react';
import { CardReview } from '.';

describe('CardReview', () => {
  afterEach(cleanup);

  it('should render proper markup', () => {
    const { asFragment } = render(<CardReview rating={2} description="some description" title="some title" subtitle="some subtitle" />)
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should render proper markup with extra class', () => {
    const { asFragment } = render(<CardReview rating={2} description="some description" title="some title" subtitle="some subtitle" className="some-class"/>)
    
    expect(asFragment()).toMatchSnapshot();
  })
});
