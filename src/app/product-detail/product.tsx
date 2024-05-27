const Product = async () => {
  await new Promise((res) => setTimeout(res, 4000));
  return <h1>Product</h1>;
};

export default Product;
