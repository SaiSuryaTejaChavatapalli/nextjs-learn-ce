import Link from "next/link";

const F1 = () => {
  return (
    <>
      <h1>F1</h1>
      <br />
      <Link href={"/f1/f2"}>Go to F2</Link>
    </>
  );
};

export default F1;
