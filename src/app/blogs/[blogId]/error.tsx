"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <div>Error Page for blogging -{error.message}</div>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default ErrorBoundary;
