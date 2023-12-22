const Concept = ({
  params,
}: {
  params: {
    conceptId: string;
    testId: string;
  };
}) => {
  return (
    <div>
      Test -{params.testId} Concept -{params.conceptId}
    </div>
  );
};

export default Concept;
