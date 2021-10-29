import {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark';
      showAlert("Dark Mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      
      {/* <Switch> */}
        {/* <Route path="/about"> */}
          {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
        {/* </Route> */}
      {/* </Switch> */}
    {/* </Router> */}
    </>
  );
}
export default App;