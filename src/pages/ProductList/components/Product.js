import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import './Product.scss';

export default function Product(props) {
  const { url, name, price } = props;

  return (
    <div className="product">
      <div className="imageHolder">
        <img alt={name} src={url} />
      </div>
      <div className="description">
        <div className="name">{name}</div>
        <div className="price">{price} 원</div>
        <div className="wishButton">
          <div className="productFilter" />
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
}
