const TestSlotLayout = ({
  children,
  abc,
}: {
  children: React.ReactNode;
  abc: React.ReactNode;
}) => {
  return (
    <div>
      <h1>TestSlotLayout</h1>
      <div>{children}</div>
      <div>{abc}</div>
    </div>
  );
};

export default TestSlotLayout;
