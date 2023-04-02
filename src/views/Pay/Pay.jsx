import React from 'react'
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu'
import Footer from '../../Components/Footer/Footer';
import './index.scss'

const Pay = () => {

    document.title = 'Pay - DNC Store';

    return (
        <div className="pay">
            <HeaderMenu />
            <p className="pay__p">View "Pay"</p>
            <Footer />
        </div >
    )
}

export default Pay