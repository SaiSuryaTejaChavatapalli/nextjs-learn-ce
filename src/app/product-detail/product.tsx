const Product = async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res("Success");
    }, 4000);
  });
  return <h1>Product</h1>;
};

export default Product;
