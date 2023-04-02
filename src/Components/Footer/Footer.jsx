import React from 'react'
import footerLogo from "../../assets/logo-DNC-rodape.png";
import './index.scss'

const Footer = () => {
    return (
        <div className="home__footer">
            <img src={footerLogo} alt="Logo DNC Footer" />
            <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas.<br />
                <strong>Para mais informações</strong>, entre em contato: (011) 1111-2222.</p>
        </div>
    )
}

export default Footer