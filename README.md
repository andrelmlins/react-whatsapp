# React Whatsapp

[![npm version](https://badge.fury.io/js/react-whatsapp.svg)](https://www.npmjs.com/package/react-whatsapp) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/react-whatsapp/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/react-whatsapp.svg?branch=master)](https://travis-ci.com/andrelmlins/react-whatsapp) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/aedabb99-7094-4894-8063-7dad39afc83d/deploy-status)](https://app.netlify.com/sites/react-whatsapp/deploys)

React component for whatsapp click to chat

## Installation

```
npm i react-whatsapp
// OR
yarn add react-whatsapp
```

## Demo [Link](https://react-whatsapp.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/react-whatsapp.git
cd react-whatsapp
npm install && npm run start
```

## Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

const App = () => (
  <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
);

render(<App />, document.getElementById('root'));
```

## Properties

| Prop    | Default | Type    | Description                                           |
| ------- | ------- | ------- | ----------------------------------------------------- |
| number  | --      | string  | Phone number                                          |
| message | --      | string  | Message for chat                                      |
| element | button  | element | Either a string to use a HTML element or a component. |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/react-whatsapp.png)](https://nodei.co/npm/react-whatsapp/)

## License

React Whatsapp is open source software [licensed as MIT](https://github.com/andrelmlins/react-whatsapp/blob/master/LICENSE).
