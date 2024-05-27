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

      {/* Normal loading takes more than 4 sec */}
      {/* <Product />
      <Review /> */}
    </div>
  );
};

export default ProductDetailsPage;
