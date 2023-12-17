

import { Router } from "express";
import  createUser  from "../Controllers/userController.js";
const router = Router();

router.route("/signup").post(createUser);


// module.exports = router;
export default router;