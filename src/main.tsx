import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.tsx'
import About from './pages/About.tsx'
import Cards from './pages/Cards.tsx'
import Home from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='cards' element={<Cards />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
