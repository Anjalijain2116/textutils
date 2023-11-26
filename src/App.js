import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Textform from './component/Textform';
// import About from './component/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState('1');
  const [bmode, setbmode] = useState('Enable dark mode');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success') 
  // }  

  const toggleMode = () => {
  // const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setbmode("Enable ligh mode");
      // document.title = "TextUtils - Dark Mode";

      //   setInterval(() => {
      //     document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setbmode("Enable dark mode");
      // document.title = "TextUtils - light Mode";
    }
  }

  return (
    <>


      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} bmode={bmode} />
      <Alert alert={alert} />
      <div className="container my-3">

        {/* <About mode={mode} /> */}
        <Textform heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />


        {/* <Routes> */}
        {/* <Route exact path="/" element={<Textform heading="Enter your text to analyse" mode={mode} showAlert={showAlert} />} /> */}
        {/* <Route exaxt path="about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;