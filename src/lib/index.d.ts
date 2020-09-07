import * as React from 'react';

export interface ReactWhatsappProps {
  number: string;
  message?: string;
  element?: React.ReactElement<any>;
  onClick?: any;
}

export default class ReactWhatsapp extends React.Component<
  ReactWhatsappProps
> {}
