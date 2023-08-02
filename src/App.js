import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textforms from './component/Textforms';
import Alert from './component/Alert';

function App() {
  const[mode,setMode] = useState('light');

  const[bmode,setbMode] = useState('blue');

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
   setAlert({ 
    msg:message,
    type:type
  })
  
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  }

  // const removeBodyClasses = ()=>
  // {

  // document.body.classList.remove('bg-light');
  // document.body.classList.remove('bg-dark');
  // document.body.classList.remove('bg-grey')
  // document.body.classList.remove('bg-warning')
  // document.body.classList.remove('bg-danger')
  // document.body.classList.remove('bg-white')
  // }


  const toggleMode = (cls) => {
  
    
    // removeBodyClasses();
    //   document.body.classList.add('bg-' + cls);
      if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      // setInterval(()=>
      // {
      //   document.title="Textutils-Dark mode";
      // },2000)

      // setInterval(()=>
      // {
      //   document.title="Textutils is amazing";
      // },1500)
     
     
     
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };
  
  const bluetogMode = ()=>
  {
    if(bmode === 'blue')
    {
      setbMode('green');
      document.body.style.backgroundColor='lightgreen';
      showAlert('Blue darkmode has been enabled','success');
    }
    else{
      setbMode('blue');
      document.body.style.backgroundColor='blue';
      showAlert('Light mode has been enabled','success');
    }
  }


  return (
    <>
    <Navbar navhome="Home" navabout="About" navcontact="Contact" mode ={mode} bmode={bmode} toggleMode={toggleMode} bluetogMode={bluetogMode}  />
    <Alert alert ={alert}/>
    <Textforms texthead="Enter your text here" mode ={mode} showAlert ={showAlert}/>
    </>
  );
}

export default App;
