import React from 'react'
import { Link } from 'react-router-dom';

// Components
import HeaderHorizontal from '../components/HeaderHorizontal'

// Styles
import Logo from '../images/logo1.png'
import "./Login.css"
import {MdAlternateEmail} from "react-icons/md";
import {IoIosLock} from "react-icons/io";
import {ImEnter} from "react-icons/im";

const Login = () => {
  return (
    <div className='register'>
        <HeaderHorizontal/>
        <div className="container">
                <img src={Logo} className="logo" />
                <form>
                    <h1 className='text-5xl font-bold mb-4'>Iniciar sesión</h1>   
                      <label>Correo de usuario</label>
                      <div class="form-control mb-4">
                        <label class="input-group">
                          <span className='bg-primary text-white text-3xl'><MdAlternateEmail/></span>
                          <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                        </label>
                      </div>
                      <label>Contraseña</label>
                      <div class="form-control">
                        <label class="input-group">
                          <span className='bg-primary text-white text-3xl'><IoIosLock/></span>
                          <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full" />
                        </label>
                      </div>
                      {/* <div className="input-group">
                        <i><IoIosLock/></i>
                        <input type="password" />
                      </div> */}
                      <Link to='/admin/users' >
                        <button className='btn btn-primary text-white text-2xl font-extrabold'> <ImEnter/> Acceder </button>
                      </Link>
                </form>
        </div>
    </div>
  )
}

export default Login