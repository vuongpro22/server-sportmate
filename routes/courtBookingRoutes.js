const express = require('express');

const courtBookingController = require('../controllers/courtBookingController');

const router = express.Router();

router.get('/owner', courtBookingController.listOwnerBookings);
router.get('/user', courtBookingController.listUserBookings);
router.patch('/:id/cancel', courtBookingController.cancelBooking);

module.exports = router;
