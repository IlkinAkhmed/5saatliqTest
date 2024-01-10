import express from "express"
import mongoose from "mongoose"

const { Schema } = mongoose
const ProductSchema = new Schema({
    image: { type: String },
    title: { type: String },
    price: { type: Number },
    category: { type: String }
}, { timestamps: true })

export const Products = mongoose.model('5saatliqTest', ProductSchema)