const asyncHandler = require('express-async-handler');

//import models
const Ticket = require('../models/ticketModel');
const User = require('../models/userModel');

// @desc    Get all tickets for current user
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' });
});

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' });
});

// @desc    Get ticket for current user
// @route   GET /api/tickets/:id
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTicket' });
});

module.exports = {
  getTickets,
  createTicket,
};
