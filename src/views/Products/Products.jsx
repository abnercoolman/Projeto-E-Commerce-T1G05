import React from 'react'
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu'
import Footer from '../../Components/Footer/Footer';
import ProductsDetail from '../../Components/ProductsDetail/ProductsDetail';
import './index.scss'
import { useParams } from 'react-router-dom';
import ModalMyCart from '../../Components/ModalMyCart/ModalMyCart';
import { useState } from 'react';
import ModalCheckout from '../../Components/ModalCheckout/ModalCheckout';

const Products = ({ data }) => {

    const { productId } = useParams();
    const selectedProduct = data.find(product => product.id == productId);

    const [modal, setModal] = useState(false);
    const [showModalCheckout, setModalCheckout] = useState(false);

    document.title = selectedProduct.title;

    return (
        <div className="product">
            <HeaderMenu />

            {/* Aqui ficará a lógica do aparecimento do modal.
            Utilizamos um 'operador ternário' para avaliar quando
            o modal for falso ou verdadeiro.
            Inicialmente o modal assume o valor como falso, pois
            assumimos que ele não esteja sendo utilizado ainda*/

                modal === true
                    ?
                    // Se o modal estiver sendo usado isto aparecerá
                    <ModalMyCart data={selectedProduct} setModal={setModal} setModalCheckout={setModalCheckout} />
                    :
                    // Caso não esteja sendo usado iremos mostrar somente o componente normal de detalhes do produto
                    null

            }
            {
                showModalCheckout === true
                    ?
                    <ModalCheckout data={selectedProduct} setModal={setModal} setModalCheckout={setModalCheckout} />
                    :
                    null
            }

            <ProductsDetail data={selectedProduct} setModal={setModal} />
            <Footer />
        </div>
    )
}

export default Products