import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Lap from './pages/lap/Lap';
import Main from './pages/main/Main'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function data(num) {
    // console.log(data)
    console.log(num.name,num.type,num.price)
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Main/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
