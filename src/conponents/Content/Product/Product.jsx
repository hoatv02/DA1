import React from "react";
import styles from "./Product.module.css";
function Product(props) {
  const { img, name, priceSale } = props;
  return (
    <div className={styles.product}>
      <div className={styles.product_detail}>
        <img src={img} alt="" />
        <p>{name}</p>
        <i>{priceSale}</i>
      </div>
    </div>
  );
}

export default Product;
