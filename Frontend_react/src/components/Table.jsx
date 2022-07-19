import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Table = ({ data, type }) => {
	if (type === 'users') {
		return (
			<>
				<table className="table w-full">
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
						{data.map((user, index) => (
							<tr key={`user-${index}`} className="hover">
								<th>{index + 1}</th>
								<td>{user.cedula}</td>
								<td>{user.nombre_usuario}</td>
								<td>{user.apellido_usuario}</td>
								<td>{user.telefono}</td>
								<td>{user.asignaturas}</td>
								<td>{user.habilitado}</td>
								<td className="text-2xl cursor-pointer text-primary">
									<AiOutlineCloseCircle />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}

	return <div>Table</div>;
};

export default Table;
