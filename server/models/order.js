var mongoose = require('mongoose');

//create a schema called OrderSchema
var Schema = mongoose.Schema;
var OrderSchema = new mongoose.Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: Number,
    created_at: Date
});
//Validations
OrderSchema.path('customer').required(true, 'Customer cannot be blank in an order');
OrderSchema.path('product').required(true, 'Product cannot be blank in an order');
OrderSchema.path('quantity').required(true, 'Quantity cannot be blank in an order');


mongoose.model ('Order', OrderSchema); //set this schema as Order in our model