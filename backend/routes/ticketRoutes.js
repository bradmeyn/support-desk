const express = require('express');
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController');
const router = express.Router();

//Re-route into note router
const noteRouter = require('./noteRoutes');
router.use('/:ticketId/notes', noteRouter);

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTickets).post(protect, createTicket);

router
  .route('/:id')
  .get(protect, getTicket)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

module.exports = router;
