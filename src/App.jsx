import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Color from './components/Color'
import Ourcoures from './components/Ourcoures'
import Faculty from './components/Faculty'
import Contact from './components/Contact'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='ourcoures' element={<Ourcoures/>} />
        <Route path='faculty' element={<Faculty/>} />
        <Route path='color' element={<Color/>} />

       
      </Route>
    </Routes>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
