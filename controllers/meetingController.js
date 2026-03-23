//SQL
const connection = require('../config/db');

//Get all meetings
exports.getAllMeetings = (req, res) => {
    connection.query('SELECT * FROM meetings', (err, rows, fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search a meeting by ID
exports.getMeetingById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM meetings WHERE id=?', [id], (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows);
        else
            res.status(404).json({ message: 'Meeting not found' });
    });
};

//Create a new meeting
//CRUD - Create
exports.createMeeting = (req, res) => {
    const { meeting_title, host, department, meeting_type, scheduled_date } = req.body;
    connection.query('INSERT INTO meetings (meeting_title, host, department, meeting_type, scheduled_date) VALUES (?,?,?,?,?)',
      [meeting_title, host, department, meeting_type, scheduled_date], (err, result) => {
        if (err) throw err;
            res.json({ message: 'Meeting Created Successfully', meetingId: result.insertId });
    });
};

//Update a meeting
//CRUD - Update
exports.updateMeeting = (req, res) => {
    const { meeting_title, host, department, meeting_type, scheduled_date, id } = req.body;
    connection.query("UPDATE meetings SET meeting_title=?, host=?, department=?, meeting_type=?, scheduled_date=? WHERE id=?",
      [meeting_title, host, department, meeting_type, scheduled_date, id],
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Meeting Updated Successfully" });
        } else {
            res.status(404).json({ message: "Meeting Not Found" });
        }
      }
    );
};

//Delete a meeting
//CRUD - Delete
exports.deleteMeeting = (req, res) => {
    const id = req.body.id;
    connection.query("DELETE FROM meetings WHERE id=?", [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Meeting Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Meeting Not Found" });
        }
    });
};

//Get all zoom sessions
exports.getAllZoomSessions = (req, res) => {
    connection.query('SELECT * FROM zoom_sessions', (err, rows, fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search a zoom session by ID
exports.getZoomSessionById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM zoom_sessions WHERE id=?', [id], (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows);
        else
            res.status(404).json({ message: 'Zoom Session not found' });
    });
};

//Create a new zoom session
//CRUD - Create
exports.createZoomSession = (req, res) => {
    const { session_title, organizer, zoom_link, platform, session_date } = req.body;
    connection.query('INSERT INTO zoom_sessions (session_title, organizer, zoom_link, platform, session_date) VALUES (?,?,?,?,?)',
      [session_title, organizer, zoom_link, platform, session_date], (err, result) => {
        if (err) throw err;
            res.json({ message: 'Zoom Session Created Successfully', sessionId: result.insertId });
    });
};

//Update a zoom session
//CRUD - Update
exports.updateZoomSession = (req, res) => {
    const { session_title, organizer, zoom_link, platform, session_date, id } = req.body;
    connection.query("UPDATE zoom_sessions SET session_title=?, organizer=?, zoom_link=?, platform=?, session_date=? WHERE id=?",
      [session_title, organizer, zoom_link, platform, session_date, id],
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Zoom Session Updated Successfully" });
        } else {
            res.status(404).json({ message: "Zoom Session Not Found" });
        }
      }
    );
};

//Delete a zoom session
//CRUD - Delete
exports.deleteZoomSession = (req, res) => {
    const id = req.body.id;
    connection.query("DELETE FROM zoom_sessions WHERE id=?", [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Zoom Session Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Zoom Session Not Found" });
        }
    });
};

//Get all study sessions
exports.getAllStudySessions = (req, res) => {
    connection.query('SELECT * FROM study_sessions', (err, rows, fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search a study session by ID
exports.getStudySessionById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM study_sessions WHERE id=?', [id], (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows);
        else
            res.status(404).json({ message: 'Study Session not found' });
    });
};

//Create a new study session
//CRUD - Create
exports.createStudySession = (req, res) => {
    const { subject, facilitator, topic, study_mode, session_date } = req.body;
    connection.query('INSERT INTO study_sessions (subject, facilitator, topic, study_mode, session_date) VALUES (?,?,?,?,?)',
      [subject, facilitator, topic, study_mode, session_date], (err, result) => {
        if (err) throw err;
            res.json({ message: 'Study Session Created Successfully', sessionId: result.insertId });
    });
};

