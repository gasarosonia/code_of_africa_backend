const { Op } = require('sequelize');
const Transaction = require('../models/Transaction');

// Add a transaction
exports.addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({ message: 'Transaction added successfully!', transaction });
  } catch (error) {
    res.status(500).json({ error: 'Error adding transaction' });
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};

// Get transactions by date range
exports.getTransactionsByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const transactions = await Transaction.findAll({
      where: {
        date: {
          [Op.between]: [new Date(startDate), new Date(endDate)],
        },
      },
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error generating report' });
  }
};

let currentBudget = 0; // In-memory storage for the budget

// Update the setBudget function
exports.setBudget = (req, res) => {
  const { budget } = req.body;
  if (!budget) {
    return res.status(400).json({ error: 'Budget is required' });
  }
  currentBudget = budget; // Store the budget
  res.status(200).json({ message: 'Budget set successfully', budget: currentBudget });
};

// Add a function to get the current budget
exports.getBudget = (req, res) => {
  res.status(200).json({ budget: currentBudget });
};
