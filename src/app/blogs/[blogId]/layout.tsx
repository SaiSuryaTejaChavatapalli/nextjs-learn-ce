export const generateMetadata = ({
  params,
}: {
  params: {
    blogId: string;
  };
}) => {
  console.log("Params", params);
  return {
    title: `Title -${params?.blogId}`,
    description: `Description - ${params?.blogId}`,
  };
};
const BlogIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>BlogIdLayout</h1>
      {children}
    </div>
  );
};

export default BlogIdLayout;
