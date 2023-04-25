import React from 'react'
import "./index.scss";

const ModalCheckout = ({ data, setModal, setModalCheckout }) => {
    return (

        <div className='modalCheckout'>

            <div className='modalCheckout__container'>
                <form className="modalCheckout__container__form">

                    <div className="modalCheckout__container__form__input">
                        {/* Título */}
                        <h1 className="modalCheckout__container__form__input__title">Finalizar compra:</h1>
                        {/* Nome */}
                        <label className="modalCheckout__container__form__input__label">Digite seu nome:</label>
                        <input className="modalCheckout__container__form__input__field" type="text" placeholder="Nome completo" />
                        {/* CPF */}
                        <label className="modalCheckout__container__form__input__label">Digite seu CPF:</label>
                        <input className="modalCheckout__container__form__input__field" type="text" placeholder="***.***.***-**" />
                        {/* Endereço */}
                        <label className="modalCheckout__container__form__input__label">Endereço:</label>
                        <input className="modalCheckout__container__form__input__field" type="text" placeholder="Endereço completo (Ex.: Rua Projetada, nº 30)" />
                        {/* Forma de Pagamento */}
                        <label className="modalCheckout__container__form__input__label">Forma de Pagamento:</label>
                        <input className="modalCheckout__container__form__input__field" type="text" placeholder="(Ex.: Boleto, Pix, Cartão de crédito, Cartão de débito)" />

                    </div>

                    <button className="modalCheckout__container__form__checkoutButton"
                        onClick={() => setModalCheckout(false)}>
                        Confirmar Pedido
                    </button>

                </form>
            </div>

        </div>

    )
}

export default ModalCheckout