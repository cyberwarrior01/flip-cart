import express from "express";
import dotenv from "dotenv";
import conn from "./src/Config/conDb.js";
import productsRouter from "./src/Routes/Products.routes.js";
import userRouter from "./Src/Routes/User.routes.js";
import cors from "cors"
// import userRouter from "./src/Routes/User.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
conn();

// Routes
app.use("/", productsRouter);
app.use("/", userRouter);

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
