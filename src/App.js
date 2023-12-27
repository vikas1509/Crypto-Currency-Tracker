import React from 'react'
import Header from './components/Common/Header'
import MainComponent from './components/LandingPage/MainComponent'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
function App() {
  return (
 <div className='App'>
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/dashboard" element={<Dashboard/>}/>
 
</Routes>
</BrowserRouter>
 </div>
  )
}

export default App