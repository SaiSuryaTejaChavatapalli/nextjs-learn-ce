import { Metadata } from "next";

type ProductSinglePageProps = {
  params: {
    productId: string;
  };
};
//We can generate metadata using two ways
//1.static object.
//2.generateMetadata function which returns metadata object.
//3.Metadata is going from root level to page level.
//4.If the same properties are present ,It will override otherwise ,properties will be merged.
//5.we can't generate metadataObject and generateMetadata i same route files.
export const generateMetadata = async ({
  params,
}: ProductSinglePageProps): Promise<Metadata> => {
  //We can give Promise based Metadata to the generateMetadata function
  //Whatever the params object get to the SinglePage will also get to the generateMetadata function
  const title = await new Promise((res, rej) => {
    setTimeout(() => {
      res(`Pixel-${params.productId}`);
    }, 100);
  });
  return {
    // title: `Product -${params.productId}`,
    title: `Product -${title}`,
    description: `Product -${params.productId} description`,
  };
};

const ProductSinglePage = ({ params }: ProductSinglePageProps) => {
  return <div>ProductSinglePage - {params.productId}</div>;
};

export default ProductSinglePage;
