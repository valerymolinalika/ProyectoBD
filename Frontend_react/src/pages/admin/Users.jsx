import React from 'react';
import { SideBarMenu, ProfileMenu } from '../../components';
import { FaSearch } from 'react-icons/fa';
import Table from '../../components/Table';

const Users = () => {
	const usersData = [
		{
			cedula: '12345678',
			nombre_usuario: 'Juan',
			apellido_usuario: 'Perez',
			telefono: '12345678',
			asignaturas: 'Matematicas, Fisica, Quimica',
			habilitado: 'Si',
		},
		{
			cedula: '12345678',
			nombre_usuario: 'Juan',
			apellido_usuario: 'Perez',
			telefono: '12345678',
			asignaturas: 'Matematicas, Fisica, Quimica',
			habilitado: 'Si',
		},
	];

	return (
		<main className="flex">
			<SideBarMenu />
			<ProfileMenu />

			<section className="ml-16 bg-white-500 w-screen min-h-screen flex flex-col items-center justify-center">
				<div className="overflow-x-auto w-4/5">
					<p className="text-3xl font-extrabold text-primary">Usuarios</p>
					{/* Search button */}
					<div className="ml-2 mb-8 self-start">
						<input
							type="text"
							placeholder="Buscar usuario..."
							className="input input-bordered input-primary rounded-r-none"
						/>
						<button className="btn btn-square btn-primary rounded-l-none">
							<FaSearch />
						</button>
					</div>
					{/* Users table */}
					<Table type={'users'} data={usersData} />
				</div>
			</section>
		</main>
	);
};

export default Users;
