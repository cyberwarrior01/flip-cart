// const express = require('express');
// const { getProduct } = require('../Controllers/productController');
import { getProduct } from '../Controllers/productController.js';

import {Router} from 'express'
const router = Router()

router.route('/api/products').get(getProduct)


// module.exports = router;
export default  router;