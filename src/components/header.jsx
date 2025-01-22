// src/components/Header.jsx
// src/components/Header.jsx
import  { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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

          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
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
