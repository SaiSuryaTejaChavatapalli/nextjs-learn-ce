import { Suspense } from "react";
import Product from "./product";
import Review from "./review";

const ProductDetailsPage = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading....</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductDetailsPage;
