const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/meetingController');

//Route to get all meetings
router.get('/meetings', meetingController.getAllMeetings);

//Route to search meetings by ID
router.get('/meetings/:id', meetingController.getMeetingById);

//Routes to create
router.post("/meetings", meetingController.createMeeting);

//Routes to edit a meeting
router.put("/meetings", meetingController.updateMeeting);

//Route to delete a meeting
router.delete("/meetings", meetingController.deleteMeeting);

//Route to get all zoom sessions
router.get('/zoom-sessions', meetingController.getAllZoomSessions);

//Route to search zoom sessions by ID
router.get('/zoom-sessions/:id', meetingController.getZoomSessionById);

//Routes to create
router.post("/zoom-sessions", meetingController.createZoomSession);

//Routes to edit a zoom session
router.put("/zoom-sessions", meetingController.updateZoomSession);

//Route to delete a zoom session
router.delete("/zoom-sessions", meetingController.deleteZoomSession);

//Route to get all study sessions
router.get('/study-sessions', meetingController.getAllStudySessions);

//Route to search study sessions by ID
router.get('/study-sessions/:id', meetingController.getStudySessionById);

//Routes to create
router.post("/study-sessions", meetingController.createStudySession);

//Routes to edit a study session
router.put("/study-sessions", meetingController.updateStudySession);

//Route to delete a study session
router.delete("/study-sessions", meetingController.deleteStudySession);

//Route to get all participants
router.get('/participants', meetingController.getAllParticipants);

//Route to search participants by ID
router.get('/participants/:id', meetingController.getParticipantById);

//Routes to create
router.post("/participants", meetingController.createParticipant);

//Routes to edit a participant
router.put("/participants", meetingController.updateParticipant);

//Route to delete a participant
router.delete("/participants", meetingController.deleteParticipant);

//Route to get all agendas
router.get('/agendas', meetingController.getAllAgendas);

//Route to search agendas by ID
router.get('/agendas/:id', meetingController.getAgendaById);

//Routes to create
router.post("/agendas", meetingController.createAgenda);

//Routes to edit an agenda
router.put("/agendas", meetingController.updateAgenda);

//Route to delete an agenda
router.delete("/agendas", meetingController.deleteAgenda);

module.exports = router;