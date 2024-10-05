import "./App.css";
import React, {useState} from 'react';
  import About from "./components/About";
  import Navbar from "./components/Navbar";
  import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {

    const [mode, setMode] = useState("light"); 
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
      setAlert(null);
      }, 4000);
    }

    const removeBodyClasses = () => {
      document.body.classList.remove("bg-light");
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("bg-primary");
      document.body.classList.remove("bg-success");
      document.body.classList.remove("bg-danger");
      document.body.classList.remove("bg-warning");
    }

    const toggleMode = (cls)=> {
      removeBodyClasses();
      document.body.classList.add("bg-" + cls);
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#042743";
        showAlert("dark mode has been enabled", "success");
        // document.title = "TextUtils - DarkMode";
      } else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("light mode has been enabled", "success");
        // document.title = "TextUtils - Light Mode";
      }
    }
    return (
      <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert = {alert} />
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About mode={mode} /> }  />
    <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode = {mode} /> } />
    </Routes>
    </div>
    </Router>
      </>
    )
  }

  export default App;
