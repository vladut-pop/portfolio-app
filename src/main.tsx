import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // TODO: Remove strict mode, it's also creates re-renders
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
)
