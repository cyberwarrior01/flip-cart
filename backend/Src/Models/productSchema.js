import mongoose from "mongoose";

// Define a Mongoose schema for a product
const productSchema = mongoose.Schema({
    // Product ID, should be a string and is required
    Id: {
        type: String,
        required: [true, 'Please Enter Product Id']
    },

    // Product Name, should be a string, required, and limited to 100 characters
    Name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        maxlength: [100, "Product Name should be less than 100 characters"]
    },

    // Product Title, with ShortTitle and LongTitle both being required strings
    Title: {
        ShortTitle: { type: String, required: [true, 'Please Enter Product ShortTitle'] },
        LongTitle: { type: String, required: [true, 'Please Enter Product LongTitle'] }
    },

    // Product Price details (Mrp, Cost, Discount), all should be numbers and required
    Price: {
        Mrp: { type: Number, required: [true, 'Please Enter Product Mrp'] },
        Cost: { type: Number, required: [true, 'Please Enter Product Cost'] },
        Discount: { type: Number, required: [true, 'Please Enter Product Discount'] }
    },

    // Product Images, with ImageUrl being a required string
    Images: {
        ImageUrl: { type: String, required: [true, 'Please Enter Product ImageUrl'] }
    },

    // Product Category, should be a string, required, and restricted to specific values
    Category: {
        type: String,
        required: [true, 'Please select the Category'],
        enum: {
            values: ['Electronics', 'TVs & Appliances', 'Mobiles & Tablets', 'Fashion', 'Home & Kitchen', 'Flights', 'Beauty', 'Grocery'],
            message: 'Please select the correct Category'
        }
    },

    // Product Description, should be a string and is required
    Description: {
        type: String,
        required: [true, 'Please describe the Product']
    },

    // Seller's name, should be a string and is required
    CreatedBy: {
        type: String,
        required: [true, 'Please provide the sellerName']
    },

    // Product creation date, defaults to the current date
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

// Create a Mongoose model for the 'product' collection based on the schema
const proModel = mongoose.model('product', productSchema);

// Export the model for use in other parts of the application
export default proModel;
