import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// extarnal component
import HelloComponent from './component/HelloComponent';

// funcrion componet
// function HelloComponent() {
//   return <h1>hello</h1>
// }

// class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>react</h1>
//   }
// }
ReactDOM.render(<HelloComponent/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
