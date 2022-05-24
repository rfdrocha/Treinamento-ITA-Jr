import React from 'react'
import './CardProduto.css'

const CardProduto = (props) => {

    return(
        <div className="cardProduto">
                <p className='tituloProd'><strong>{props.nomeProd}</strong></p>
                <div className='imagemProduto'></div>
                <p>{props.descricaoProd}</p>
        </div>
    )
}

export default CardProduto