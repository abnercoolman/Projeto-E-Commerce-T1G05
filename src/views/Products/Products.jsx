import React from 'react'
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu'
import Footer from '../../Components/Footer/Footer';
import './index.scss'
import { Link } from 'react-router-dom';

const Products = () => {

    document.title = 'Product - DNC Store';

    return (
        <div className="product">
            <HeaderMenu />

            <div className="product__teste">
                <p className="product__teste__p">Componente - Detalhes do produto</p>
                <button className="product__teste__button">
                    <Link to={`/pay`}>Botão para view "Pay"</Link>
                </button>
            </div>

            <Footer />
        </div >
    )
}

export default Products