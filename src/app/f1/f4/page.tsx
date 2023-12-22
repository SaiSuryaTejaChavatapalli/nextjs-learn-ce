import Link from "next/link";

const F4 = () => {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        <Link href={"/f1/f3"}>Go to F3 Page</Link>
        <br />
        <Link href={"/about"}>Go to About Page</Link>
      </div>
    </>
  );
};

export default F4;
