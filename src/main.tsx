import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter basename="portfolio-app">
  <HashRouter basename="portfolio-app">
    <App />
  </HashRouter>,
  // </BrowserRouter>,
)
