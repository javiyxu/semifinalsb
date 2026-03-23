// Meetings
router.get('/meetings', meetingController.getAllMeetings);
router.get('/meetings/:id', meetingController.getMeetingById);
router.post('/meetings', meetingController.createMeeting);
router.put('/meetings/:id', meetingController.updateMeeting);      // <- added :id
router.delete('/meetings/:id', meetingController.deleteMeeting);   // <- added :id

// Zoom Sessions
router.get('/zoom-sessions', meetingController.getAllZoomSessions);
router.get('/zoom-sessions/:id', meetingController.getZoomSessionById);
router.post('/zoom-sessions', meetingController.createZoomSession);
router.put('/zoom-sessions/:id', meetingController.updateZoomSession);
router.delete('/zoom-sessions/:id', meetingController.deleteZoomSession);

// Study Sessions
router.get('/study-sessions', meetingController.getAllStudySessions);
router.get('/study-sessions/:id', meetingController.getStudySessionById);
router.post('/study-sessions', meetingController.createStudySession);
router.put('/study-sessions/:id', meetingController.updateStudySession);
router.delete('/study-sessions/:id', meetingController.deleteStudySession);

// Participants
router.get('/participants', meetingController.getAllParticipants);
router.get('/participants/:id', meetingController.getParticipantById);
router.post('/participants', meetingController.createParticipant);
router.put('/participants/:id', meetingController.updateParticipant);
router.delete('/participants/:id', meetingController.deleteParticipant);

// Agendas
router.get('/agendas', meetingController.getAllAgendas);
router.get('/agendas/:id', meetingController.getAgendaById);
router.post('/agendas', meetingController.createAgenda);
router.put('/agendas/:id', meetingController.updateAgenda);
router.delete('/agendas/:id', meetingController.deleteAgenda);
