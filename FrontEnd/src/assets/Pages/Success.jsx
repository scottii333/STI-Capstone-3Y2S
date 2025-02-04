import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Payment Successful!
      </h1>
      <p>Your payment was processed successfully. Thank you!</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-600 focus:outline-none"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
