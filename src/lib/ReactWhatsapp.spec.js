import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReactWhatsapp from './index';

afterEach(cleanup);

describe('ReactWhatsapp Component', () => {
  it('Should render the component', () => {
    const { container } = createComponent({ number: '+1-202-555-0107' });
    expect(container).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<ReactWhatsapp {...defaultProps} />);
}
