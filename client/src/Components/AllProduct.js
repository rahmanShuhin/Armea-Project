import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { fakeData } from "./fakeData";
import ProductCard from "./ProductCard";

const AllProduct = ({ min, max }) => {
  const [products, setProducts] = useState([]);
  const [backup, setBackup] = useState([]);
  const [val, setVal] = useState(1);
  const [count, setCount] = useState(() => {
    return Math.ceil(fakeData.length / 6);
  });
  useEffect(() => {
    setBackup(fakeData);
    setProducts(fakeData.slice(0, 6));
  }, []);
  const handleChange = (event, value) => {
    setVal(value);
  };
  useEffect(() => {
    setCount(Math.ceil(backup.length / 6));
    const num1 = (val - 1) * 6;
    const num2 = val * 6;
    setProducts(backup.slice(num1, num2));
    console.log(backup);
  }, [val, backup]);

  useEffect(() => {
    if (min && !max) {
      const pri = parseInt(min);
      const newPro = fakeData.filter((x) => x.price >= pri);
      if (newPro.length === 0) {
        setCount(0);
        setBackup([]);
        setProducts([]);
      } else {
        setBackup(newPro);
        setVal(1);
        setCount(Math.ceil(backup.length / 6));
      }
    } else if (min && max) {
      const pri = parseInt(max);
      const newPro = fakeData.filter((x) => x.price <= pri && x.price >= pri);
      if (newPro.length === 0) {
        setCount(0);
        setBackup([]);
        setProducts([]);
      } else {
        setBackup(newPro);
        setVal(1);
        setCount(Math.ceil(backup.length / 6));
      }
    } else if (!min && max) {
      const pri = parseInt(max);
      const newPro = fakeData.filter((x) => x.price <= pri);
      if (newPro.length === 0) {
        setCount(0);
        setBackup([]);
        setProducts([]);
      } else {
        setBackup(newPro);
        setVal(1);
        setCount(Math.ceil(backup.length / 6));
      }
    } else {
      setBackup(fakeData);
      setProducts(fakeData.slice(0, 6));
    }
  }, [min, max]);

  // useEffect(() => {
  //   if (max) {
  //     const pri = parseInt(max);
  //     const newPro = fakeData.filter((x) => x.price <= pri);
  //     if (newPro.length === 0) {
  //       setCount(0);
  //       setBackup([]);
  //       setProducts([]);
  //     } else {
  //       setBackup(newPro);
  //       setVal(1);
  //       setCount(Math.ceil(backup.length / 6));
  //     }
  //   } else {
  //     setBackup(fakeData);
  //     setProducts(fakeData.slice(0, 6));
  //   }
  // }, [max]);

  return (
    <div className="allProduct">
      <div className="allProduct__container">
        {products.map((x) => (
          <ProductCard x={x}></ProductCard>
        ))}
      </div>
      <div className="allProduct__pagination">
        <Pagination page={val} count={count} onChange={handleChange} />
      </div>
    </div>
  );
};

export default AllProduct;
