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

        <form>
          <div className="card card-body">
              <input type="text" placeholder="Ingrese su nombre" className="form-control mb-2" />
              <input type="text" placeholder="Ingrese su apellido" className="form-control mb-2" />
              <input type="email" placeholder="Ingrese su correo" className="form-control mb-2" />
              <input type="text" placeholder="Ingrese su telefono" className="form-control mb-2" />
             
          </div>

          <button className="btn btn-primary btn-block mt-2">Registrar</button>

        </form>

         <hr/>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos</td>
              <td>Sanchez</td>
              <td>correo</td>
              <td>telefono</td>
              </tr>
            </tbody>
              </table> 




    </div>
  )
}

export default Home