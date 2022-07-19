import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiLogOut } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';

const ProfileMenu = () => {
	return (
		<div className="fixed top-20 right-20 z-50">
			<div className="flex-none gap-2">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img
								src="https://placeimg.com/80/80/people"
								alt="Foto de perfil"
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary text-white rounded-box w-52"
					>
						<li>
							<Link to="/">
								<i className="text-2xl">
									<GiTeacher />
								</i>
								Mis clases
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="text-2xl">
									<BiUser />
								</i>
								Editar usuario
							</Link>
						</li>
						<li>
							<Link to="/">
								<i className="text-2xl">
									<BiLogOut />
								</i>
								Cerrar sesión
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProfileMenu;
