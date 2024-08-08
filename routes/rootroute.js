const express = require("express");
const rootcontroller = require("../controllers/rootcontroller");
const router = express.Router();

router.get("/", rootcontroller);

const getproductcontroller = require("../controllers/products/getproductcontroller");


router.get("/", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/subcategory/:subcategory", getproductcontroller);
module.exports = router;
