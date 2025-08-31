import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <header>
      <div className="header-bar">
        <section>
          <Link to={"/noiseset"}>
            <img
              className="title"
              src="https://www.gonoise.com/cdn/shop/files/Group_4_df1f4045-5a8c-4b00-94bb-a6622f06f7da.png?v=1696847023"
              alt="dddf"
            />
          </Link>
        </section>

        <nav className="header-option">
          <a className="link" href="/product">
            Products
          </a>
          <a className="link" href="/Luna-Ring">
            Luna Ring
          </a>
          <a className="link" href="/Gift-Store">
            Gift Store
          </a>
          <a className="link" href="/Support">
            Support
          </a>
          <a className="link" href="/Blog">
            Blogs
          </a>
        </nav>

        <div>
          <a className="search" href="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
          <a className="cart" href="cart">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
          <a className="person" href="person">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
      </div>
    </header>
  );
};
export default HeaderBar;
