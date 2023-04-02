import "./index.scss";
import logo from "../../assets/logo-DNC.png";
import cartLogo from "../../assets/carrinho.png";
import searchLogo from "../../assets/lupa.png";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <header className="header-menu">

      <div className="header-menu__logo-search-cart">
        <Link to={`/home`}>
          <img src={logo} alt="logoDNC" className="header-menu__logo-search-cart__logoDNC" />
        </Link>

        <div className="header-menu__logo-search-cart__search">
          <img src={searchLogo} alt="search logo" className="header-menu__logo-search-cart__search__search-logo" />
          <input type="text" placeholder="O que você está procurando?" />
        </div>

        <Link to={`/home`}>
          <img src={cartLogo} alt="cartLogo" className="header-menu__logo-search-cart__cartLogo" />
        </Link>
      </div>

      <div className="header-menu__list-container">
        <ul>
          <li>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesas Gamer</li>
          <li>Promoções</li>
          <li>Atendimento</li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderMenu;