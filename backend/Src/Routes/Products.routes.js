// const express = require('express');
// const { getProduct } = require('../Controllers/productController');
import { getProduct, createProduct } from "../Controllers/productController.js";

import {Router} from 'express'
const router = Router()

router.route('/api/products').get(getProduct)
router.route("/api/createproducts/").post(createProduct);


// module.exports = router;
export default  router;