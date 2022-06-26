import * as React from 'react';

type Values<T> = T[keyof T];

type ObtainHTMLProps<T extends Values<JSX.IntrinsicElements>> =
  T extends React.DetailedHTMLProps<infer Props, HTMLElement> ? Props : never;

type ReactWhatsappProps = Values<{
  [Tag in keyof JSX.IntrinsicElements]: {
    element: Tag;
    number: string;
    message?: string;
  } & ObtainHTMLProps<JSX.IntrinsicElements[Tag]>;
}>;

export default class ReactWhatsapp extends React.Component<ReactWhatsappProps> {}
