import { Link } from 'react-router-dom'
import './index.scss'

const ProductsCard = ({ data }) => {
    return (
        <div className='home__card'>

            <img src={data.imgPath} alt={data.title} />

            <div className="home__card__description">

                <p>{data.title}</p>

                <button>
                    <Link to={`/products/${data.id}`}>Ver mais</Link>
                </button>

            </div>
        </div>
    )
}

export default ProductsCard