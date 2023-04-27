import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './component/homepage';
import Navbar from './component/navBar';
import Login from './component/Login';


function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
    
      <Route path="/Login" element={<Login/>} />
    </Routes>
    </div>
  );
}
export default App;