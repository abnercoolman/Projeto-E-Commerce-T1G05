import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/shopping_cart.png";
import "./index.scss";

const ProductDetail = ({ data, setModal }) => {
    //console.log(data);
    return (
        <div className="product-detail">
            <div className="product-detail__left-side">
                <div className="product-detail__left-side__card">
                    <img src={data.imgPathDetail} alt={data.title} />
                    <p>{data.title}</p>
                </div>
                <div className="product-detail__left-side__description">
                    <h1>Descrição</h1>
                    <p>{data.descripition}</p>
                </div>
            </div>
            <div className="product-detail__right-side">
                <h1>{data.title}</h1>
                <h2>{data.price}</h2>
                <p>
                    {data.colorsText.length === 0
                        ? ""
                        : "Cor:"
                    }
                    {" "}
                    {data.colorsText.length === 1
                        ? data.colorsText.map((color, index) => (
                            <span key={index}>{color}</span>
                        ))
                        : data.colorsText.map((color, index) =>
                            index + 1 === data.colorsText.length ? (
                                <span key={index}>{color}</span>
                            ) : (
                                <span key={index}>{color}, </span>
                            )
                        )}
                </p>
                <div className="product-detail__right-side__cube-colors">
                    {data.colors.map((color) => (
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                backgroundColor: color,
                            }}
                        ></div>
                    ))}
                </div>

                <button onClick={() => setModal(true)}>
                    <img src={cartIcon} alt="Cart Icon" />
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;