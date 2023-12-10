import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextArea from './components/TextArea';
import Alerts from './components/Alerts';
import React from "react";
import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
function App() {
  
  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("light");
  const showalert = (message, type) => {
    setalert({message: message,type: type})
    setTimeout(()=>{setalert(null)},2000)
  }

  const toggle = () => {
    if (mode == "light") {
      showalert("Light mode is now enable", "success")
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white"
    } else {
      showalert("Dark mode is now enable", "success")
      setmode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
  }
  return (
    <>
   <Router>
   <Navbar toggle={toggle} title="The Edit" mode={mode}/>
   <Alerts alert={alert}/>
   <Routes>
    <Route  path='/'element={<TextArea/>}/>
    <Route  path='/About' element={<About/>}/>
   </Routes>
   </Router>
    </>
  )
}

export default App;
