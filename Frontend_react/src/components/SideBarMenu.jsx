import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/univalle.png';
import { FaUsers, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import {GiTeacher} from "react-icons/gi" 

const SideBarMenu = () => {
    const sidebar = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const links = [
        {
            name: 'Usuarios',
            icon: <FaUsers />,
            link: '/admin/users',
        },
        {
            name: 'Asignaturas',
            icon: <FaBook />,
            link: '/admin/subjects',
        },
        {
            name: 'Aulas',
            icon: <FaChalkboardTeacher />,
            link: '/admin/classrooms',
        },
        {
            name: 'Elegir Clase',
            icon: <GiTeacher />,
            link: '/admin/chooseclass',
        }
    ];

    useEffect(() => {
        if (isOpen) {
            sidebar.current.style.width = '250px';
        } else {
            sidebar.current.style.width = '80px';
        }
    }, [isOpen]);

    return (
        <>
            <section ref={sidebar} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={`z-50 fixed left-0 flex flex-col transition-all h-screen w-16 bg-primary overflow-hidden`}>

                <div className="flex items-center text-white pl-6 cursor-pointer my-8">
                    <img src={Logo} alt="logo" className="w-12 h-12" />
                </div>

                {links.map((link) => (
                    <Link to={link.link} key={link.link} className="flex items-center text-white pl-4 my-2 cursor-pointer hover:bg-white hover:text-primary transition-all rounded">
                        <p className="font-extrabold text-5xl mr-6">
                            {link.icon}
                        </p>
                        <p className="font-bold text-xl">{link.name}</p>
                    </Link>
                ))}

                
            </section>
        </>
    )
}

export default SideBarMenu