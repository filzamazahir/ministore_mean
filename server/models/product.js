var mongoose = require('mongoose');

//create a schema called ProductSchema
var ProductSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    description: String,
    quantity: Number,
    created_at: Date
});

//Validations
ProductSchema.path('name').required(true, 'Product name cannot be blank');
ProductSchema.path('quantity').required(true, 'Product Quantity cannot be blank');


mongoose.model ('Product', ProductSchema); //set this schema as Product in our model

