import React from 'react'
import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ModalMyCart = ({ data, setModal, setModalCheckout }) => {

    return (

        <div className='modalMyCart'>
            <div className="modalMyCart__conteiner">

                <div className="modalMyCart__conteiner__column1">
                    <img src={data.imgPathDetail} alt={data.title} />
                </div>

                <div className="modalMyCart__conteiner__column2">
                    <h1 className="modalMyCart__conteiner__column2__cartTitle">Meu Carrinho</h1>
                    <h1 className="modalMyCart__conteiner__column2__productTitle">{data.title}</h1>
                    <h2 className="modalMyCart__conteiner__column2__productPrice">{data.price}</h2>
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
                    <div className="modalMyCart__conteiner__column2__cube-colors">
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

                    <div className="modalMyCart__conteiner__column2__buttons">
                        <button className="modalMyCart__conteiner__column2__buttons__keepBuyButton"
                            onClick={() => setModal(false)}>
                            Continuar Comprando
                        </button>

                        <button className="modalMyCart__conteiner__column2__buttons__checkoutButton"
                            onClick={
                                () => {
                                    setModalCheckout(true);
                                    setModal(false);
                                }}>
                            Finalizar Compra
                        </button>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default ModalMyCart