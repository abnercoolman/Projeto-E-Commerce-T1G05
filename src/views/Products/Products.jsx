import React from 'react'
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu'
import Footer from '../../Components/Footer/Footer';
import ProductsDetail from '../../Components/ProductsDetail/ProductsDetail';
import './index.scss'
import { useParams } from 'react-router-dom';


const Products = ({ data }) => {

    const { productId } = useParams();
    //console.log(productId);
    const selectedProduct = data.find(product => product.id == productId);
    //console.log(selectedProduct);

    document.title = selectedProduct.title;

    return (

        <div className="product">
            <HeaderMenu />
            <ProductsDetail data={selectedProduct} />
            <Footer />
        </div>


    )
}

export default Products