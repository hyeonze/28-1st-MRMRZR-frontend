import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import Dropdown from './Dropdown/Dropdown';
import Cart from './Cart/Cart';
import './Nav.scss';

export default function Nav() {
  const [searchActivated, setSearchActivated] = useState(false);
  const [cartValue, setCartValue] = useState([]);
  const [classOfCartWrap, setClassOfCartWrap] = useState('');

  useEffect(() => {
    fetch(`http://b474-211-106-114-186.ngrok.io/carts/list/2`)
      .then(res => res.json())
      .then(res => {
        setCartValue(res);
      });
  }, []);

  const activateCart = () => {
    if (classOfCartWrap === '') setClassOfCartWrap('activated');
    if (classOfCartWrap === 'activated') setClassOfCartWrap('');
  };

  return (
    <nav className="Nav">
      <div className="navInner">
        <h1>
          <Link to="/Main">
            MRMR
            <br />
            ZARA
          </Link>
        </h1>
        <ul className="categories">
          <li>
            <Link to="/Main">New Arrivals</Link>
          </li>
          <li className="women">
            <Link to="/Main">WOMEN</Link>
            <Dropdown />
          </li>
          <li>MEN</li>
          <li>KIDS</li>
          <li>BEAUTY</li>
          <li>SHOES &amp; BAGS</li>
        </ul>
        <ul className="myMenu">
          <li
            className="search"
            onClick={() => setSearchActivated(prev => !prev)}
          >
            검색
          </li>
          <li>보기</li>
          <li>로그인</li>
          <li>도움말</li>
          <li onClick={activateCart}>
            장바구니
            <div className={`cartWarp${classOfCartWrap}`}>
              <span className="basket">장바구니</span>
              {cartValue.result &&
                cartValue.result.map((el, i) => (
                  <Cart
                    key={i}
                    cart_id={el.cart_id}
                    product_id={el.product_id}
                    product_name={el.product_name}
                    product_number={el.product_number}
                    price={el.price}
                    size={el.size}
                    image_url={el.image_url}
                    quantity={el.quantity}
                  />
                ))}
              <input type="button" value="장바구니로 가기" />
            </div>
          </li>
        </ul>
        <span className={`searchBox ${searchActivated && 'activated'}`}>
          <AiOutlineSearch />
          <input type="search" />
        </span>
      </div>
    </nav>
  );
}
