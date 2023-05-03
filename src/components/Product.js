import React from 'react';
import '../css/App.css'
import discountWidget from './discountWidget/widget';

function Product(props) {
  return (
    <div className="product">
        <div className="product-div">
            <img className="product-img" src={props.image} alt="nil"/>
            <img className="product-img-wallpaper" src={props.wallpaper} alt="nil"/>
        </div>
        <h3 className="product-title">{props.title}</h3>
        <p className="product-description">{props.description}</p>
        <span className="product-price">$</span><p className="product-price price price-3">{discountWidget(props.price)}</p>
    </div>
  );
}

export default Product;
