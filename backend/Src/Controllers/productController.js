import { Product } from "../Models/productSchema.js";

const getProduct = (req, res) => {
  res.send("Hello, this is the product route from the controller");
};

const createProduct = async (req, res) => {
  const {
    Id,
    Name,
    Title,
    Price,
    Discount,
    Images,
    Category,
    Description,
    CreatedBy,
  } = req.body;

  try {
    // Check for truthiness of required fields
    if (
      !(
        Id &&
        Name &&
        Title &&
        Title.LongTitle &&
        Title.ShortTitle &&
        Price &&
        Price.Mrp &&
        Price.Cost &&
        Price.Discount &&
        Images &&
        Images.ImageUrl &&
        Category &&
        Description &&
        CreatedBy
      )
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a product with the same ID already exists
    const existingProduct = await Product.findOne({ Id });

    if (existingProduct) {
      return res
        .status(400)
        .json({
          message: "Product ID is already in use or the product already exists",
        });
    }

    // Create a new product
    const createdProduct = await Product.create({
      Id,
      Name,
      Title,
      Price,
      Discount,
      Images,
      Category,
      Description,
      CreatedBy,
    });

    // Respond with the created product and a success message
    res
      .status(201)
      .json({ message: "Product created successfully", createdProduct });
  } catch (error) {
    // Handle specific validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    // Handle other server errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getProduct, createProduct };
