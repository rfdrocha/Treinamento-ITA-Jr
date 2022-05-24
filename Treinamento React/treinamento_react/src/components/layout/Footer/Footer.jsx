import './Footer.css'
import React from 'react'

const Footer = props => (
    <div className='Footer'>
        <div className='componenteFooter'>
            <h2>Nossa empresa</h2>
            <ul>
                <li>nossa historia</li>
                <li>governança corporativa</li>
                <li>nossas ações</li>
                <li>integridade e ética</li>
                <li>ESG</li>
            </ul>
        </div>

        <div className='componenteFooter'>
            <h2>Resultados e relatórios</h2>
            <ul>
                <li>painel de indicadores</li>
                <li>central de resultados</li>
                <li>relatório anual integrado</li>
                <li>empresas do grupo</li>
            </ul>
        </div>

        <div className='componenteFooter'>
            <h2>Informações ao mercado</h2>
            <ul>
                <li>comunicados ao mercado</li>
                <li>reuniões publicas</li>
                <li>contexto econômico</li>
                <li>boletins periódicos</li>
            </ul>
        </div>

        <div className='componenteFooter'>
            <h2>Nossas redes sociais</h2>
            <div className='imagens'>
                <img src = {'/assets/icone-instagram.png'} alt = "Icone Instagram"/>
                <img src = {'/assets/icone-facebook.png'} alt = "Icone Facebook"/>
                <img src = {'/assets/icone-twitter.png'} alt = "Icone Twitter"/>
                <img src = {'/assets/icone-linkedin.png'} alt = "Icone Linkedin"/>
            </div>
        </div>
    </div>
)

export default Footer