const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  console.log("Modal", modal);
  return (
    <>
      <div className="bg-yellow-700">{modal}</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
