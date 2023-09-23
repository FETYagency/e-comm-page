import { useState } from "react";
import Product from "./layout/product";
import Header from "./components/header";
import { products, extracter, deleteAct } from "./contexts/cartData";
import "./index.css";
import Cart from "./components/cart";
function App() {
  let [cart, setCart] = useState([]);
  let [showCart, setShowCart] = useState(false);
  function cartVis() {
    setShowCart(!showCart);
  }
  function handleCart(extract) {
    if (cart.length === 0) {
      setCart([extract]);
    } else if (cart.length > 0) {
      let newCart = cart.map((per) => {
        if (per.name === extract.name) {
          return extract;
        } else {
          return per;
        }
      });
      setCart(newCart);
    }
  }
  function deleteProduct(name) {
    let newCart = cart.filter((per) => {
      return per.name !== name;
    });
    setCart(newCart);
  }
  return (
    <products.Provider value={cart}>
      <extracter.Provider value={handleCart}>
        <deleteAct.Provider value={deleteProduct}>
          <main className="relative m-auto max-w-[550px] md:w-[97%] md:max-w-[1110px]">
            <Header handleCart={cartVis} />
            <Product />
            {showCart && <Cart />}
          </main>
        </deleteAct.Provider>
      </extracter.Provider>
    </products.Provider>
  );
}
export default App;
