import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Education, Testing, HrPage } from './pages'

import './fonts.css'
import Layout from './layout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/hr" element={<HrPage />} />
      </Route>
    </Routes>
  )
}

export default App
