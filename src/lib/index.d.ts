import * as React from 'react';

export interface ReactWhatsappProps {
  number: string;
  message?: string;
  element?: string | React.ReactElement<any>;
}

export default class ReactWhatsapp extends React.Component<
  ReactWhatsappProps
> {}
