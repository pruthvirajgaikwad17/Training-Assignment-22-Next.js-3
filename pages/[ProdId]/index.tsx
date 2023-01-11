import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

type bagType = {
  color: string;
  discount: string;
  hideGroupPrices: string;
  type: string;
  itemGroupId: string;
  freeShipping: string;
  storeBaseCurrency: string;
  price: string;
  toPrice: string;
  imageUrl: string;
  currency: string;
  inStock: string;
  id: string;
  imageHover: string;
  sku: string;
  brand: string;
  basePrice: string;
  startPrice: string;
  image: string;
  deliveryInfo: string;
  hideAddToCart: string;
  salePrice: string;
  swatchesInfo: string;
  weight: string;
  klevu_category: string;
  totalVariants: number;
  groupPrices: string;
  url: string;
  tags: string;
  product_type: string;
  size: string;
  name: string;
  shortDesc: string;
  category: string;
  typeOfRecord: string;
};

type propsType = {
  data: bagType;
};

const index = (props: propsType) => {
  const prod: any = props.data;
  return (
    <>
      <div className={styles.content}>
        <Image
          src={prod[0].imageUrl}
          alt="this is alternative"
          width="300"
          height="300"
        />
      </div>
      <div className={styles.content}>
        <h3>{prod[0].brand}</h3>
        <p>Price - {prod[0].price}</p>
        <p>category - {prod[0].category}</p>
        <p>Description - {prod[0].shortDesc}</p>
        <button className={styles.buy}>Buy</button>
        <Link href="/">
          <button className={styles.buy}>Home</button>
        </Link>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products?ProdId=${params.ProdId}`
  );
  const data = await response.json();
  console.log("Product", data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default index;
