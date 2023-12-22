const Test1 = ({
  params,
}: {
  params: {
    testId: string;
  };
}) => {
  return <div>Test1 -{params.testId}</div>;
};

export default Test1;
