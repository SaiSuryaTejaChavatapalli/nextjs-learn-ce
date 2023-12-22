"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const OrderProductPage = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing order...");
    //-> To programmatically navigate from one route to another route.
    router.push("/"); // -> To push to route stack.
    //router.replace("/") ->To replace the route stack.
    //router.back() -> To go back.
    //router.forward() -> To move route forward.
  };
  return (
    <>
      <h1> OrderProductPage</h1>
      <button onClick={handleClick}>Place Order</button>
      <Link href={"/"}>Place Order</Link>
    </>
  );
};

export default OrderProductPage;
