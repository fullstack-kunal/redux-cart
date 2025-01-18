import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The First Book I ever Wrote",
  },
  {
    id: "p2",
    price: 8,
    title: "My Second Book",
    description: "The second Book I ever Wrote",
  },
  {
    id: "p3",
    price: 10,
    title: "My Third Book",
    description: "The Third Book I ever Wrote",
  },
  {
    id: "p4",
    price: 8,
    title: "My Forth Book",
    description: "The Forth Book I ever Wrote",
  },
  {
    id: "p5",
    price: 8,
    title: "My fifth Book",
    description: "The fifth Book I ever Wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
