import React, { useEffect, useState } from "react";
import desk from "../images/desk.png";
import { useHistory } from "react-router-dom";
import { fakeData } from "./fakeData";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./actions";
const Nav_Cart = () => {
  let history = useHistory();
  const [cartProduct, setCartProduct] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products.length !== 0) {
      const arr = products?.map((x) => {
        const findData = fakeData.find((y) => y.id === x.id);
        findData.quantity = x.quantity;
        return findData;
      });
      setCartProduct(arr);
    } else {
      setCartProduct([]);
    }
  }, [products]);

  useEffect(() => {
    let tot = 0;
    cartProduct.map((x) => (tot = tot + x.price * x.quantity));
    setTotal(tot);
  }, [cartProduct]);

  return (
    <div className="nav__cart" data-aos="fade-down">
      {cartProduct.map((x) => (
        <div>
          <img src={x?.img} alt={x.productName} />
          <div>
            <div>
              <h3>{x.productName}</h3>
              <button onClick={() => dispatch(removeFromCart(x.id))}>
                Eliminar
              </button>
            </div>
            <p style={{ color: "#FF6606" }}>
              ${x.price}{" "}
              <small style={{ color: "gray" }}> X {x.quantity}</small>{" "}
            </p>
          </div>
        </div>
      ))}
      <div>
        <h2>Total: ${total}</h2>
        <button
          disabled={products.length === 0}
          onClick={() => history.push("/checkout")}
        >
          IR A LA CAJA
        </button>
      </div>
    </div>
  );
};

export default Nav_Cart;
