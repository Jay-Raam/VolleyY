const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI =
  "mongodb+srv://jauvalue:Tby5VZdwtU9GGaJw@cluster0.pi9vv.mongodb.net/jay?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));

// Define schemas and models

// Company Schema and Model
const productSchema = new mongoose.Schema({
  URL: { type: String, required: true },
  Product_Name: { type: String, required: true },
  Product_ID: { type: String, required: true },
  Listing_Price: { type: Number, required: true },
  Price: { type: Number, required: true },
  Discount: { type: Number, default: 0 },
  Brand: { type: String, required: true },
  Description: { type: String, required: true },
  Rating: { type: Number, default: 0 },
  Reviews: { type: Number, default: 0 },
  Images: [{ type: String, required: true }],
  Last_Visited: { type: Date, default: Date.now },
});

const Nike = mongoose.model("Nike", productSchema);

// Route to get all products
app.get("/products", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 30;

  try {
    const products = await Nike.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Nike.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ message: "Something went wrong" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
