import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../pages/img/navbaricon.jpeg"
const Navbar = () => {
    return (
        
        
        <nav className="navbar-nav">
            <div className="separador-horizontal1"></div>
        <div className='contenedor-fila'>
        <div className="div-1">
        <ul>    
            <li className="nav-item"><Link to="/"><p className='tamaño'>INICIO</p></Link></li>
            <li className="nav-item"><Link to="/about"><p className='tamaño'>NOSOTROS</p></Link></li>
        </ul>
        </div>
        <div className='div-2'>
        <img src={logo} className='logo'/>
        </div>
        <div className='div-3'>
        <ul>
            <li className="nav-item"><Link to="/services"><p className='tamaño'>ESTABLECIMIENTOS</p></Link></li>
            <li className="nav-item"><Link to="/contact"><p className='tamaño'>SERVICIO A EMPRESAS</p></Link></li> 
        </ul>
        </div>
        </div>
      </nav>
    );
};

export default Navbar;