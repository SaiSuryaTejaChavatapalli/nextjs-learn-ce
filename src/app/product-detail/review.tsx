const Review = async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res("Success");
    }, 2000);
  });
  return <h1>Review</h1>;
};

export default Review;
