import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

type bagType = {
  ProdId: number;
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
  data: bagType[];
};

export default function Home(props: propsType) {
  console.log(props.data);
  return (
    <div>
      <h1 className={styles.heading}>HANDBAG STORE</h1>
      <div className={styles.container}>
        {props.data.map((bag) => {
          console.log("Prod", bag);
          return (
            <Link href={`${bag.ProdId}`} key={bag.ProdId}>
              <div className={styles.content}>
                <Image
                  src={bag.imageUrl}
                  alt="This is image"
                  width="200"
                  height="200"
                />
                <h4>{bag.brand}</h4>
                <p>
                  Price - {bag.price} {bag.currency}
                </p>
                <p>Category - {bag.category}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
