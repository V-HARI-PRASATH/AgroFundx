import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from 'redux-persist/es/persistStore';

const initState={
  username:"",
  user:{},
  trainer:{},
  client:{}
}
const myreducer=(state=initState,action)=>{
  if(action.type=="setUsername")
  {
    console.log(action);
    return{
      ...state,username:action.username
    }
  }
  else if(action.type=="setUser")
  {
    console.log(action);
    return{
      ...state,user:action.user
    }
  }
  else if(action.type=="setTrainer")
  {
    console.log(action);
    return{
      ...state,trainer:action.trainer
    }
  }
  else if(action.type=="setClient")
  {
    console.log(action);
    return{
      ...state,client:action.client
    }
  }
  return state;
}
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer=persistReducer(persistConfig,myreducer);
const store=createStore(persistedReducer);
const persistor= persistStore(store);
export { store, persistor };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
