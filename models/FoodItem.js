// Importing mongoose
const mongoose = require('mongoose');

// Creating Schema
const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    categories: [{
        type: String,
        trim: true,
    }],
    menuSectionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MenuSection'
    },
    price: {
        type: Number,
        required: true,
    },
    ingredients: [{
        type: String
    }],
    calories: {
        type: Number,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String
    },
    highlights: [{
        type: String
    }],
    spiciness: {
        type: Enumerator,
        enum: ['Low', 'Medium', 'Spicy', 'Very Spicy']
    },
    clientCode: {
        type: String,
        required: true
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    branchCode: {
        type: String,
        required: true
    },
    branchId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Branch'
    },
}, {
    timestamps: true
})

// Exporting model
module.exports = mongoose.model('FoodItem', foodItemSchema);