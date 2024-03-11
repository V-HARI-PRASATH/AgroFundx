import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import storage from "redux-persist/lib/storage";
import persistStore from 'redux-persist/es/persistStore';
import { createStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import { Provider } from 'react-redux';


const initState={
  username:null,
  roles:null,
  id:null,
}
const myreducer=(state=initState,action)=>{
  if(action.type=="setUsername")
  {
    console.log(action);
    return{
      ...state,username:action.username
    }
  }
  else if(action.type=="setRoles")
  {
    console.log(action);
    return{
      ...state,roles:action.roles
    }
  }
  else if(action.type=="setId")
  {
    console.log(action);
    return{
      ...state,id:action.id
    }
  }  return state;
}
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer=persistReducer(persistConfig,myreducer);
const store=createStore(persistedReducer);
const persistor= persistStore(store);
export { store, persistor };
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
