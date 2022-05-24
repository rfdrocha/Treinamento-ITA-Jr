import './NavBar.css'
import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = props => (
    <div className='NavBar'>
        <ul className='lista'>
            <li>
                <Link to='/home'>Home</Link>
            </li>

            <li>
                <Link to='/about'>Sobre Nós</Link>
            </li>

            <li>
                <Link to='/servicos'>Serviços</Link>
            </li>

            <li>
                <Link to='/contato'>Contato</Link>
            </li>

            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
)

export default NavBar