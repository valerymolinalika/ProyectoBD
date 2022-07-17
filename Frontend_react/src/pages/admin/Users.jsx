import React from 'react';
import SideBarMenu from '../../components/SideBarMenu'

const Users = () => {


  return (
    <main className="flex direction column">
      <SideBarMenu />

      <section className='ml-16 bg-white-500 w-screen min-h-screen flex items-center justify-center'>
      {<div class="form-control">
          <div class="input-group">
            <input type="text" placeholder="Search…" class="input input-bordered" />
            <button class="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div> }
       
      </section>
      <section className='ml-16 bg-white-500 w-screen min-h-screen flex items-center justify-center'>
       
        <div classne="overflow-x-auto">
          <table class="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Asignaturas</th>
                <th>Habilitado</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>

              <tr class="hover">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blueh</td>

              </tr>

              <tr class="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blueh</td>
              </tr>


              <tr class="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blueh</td>
                <td>Red</td>


              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>


  )
}



export default Users