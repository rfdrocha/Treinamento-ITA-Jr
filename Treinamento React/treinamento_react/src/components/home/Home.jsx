import React,{useState,useContext} from 'react'
import './Home.css'
import CardProduto from '../CardProduto/CardProduto'
import DataContext from '../../data/DataContext'
import {produtos} from '../../data/DadosLogin'

const Home = (props) => {

    const context = useContext(DataContext)
    const [nome,setNome] = useState(context.state.user)

    return(
        <div className="Conteudo">
            <h2 className='titulo'>Olá <strong>{nome}</strong> esses são seus produtos:</h2>
            <div className="Home">

                {produtos.map(usuario => 
                    {
                        if(usuario.nome == nome)
                            return usuario.produtos.map(produto => <CardProduto nomeProd={produto.nome} descricaoProd={produto.descricao}/>)
                    }
                )}
            </div>
        </div>
    )
}

export default Home