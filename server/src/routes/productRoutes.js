import express from "express"
import { deleteProduct, getAllProducts, getProductById, postProduct } from "../controllers/productController.js"
const router = express.Router()

router.get('/product', getAllProducts)
router.get('/product/:id', getProductById)
router.post('/product', postProduct)
router.delete('/product/:id', deleteProduct)


export default router