const express = require('express');
const router = express.Router();
const {
  addTransaction,
  getAllTransactions,
  getTransactionsByDate,
  setBudget,
  getBudget, // Import the new function
} = require('../controllers/transactionController');

// Existing routes
router.post('/add', addTransaction);
router.get('/', getAllTransactions);
router.get('/report', getTransactionsByDate);

// Route for setting the budget
router.post('/set-budget', setBudget);

// Route for getting the current budget
router.get('/get-budget', getBudget);

module.exports = router;
