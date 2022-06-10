import React, {useState,useContext} from 'react'
import './Card.css'
import DataContext from '../../data/DataContext'
import DadosLogin from '../../data/DadosLogin'


const Card = (props) => {
    const context = useContext(DataContext)
    const [nome,setNome] = useState()
    const [senha,setSenha] = useState("")
    const dados = DadosLogin

    function changeName(nome){
        context.setState({
            ...context.state, user:nome
        })
    }

    function verificar(nome,senha){
        for(let i=0; i < dados.length ; i++)
        {
            if(dados[i].nome == nome && dados[i].senha == senha)
            {
                changeName(nome)
                break
            }
        }

    }

    return(
        <div id="card">
            {context.state.user!=='Anônimo'?<span>Bem vindo {context.state.user}</span>:""}
            <div action="" className="inputs">
                <div className="campo">
                    <label for="email"></label>
                    <input type="text" name="email" id="email" placeholder="Nome" className="input"
                    value = {nome} onChange = {e=>setNome(e.target.value)} ></input>
                </div>
                <div class="campo">
                    <label for="password"></label>

                    <input type="password" id="password" name="password" placeholder="Senha" className="input"
                        value = {senha} onChange = {e=>setSenha(e.target.value)}></input>
                </div>
                <div className="campo">
                    <button id="botaoLogin" type="submit" onClick={()=> verificar(nome,senha)}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Card