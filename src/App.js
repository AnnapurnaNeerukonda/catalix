import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Analytics from './components/Analytics'
import Activities from './components/Activities'
import Transformation from './components/Transformation'
import Library from './components/Library'
import Settings from './components/Settings'
import Logout from './components/Logout'
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <div className='d-flex'>
        <div className='col-md-2'>
          <Sidebar />
        </div>
        <div className='col-md-10 pt-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/activities' element={<Activities />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/transformation' element={<Transformation />} />
            <Route path='/library' element={<Library />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
