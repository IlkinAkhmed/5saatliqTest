import { Products } from "../models/productModel.js"


// post
export const postProduct = async (req, res) => {
    try {
        const newProduct = new Products({
            ...req.body
        })
        await newProduct.save()
        res.status(200).send("Product Created Successfully")
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// delete
export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndDelete(id)
        res.status(200).send("Product deleted successfuly")
    } catch (error) {
        res.status(500).send(error.message)

    }
}

// getById
export const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Products.findById(id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)

    }
}


// getAll
export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)

    }
}