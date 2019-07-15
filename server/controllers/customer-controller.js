// Import Customer model
Customer = require('../models/customer-model');

// Retrieve and return all customer from the database.
exports.getAll = (req, res) => {
    Customer.find(function (err, customer) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else {
            res.json({
                status: "success",
                message: "Customers retrieved successfully",
                data: customer
            });
        }
    });
};

// Handle create customer actions
exports.create = (req, res) => {
    let customer = new Customer();
    customer.name = req.body.name ? req.body.name : customer.name;
    customer.gender = req.body.gender;
    customer.email = req.body.email;
    customer.phone = req.body.phone;

    // save the customer and check for errors
    customer.save(function (err) {
        if (err) { 
            res.json({
                status: "error",
                message: err,
            });
        }
        else {
            res.json({
                status: "success",
                message: 'New customer created!',
                data: customer
            });
        }
    });
};

// Handle view customer info
exports.findById = (req, res) => {
    Customer.findById(req.params.customer_id, function (err, customer) {
        if (err) {
            res.json({  
                status: "error",
                message: err, 
            });
        }
        else {
            res.json({
                status: "success",
                message: 'Single customer details successful!',
                data: customer
            });
        }
    });
};

// Handle update customer info
exports.update = (req, res) => {
    Customer.findById(req.params.customer_id, function (err, customer) {
        if (err) {
            res.send(err);
        }
        customer.name = req.body.name ? req.body.name : customer.name;
        customer.gender = req.body.gender;
        customer.email = req.body.email;
        customer.phone = req.body.phone;

        // save the customer and check for errors
        customer.save(function (err) {
            if (err) {
                res.json({  
                    status: "error",
                    message: err, 
                });
            }
            else {
                res.json({
                    status: "success",
                    message: 'customer Info updated',
                    data: customer
                });
            }
        });
    });
};

// Handle delete customer
exports.delete = (req, res) => {
    Customer.deleteOne({
        _id: req.params.customer_id
    }, function (err) {
        if (err) {
            res.json({  
                status: "error",
                message: err, 
            });
        }
        else {
            res.json({
                status: "success",
                message: 'customer deleted'
            });
        } 
    });
};