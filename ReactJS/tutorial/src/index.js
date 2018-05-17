import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './ClassComponent';
import {FunctionalApp,HelloApp} from './FunctionalComponent/FunctionalComponent'

ReactDOM.render(<App/>,document.getElementById("root"))
ReactDOM.render(<HelloApp name='Truong'/>, document.getElementById('element'))
