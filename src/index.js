import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: '1', message: 'Hi, how are you?', likeCount: '12'}, 
  {id: '2', message: 'It is my first post', likeCount: '15'} 
]

let dialogsData = [
  {id: '1', name: 'Dima'}, 
  {id: '2', name: 'Alena'}, 
  {id: '3', name: 'Mikl'}, 
  {id: '4', name: 'John'}
]

let messagesData = [
  {id: '1', text: 'Hi'}, 
  {id: '2', text: 'How is your day?'}, 
  {id: '3', text: 'How is your vacation?'},
  {id: '4', text: 'Have a nice day'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} 
      dialogsData={dialogsData} 
      messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
