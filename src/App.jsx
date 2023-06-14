import Home from './pages/Home'
import Nav from './component/Nav'
import Yourpadi from './pages/Yourpadi'
import TwocanPlay from './pages/TwocanPlay'

import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/yourpadi' element={<Yourpadi />} />
        <Route path='/2canplay' element={<TwocanPlay />} />
      </Routes>
    </div>
  )
}

export default App
