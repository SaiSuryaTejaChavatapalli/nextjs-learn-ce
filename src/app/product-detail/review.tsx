const Review = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  return <h1>Review</h1>;
};

export default Review;
