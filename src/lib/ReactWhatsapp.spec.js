import React from 'react';
import {
  render,
  cleanup,
  getByLabelText,
  fireEvent
} from '@testing-library/react';

import ReactWhatsapp from './index';

afterEach(cleanup);

describe('ReactWhatsapp Component', () => {
  it('Should render the component', () => {
    const { container } = createComponent({
      number: '+1-202-555-0107',
      message: 'MESSAGE'
    });
    expect(container).toBeDefined();
  });

  it('Should render the component without message', () => {
    const { container } = createComponent({ number: '+1-202-555-0107' });
    expect(container).toBeDefined();
  });

  it('Call button with onClick', () => {
    const onClick = jest.fn();
    window.open = jest.fn();

    const { getByLabelText } = createComponent({
      number: '+1-202-555-0107',
      onClick,
      'aria-label': 'Click'
    });

    fireEvent.click(getByLabelText('Click'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledTimes(1);
  });

  it('Call button without onClick', () => {
    window.open = jest.fn();

    const { getByLabelText } = createComponent({
      number: '+1-202-555-0107',
      'aria-label': 'Click'
    });

    fireEvent.click(getByLabelText('Click'));

    expect(window.open).toHaveBeenCalledTimes(1);
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<ReactWhatsapp {...defaultProps} />);
}
