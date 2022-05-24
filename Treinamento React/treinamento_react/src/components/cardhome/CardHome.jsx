import React,{useContext} from 'react'
import DataContext from '../../data/DataContext'
import './CardHome.css'


const CardHome = (props) => {
    const context = useContext(DataContext)

    const nomeProduto = 'Moto'
    const descricaoProduto = 'Uma moto muito interessante'
    
    return(
        <div className="home">

            <div className="cardProduto">
                <p>{nomeProduto}</p>
                <p>Descrição {descricaoProduto}</p>
            </div>
        </div>
    )
}

export default CardHome

