import React,{useState} from 'react'
import Login from './components/Login'

import app from './credenciales'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from './components/Home';
const auth = getAuth(app);



const App = () => {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (userFirebase) => { //si el usuario esta logeado
    if (userFirebase) { //si el usuario esta logeado
      setUsuario(userFirebase) //guarda el usuario en el estado
    } else {
      setUsuario(null) //si no esta logeado el usuario es null
    }
  });


  return (
    <div className=''>
      {
        usuario ? 
        <Home correoUsuario={usuario.email}/>
        :
        <Login/>
      }
    
    </div>
  )
}

export default App