const express = require('express');
const router = express.Router();
const controller = require('../controllers/meetingController');

// Meetings CRUD
router.get('/meetings', controller.getAllMeetings);
router.get('/meetings/:id', controller.getMeetingById);
router.post('/meetings', controller.createMeeting);
router.put('/meetings/:id', controller.updateMeeting);
router.delete('/meetings/:id', controller.deleteMeeting);

module.exports = router;