//Update a study session
//CRUD - Update
exports.updateStudySession = (req, res) => {
    const { subject, facilitator, topic, study_mode, session_date, id } = req.body;
    connection.query("UPDATE study_sessions SET subject=?, facilitator=?, topic=?, study_mode=?, session_date=? WHERE id=?",
      [subject, facilitator, topic, study_mode, session_date, id],
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Study Session Updated Successfully" });
        } else {
            res.status(404).json({ message: "Study Session Not Found" });
        }
      }
    );
};

//Delete a study session
//CRUD - Delete
exports.deleteStudySession = (req, res) => {
    const id = req.body.id;
    connection.query("DELETE FROM study_sessions WHERE id=?", [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Study Session Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Study Session Not Found" });
        }
    });
};

//Get all participants
exports.getAllParticipants = (req, res) => {
    connection.query('SELECT * FROM participants', (err, rows, fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search a participant by ID
exports.getParticipantById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM participants WHERE id=?', [id], (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows);
        else
            res.status(404).json({ message: 'Participant not found' });
    });
};

//Create a new participant
//CRUD - Create
exports.createParticipant = (req, res) => {
    const { full_name, email, role, team, joined_date } = req.body;
    connection.query('INSERT INTO participants (full_name, email, role, team, joined_date) VALUES (?,?,?,?,?)',
      [full_name, email, role, team, joined_date], (err, result) => {
        if (err) throw err;
            res.json({ message: 'Participant Created Successfully', participantId: result.insertId });
    });
};

//Update a participant
//CRUD - Update
exports.updateParticipant = (req, res) => {
    const { full_name, email, role, team, joined_date, id } = req.body;
    connection.query("UPDATE participants SET full_name=?, email=?, role=?, team=?, joined_date=? WHERE id=?",
      [full_name, email, role, team, joined_date, id],
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Participant Updated Successfully" });
        } else {
            res.status(404).json({ message: "Participant Not Found" });
        }
      }
    );
};

//Delete a participant
//CRUD - Delete
exports.deleteParticipant = (req, res) => {
    const id = req.body.id;
    connection.query("DELETE FROM participants WHERE id=?", [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Participant Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Participant Not Found" });
        }
    });
};

//Get all agendas
exports.getAllAgendas = (req, res) => {
    connection.query('SELECT * FROM agendas', (err, rows, fields) => {
        if (err) throw err;
            res.json(rows);
    });
};

//Search an agenda by ID
exports.getAgendaById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM agendas WHERE id=?', [id], (err, rows, fields) => {
        if (err) throw err;
        if (rows.length > 0)
            res.json(rows);
        else
            res.status(404).json({ message: 'Agenda not found' });
    });
};

//Create a new agenda
//CRUD - Create
exports.createAgenda = (req, res) => {
    const { agenda_title, assigned_to, priority, status, due_date } = req.body;
    connection.query('INSERT INTO agendas (agenda_title, assigned_to, priority, status, due_date) VALUES (?,?,?,?,?)',
      [agenda_title, assigned_to, priority, status, due_date], (err, result) => {
        if (err) throw err;
            res.json({ message: 'Agenda Created Successfully', agendaId: result.insertId });
    });
};

//Update an agenda
//CRUD - Update
exports.updateAgenda = (req, res) => {
    const { agenda_title, assigned_to, priority, status, due_date, id } = req.body;
    connection.query("UPDATE agendas SET agenda_title=?, assigned_to=?, priority=?, status=?, due_date=? WHERE id=?",
      [agenda_title, assigned_to, priority, status, due_date, id],
      (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Agenda Updated Successfully" });
        } else {
            res.status(404).json({ message: "Agenda Not Found" });
        }
      }
    );
};

//Delete an agenda
//CRUD - Delete
exports.deleteAgenda = (req, res) => {
    const id = req.body.id;
    connection.query("DELETE FROM agendas WHERE id=?", [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.json({ message: "Agenda Deleted Successfully" });
        } else {
            res.status(404).json({ message: "Agenda Not Found" });
        }
    });
};