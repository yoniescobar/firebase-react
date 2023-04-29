import React from 'react'

import app from '../credenciales'
import { getAuth, onAuthStateChanged} from "firebase/auth";
const auth = getAuth(app);

const Home = ({correoUsuario}) => {
  return (
      <div className='container'>    

        <p>Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado Sesión</p>
        <button className='btn btn-danger' onClick={()=>auth.signOut(auth)}>Cerrar Sección</button>
        <hr/>
        
    </div>
  )
}

export default Home