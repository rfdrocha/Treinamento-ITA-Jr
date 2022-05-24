import './Content.css'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from '../About/About'
import Servicos from "../Servicos/Servicos"
import Contato from '../Contato/Contato'
import Login from '../Login/Login'
import Home from '../home/Home'

const Content = props => (
    <div className='Content'>
        <Routes>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path ='/servicos' element ={<Servicos/>}/>
            <Route path='/contato' element = {<Contato/>}/>
            <Route path='/login' element = {<Login/>}/>
        </Routes>
    </div>
)

export default Content
