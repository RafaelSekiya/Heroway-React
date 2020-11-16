import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

const rootElement = document.getElementById('root');

// rootElement.innerText = "NOSSA APP";
// props = properties
// não pode usar class pq é exclusivo do JS , portanto use className
// () parenteses para escrever o html no return



ReactDOM.render(<App />, rootElement);
