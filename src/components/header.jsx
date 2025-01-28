// src/components/Header.jsx
// src/components/Header.jsx

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from './order'; // Import Order component
import PropTypes from 'prop-types'; // Import PropTypes

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Summary: {summa}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div>
      <h2 className="shop-cart-empty">Empty</h2>
    </div>
  );
};

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <span className="logo">House Staff</span>
        <FaShoppingCart 
          onClick={() => setCartOpen(prev => !prev)} 
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`} 
        />
        <ul className="nav">
          <li>About</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>
        {cartOpen && (
          <div className='shop-cart'>
            <h2 className="shop-cart-title">Shop Cart</h2>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

// Adding prop validation
Header.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      img: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Header;
// import "react";
// import { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";

// const Header = () => {

//   let [cartOpen, setCartOpen] = useState(false)
//   return (
//     <header>
//       <div className="header">
//         <span className="logo">House Staff</span>
//         <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={'shop-cart-button' ${cartOpen && 'active'}} />
//         <ul className="nav">
//           <li>About</li>
//           <li>Contact</li>
//           <li>Account</li>
//         </ul>
//       </div>
//       <div className="presentation"></div>
//     </header>
//   );
// };

// export default Header;
