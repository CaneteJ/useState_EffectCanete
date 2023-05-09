import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Homepage from './component/homepage'
import Login from './component/Login'
import Navigation from './component/navBar'
import Registration from './component/Registration'
import 'bootstrap/dist/css/bootstrap.css'
import Contact from './component/contact'


function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
        <Route index element = {<Homepage />} />
        <Route path= "homepage" element ={<Homepage />} />
        <Route path = "Login" element ={<Login/>}/>
        <Route path = "registration" element ={<Registration/>}/>
        <Route path = "Contact" element ={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
   