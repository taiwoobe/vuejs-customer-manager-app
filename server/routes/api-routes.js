// Initialize express and express router
const express = require('express');
const router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Yeah, Our API is working!',
        message: 'Welcome to customer-management-API created with love!'
    });
});

// Import customer controller
var customerController = require('../controllers/customer-controller');

router.get('/customers', customerController.getAll);
router.post('/customers', customerController.create);

router.get('/customers/:customer_id', customerController.findById);
router.patch('/customers/:customer_id', customerController.update);
router.put('/customers/:customer_id', customerController.update);
router.delete('/customers/:customer_id', customerController.delete);

// Export API routes
module.exports = router;