import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store.js'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Provider store={store}>


      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

  </BrowserRouter>
  ,
)
