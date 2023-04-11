import React, { useState } from "react";
import cartIcon from "../../assets/shopping_cart.png";
import "./index.scss";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

const ProductDetail = ({ data }) => {

    const [modalShow, setModalShow] = useState(false);
    
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal {...props}size="xl" aria-labelledby="contained-modal-title-vcenter" centered className="Modalmc">  

                <div className="ModalBody">

                    <div>
                    <img src={data.imgPathDetail} alt={data.title} />
                    </div>

                    <div className="text">
                    <h2>Meu Carrinho</h2> 
                    <h1>{data.title}</h1>
                    <h3>{data.price}</h3>
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

                    <button className="button1" onClick={props.onHide}><Link to="/home">Continuar Comprando</Link></button>
                    <button className="button2" onClick={props.onHide}><Link to="/pay">Finalizar Compra</Link></button>
                    </div>

                </div>     

          </Modal>
        );
      }

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

                    <button onClick={() => setModalShow(true)}>
                        <img src={cartIcon} alt="Cart Icon" /> Adicionar ao carrinho
                    </button>

                    <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                </div>
            </div>
                    

    );
};

export default ProductDetail;