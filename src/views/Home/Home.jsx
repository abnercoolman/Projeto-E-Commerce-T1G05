import React from 'react'
import HeaderMenu from '../../Components/HeaderMenu/HeaderMenu'
import ProductsCard from '../../Components/ProductsCard/ProductsCard';
import './index.scss'
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

const Home = ({ data }) => {

  document.title = 'Home - DNC Store';
  return (
    <div className='home' >
      <HeaderMenu />

      <div className='home__banner'>
        <Banner />
      </div>

      <div className="home__products">
        {
          data.map(product => (
            <ProductsCard key={product.id} data={product} />
          ))
        }
      </div>
      <Footer />
    </div >
  )
}

export default Home