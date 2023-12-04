import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWraper } from './context/auth.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviderWraper>
    <Router>

      {/*<React.StrictMode>*/}
      <App />
      {/* </React.StrictMode>, */}

        <App />

    </Router>
  </AuthProviderWraper>
)
