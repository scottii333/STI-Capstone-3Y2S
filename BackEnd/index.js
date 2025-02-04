// server.mjs
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());

// Enable CORS for all origins
app.use(cors());

app.post("/api/create-checkout", async (req, res) => {
  const { amount, description, redirectUrl } = req.body;

  // PayMaya Developer Sandbox endpoint for creating a checkout
  const mayaUrl = "https://pg-sandbox.paymaya.com/checkout/v1/checkouts";

  const checkoutPayload = {
    totalAmount: {
      value: amount,
      currency: "PHP",
    },
    buyer: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+639123456789",
    },
    redirectUrl: {
      success: `${redirectUrl}/success`,
      failure: `${redirectUrl}/decline`,
      cancel: `${redirectUrl}/cancel`,
    },
    requestReferenceNumber: "123456789", // Replace with your logic for generating reference numbers
    items: [
      {
        name: description || "Sample Product",
        quantity: 1,
        totalAmount: {
          value: amount,
          currency: "PHP",
        },
      },
    ],
  };

  try {
    const response = await axios.post(mayaUrl, checkoutPayload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          `pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah:sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl`
        ).toString("base64")}`,
      },
    });

    // Assuming the response contains a redirectUrl for the checkout page
    res.status(200).json({ checkoutUrl: response.data.redirectUrl });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create checkout" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
