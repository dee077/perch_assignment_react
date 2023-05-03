import { useState } from 'react';
import '../css/App.css';
import Product from './Product';
import productData from '../data/productData';

function NewRelease() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leftArrow = () => {
    setCurrentIndex((currentIndex - 1 + productData.length) % productData.length);
  };
  const rightArrow = () => {
    setCurrentIndex((currentIndex + 1) % productData.length);
  };
  const renderProduct= ()=>{
       const sliced=[...productData, ...productData, ...productData].slice(currentIndex, currentIndex + 3);
       return sliced.map((item, index) => (
          <Product className="product-animation"
             key={index}
             title={item.title}
             description={item.description}
             price={item.price}
             image={item.image}
             wallpaper={item.wallpaper}
          />
      ));
  }
  return (
    <div className="new-release">
    <div className="new-release-head">
        <h3 className="new-release-heading">New Release</h3>
        <p className="new-release-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto iusto consequatur autem reprehenderit. Eum.</p>
    </div>
    <div className="new-release-body">
        {renderProduct()}
        <span onClick={leftArrow} className="arrow left"><i className="fas fa-less-than"></i></span>
        <span onClick={rightArrow} className="arrow right"><i className="fas fa-greater-than"></i></span>
    </div>
    </div>
  );
}

export default NewRelease;
