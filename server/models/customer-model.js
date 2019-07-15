const mongoose = require('mongoose');

// Setup schema
const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String
    // birthday: [{
    //     day: Number,
    //     month: String,
    //     year: Number
    // }]
}, {
    timestamps: true
});

// Export Customer model
let Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;