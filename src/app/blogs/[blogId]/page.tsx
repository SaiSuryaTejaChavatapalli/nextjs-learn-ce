"use client";

const BlogId = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  const random = Math.random();
  console.log("Random", random);
  if (random > 0.5) {
    throw new Error("Error Occured in Blog ID");
  }
  return <div>BlogId -{params.blogId}</div>;
};

export default BlogId;
