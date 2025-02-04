// Payment.jsx
import axios from "axios";
import { useState } from "react";

const Payment = () => {
  // Define products with images, names, and prices
  const productFrappe1 = {
    id: "frappe1",
    name: "Frappe 1",
    price: 80.0,
    image:
      "https://i.pinimg.com/736x/c2/fb/ae/c2fbaea43bd393464e76b3f817264e8e.jpg",
  };

  const productFrappeT = {
    id: "frappet",
    name: "Frappe T",
    price: 120.0,
    image:
      "https://i.pinimg.com/736x/52/34/90/5234907fb35fc29a79936fafc078e70f.jpg",
  };

  // State for product quantities and loading status
  const [quantityFrappe1, setQuantityFrappe1] = useState(0);
  const [quantityFrappeT, setQuantityFrappeT] = useState(0);
  const [loading, setLoading] = useState(false);

  // Calculate the total price for the cart
  const totalPrice =
    quantityFrappe1 * productFrappe1.price +
    quantityFrappeT * productFrappeT.price;

  // Build a description string for the cart items
  let description = "";
  if (quantityFrappe1 > 0) {
    description += `${quantityFrappe1} x ${productFrappe1.name}`;
  }
  if (quantityFrappeT > 0) {
    if (description) description += ", ";
    description += `${quantityFrappeT} x ${productFrappeT.name}`;
  }
  if (!description) description = "No items selected";

  // Handle checkout creation by sending cart data to the backend
  const createCheckout = async () => {
    if (totalPrice <= 0) {
      alert("Please add items to the cart before checking out.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://sti-capstone-3y2s.onrender.com/api/create-checkout",
        {
          amount: totalPrice,
          description,
          redirectUrl: "https://sti-capstone-3-y2-s.vercel.app", // Your frontend URL
        }
      );

      // Redirect the user to the PayMaya checkout page
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error("Error creating checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Maya Payment Integration
      </h1>

      {/* Product Selection Card */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="space-y-4">
          {/* Frappe 1 */}
          <div className="flex items-center justify-between border p-4 rounded">
            <div className="flex items-center space-x-4">
              <img
                src={productFrappe1.image}
                alt={productFrappe1.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold text-lg">{productFrappe1.name}</p>
                <p className="text-gray-600">
                  Price: PHP {productFrappe1.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setQuantityFrappe1(Math.max(quantityFrappe1 - 1, 0))
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                –
              </button>
              <span className="font-semibold">{quantityFrappe1}</span>
              <button
                onClick={() => setQuantityFrappe1(quantityFrappe1 + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Frappe T */}
          <div className="flex items-center justify-between border p-4 rounded">
            <div className="flex items-center space-x-4">
              <img
                src={productFrappeT.image}
                alt={productFrappeT.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold text-lg">{productFrappeT.name}</p>
                <p className="text-gray-600">
                  Price: PHP {productFrappeT.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setQuantityFrappeT(Math.max(quantityFrappeT - 1, 0))
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                –
              </button>
              <span className="font-semibold">{quantityFrappeT}</span>
              <button
                onClick={() => setQuantityFrappeT(quantityFrappeT + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold">Cart Summary</h2>
          <p className="text-gray-700">{description}</p>
          <p className="font-bold mt-2 text-lg">
            Total: PHP {totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <button
            onClick={createCheckout}
            disabled={loading}
            className={`w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Pay with Maya"}
          </button>
        </div>
      </div>

      {/* Test Payment Credentials Section */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Test Payment Credentials
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="font-semibold">Maya/QR Payment:</p>
            <p>
              Username: <span className="font-mono">09193890579</span>
            </p>
            <p>
              Password: <span className="font-mono">Password@1</span>
            </p>
            <p>
              OTP: <span className="font-mono">123456</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">MASTERCARD:</p>
            <p>
              Number: <span className="font-mono">5453010000064154</span>
            </p>
            <p>Expiry: 12/25</p>
            <p>
              CVV: <span className="font-mono">111</span>
            </p>
            <p>
              Code: <span className="font-mono">secbarry1</span>
            </p>
          </div>
          <div>
            <p className="font-semibold">VISA:</p>
            <p>
              Number: <span className="font-mono">4123450131001381</span>
            </p>
            <p>Expiry: 12/25</p>
            <p>
              CVV: <span className="font-mono">123</span>
            </p>
            <p>
              Mand Code: <span className="font-mono">mctest1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
