const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Document of {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing document of {params.slug[0]}</h1>;
  }

  return <div>Docs Home Page</div>;
};

export default Docs;
