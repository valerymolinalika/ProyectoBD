import React from 'react'
import HeaderHorizontal from '../components/HeaderHorizontal'
import Logo from '../images/logo.png'
import "./Login.css"

const Login = () => {
  return (
    <div className='register'>
        <HeaderHorizontal/>
        <div className="container">
                <img src={Logo} className="logo" />
                <form>
                    <h1>Iniciar sesión</h1>   
                      <label>Correo de usuario</label>
                      <input type="text" />
                      <label>Contraseña</label>
                      <input type="password" />
                    <button> Acceder </button>
                </form>
        </div>
    </div>
  )
}

export default Login