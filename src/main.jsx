import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
