import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Xyz from './xyz';

describe(' Xyz', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Xyz />);
    expect(baseElement).toBeTruthy();
  });
});
