
import {Route,Routes} from 'react-router-dom'

import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Lowerfoot from './Pages/Footers/Lowerfoot'
import Internship from './Pages/Internship /Internship'
import Contact from './Pages/Contact/Contact'
import Affiliation from './Pages/affiliation/Affiliation'
import Academic from './Pages/academic /Academic'
import About from './Pages/aboutdlihe/About'
import Admission from './Pages/Admission/Admission'
import {Schopage}  from './Pages/Scholarship/Schopage'
import Announce from './Pages/Announce/Announce'
import Student from './Pages/StudentCouncil/Student'


import './App.css'



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/student' element={<Student/>}/>
        <Route path='/announcement' element={<Announce/>}/>
        <Route path='/intern' element={<Internship/>}/> 
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/affiliation' element={<Affiliation/>}/>
        <Route path='/academic' element={<Academic/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/scholarship' element={<Schopage/>}/>
        <Route path='/student' elemen={<Student/>}t/>
      </Routes>
      <Lowerfoot/>
    </div>
  )
}

export default App
