var mongoose = require('mongoose');

//create a schema called CustomerSchema
var CustomerSchema = new mongoose.Schema({
    name: String,
    created_at: Date
});

//Validations
CustomerSchema.path('name').required(true, 'Name cannot be blank');


mongoose.model ('Customer', CustomerSchema); //set this schema as Customer in our model