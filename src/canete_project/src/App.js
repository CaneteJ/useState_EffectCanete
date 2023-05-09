import { BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Homepage from './component/Homepage'
import Login from './component/Login'
import navBar from './component/navBar'
import Contact from './component/contact'
import Registration from './component/Registration'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div>
      <navBar />
      <BrowserRouter>
        <Routes>
        <Route index element = {<Homepage />} />
        <Route path= "hompage" element ={<Homepage />} />
        <Route path = "login" element ={<Login/>}/>
        <Route path = "registration" element ={<Registration/>}/>
        <Route path = "Contact" element ={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
   