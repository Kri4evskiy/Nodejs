import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import './index.css'

import App from './App'
import theme from './themes'
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>        
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
