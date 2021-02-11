import React from 'react';
import PropTypes from 'prop-types';

const URL = 'https://wa.me';

const ReactWhatsapp = ({ number, message, element, onClick, ...props }) => {
  const Element = element;

  number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}/${number}`;

  if (message) {
    url += `?text=${encodeURI(message)}`;
  }

  return (
    <Element
      onClick={(e) => {
        window.open(url);

        if (onClick) {
          onClick(e);
        }
      }}
      {...props}
    />
  );
};

ReactWhatsapp.propTypes = {
  number: PropTypes.string.isRequired,
  message: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ReactWhatsapp.defaultProps = {
  element: 'button',
};

export default ReactWhatsapp;
