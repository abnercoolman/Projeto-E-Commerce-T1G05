import React, { useState } from "react";
import "./index.scss";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";


const Login = () => {

  document.title = 'Login - DNC Store';

  const [cpf, setCpf] = useState('');
  const [cpfValido, setCpfValido] = useState(false);

  function handleCpfChange(event) {
    const novoCpf = event.target.value;
    setCpf(novoCpf);
    if (validaCPF(novoCpf)) {
      setCpfValido(true);
    } else {
      setCpfValido(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!cpfValido) {
      alert('CPF inválido!');
      return false;
    }
    alert('CPF Válido');
    <Link to="/dashboard">Entrar</Link>
  }

  function validaCPF(cpf) {

    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    // Valida 1o digito
    var add = 0;
    for (var i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    var rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }

  return (

    <section className="login">

      <Header />

      <form className="login__form" onSubmit={handleSubmit}>

        <h1>Acesse com seu login ou cadastre-se!</h1>

        <h2>você pode entrar com o seu CPF</h2>

        <div className="login__input">

          <label htmlFor="name">Digite seu CPF:</label>

          <input type="text" value={cpf} onChange={handleCpfChange} />

          <label htmlFor="password">Senha:</label>
          <input
            type="passoword"
            id="passoword"
            placeholder="***********"
          />

        </div>

        {cpfValido ? (
          <Link to="/home">
            <button className="button__active" type="submit">Entrar</button>
          </Link>
        ) : (
          <button className="button__disabled" type="submit" disabled>
            Entrar
          </button>
        )}

      </form>
    </section>

  );


}

export default Login;
