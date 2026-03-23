const connection = require('../config/db'); // your MySQL connection

// --- Meetings ---
exports.getAllMeetings = (req, res) => {
    connection.query('SELECT * FROM meetings', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getMeetingById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM meetings WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Meeting not found' });
    });
};

exports.createMeeting = (req, res) => {
    const { meeting_title, host, department, meeting_type, scheduled_date } = req.body;
    connection.query(
        'INSERT INTO meetings (meeting_title, host, department, meeting_type, scheduled_date) VALUES (?,?,?,?,?)',
        [meeting_title, host, department, meeting_type, scheduled_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Meeting Created Successfully', meetingId: result.insertId });
        }
    );
};

exports.updateMeeting = (req, res) => {
    const id = req.params.id;
    const { meeting_title, host, department, meeting_type, scheduled_date } = req.body;
    connection.query(
        'UPDATE meetings SET meeting_title=?, host=?, department=?, meeting_type=?, scheduled_date=? WHERE id=?',
        [meeting_title, host, department, meeting_type, scheduled_date, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Meeting Updated Successfully' });
            else res.status(404).json({ message: 'Meeting Not Found' });
        }
    );
};

exports.deleteMeeting = (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM meetings WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Meeting Deleted Successfully' });
            else res.status(404).json({ message: 'Meeting Not Found' });
        }
    );
};

// --- Zoom Sessions ---
exports.getAllZoomSessions = (req, res) => {
    connection.query('SELECT * FROM zoom_sessions', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getZoomSessionById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM zoom_sessions WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Zoom Session not found' });
    });
};

exports.createZoomSession = (req, res) => {
    const { session_title, organizer, zoom_link, platform, session_date } = req.body;
    connection.query(
        'INSERT INTO zoom_sessions (session_title, organizer, zoom_link, platform, session_date) VALUES (?,?,?,?,?)',
        [session_title, organizer, zoom_link, platform, session_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Zoom Session Created Successfully', sessionId: result.insertId });
        }
    );
};

exports.updateZoomSession = (req, res) => {
    const id = req.params.id;
    const { session_title, organizer, zoom_link, platform, session_date } = req.body;
    connection.query(
        'UPDATE zoom_sessions SET session_title=?, organizer=?, zoom_link=?, platform=?, session_date=? WHERE id=?',
        [session_title, organizer, zoom_link, platform, session_date, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Zoom Session Updated Successfully' });
            else res.status(404).json({ message: 'Zoom Session Not Found' });
        }
    );
};

exports.deleteZoomSession = (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM zoom_sessions WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Zoom Session Deleted Successfully' });
            else res.status(404).json({ message: 'Zoom Session Not Found' });
        }
    );
};

// --- Study Sessions ---
exports.getAllStudySessions = (req, res) => {
    connection.query('SELECT * FROM study_sessions', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getStudySessionById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM study_sessions WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Study Session not found' });
    });
};

exports.createStudySession = (req, res) => {
    const { subject, facilitator, topic, study_mode, session_date } = req.body;
    connection.query(
        'INSERT INTO study_sessions (subject, facilitator, topic, study_mode, session_date) VALUES (?,?,?,?,?)',
        [subject, facilitator, topic, study_mode, session_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Study Session Created Successfully', sessionId: result.insertId });
        }
    );
};

exports.updateStudySession = (req, res) => {
    const id = req.params.id;
    const { subject, facilitator, topic, study_mode, session_date } = req.body;
    connection.query(
        'UPDATE study_sessions SET subject=?, facilitator=?, topic=?, study_mode=?, session_date=? WHERE id=?',
        [subject, facilitator, topic, study_mode, session_date, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Study Session Updated Successfully' });
            else res.status(404).json({ message: 'Study Session Not Found' });
        }
    );
};

exports.deleteStudySession = (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM study_sessions WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Study Session Deleted Successfully' });
            else res.status(404).json({ message: 'Study Session Not Found' });
        }
    );
};

// --- Participants ---
exports.getAllParticipants = (req, res) => {
    connection.query('SELECT * FROM participants', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getParticipantById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM participants WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Participant not found' });
    });
};

exports.createParticipant = (req, res) => {
    const { full_name, email, role, team, joined_date } = req.body;
    connection.query(
        'INSERT INTO participants (full_name, email, role, team, joined_date) VALUES (?,?,?,?,?)',
        [full_name, email, role, team, joined_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Participant Created Successfully', participantId: result.insertId });
        }
    );
};

exports.updateParticipant = (req, res) => {
    const id = req.params.id;
    const { full_name, email, role, team, joined_date } = req.body;
    connection.query(
        'UPDATE participants SET full_name=?, email=?, role=?, team=?, joined_date=? WHERE id=?',
        [full_name, email, role, team, joined_date, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Participant Updated Successfully' });
            else res.status(404).json({ message: 'Participant Not Found' });
        }
    );
};

exports.deleteParticipant = (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM participants WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Participant Deleted Successfully' });
            else res.status(404).json({ message: 'Participant Not Found' });
        }
    );
};

// --- Agendas ---
exports.getAllAgendas = (req, res) => {
    connection.query('SELECT * FROM agendas', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.getAgendaById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM agendas WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Agenda not found' });
    });
};

exports.createAgenda = (req, res) => {
    const { agenda_title, assigned_to, priority, status, due_date } = req.body;
    connection.query(
        'INSERT INTO agendas (agenda_title, assigned_to, priority, status, due_date) VALUES (?,?,?,?,?)',
        [agenda_title, assigned_to, priority, status, due_date],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Agenda Created Successfully', agendaId: result.insertId });
        }
    );
};

exports.updateAgenda = (req, res) => {
    const id = req.params.id;
    const { agenda_title, assigned_to, priority, status, due_date } = req.body;
    connection.query(
        'UPDATE agendas SET agenda_title=?, assigned_to=?, priority=?, status=?, due_date=? WHERE id=?',
        [agenda_title, assigned_to, priority, status, due_date, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Agenda Updated Successfully' });
            else res.status(404).json({ message: 'Agenda Not Found' });
        }
    );
};

exports.deleteAgenda = (req, res) => {
    const id = req.params.id;
    connection.query(
        'DELETE FROM agendas WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.affectedRows > 0) res.json({ message: 'Agenda Deleted Successfully' });
            else res.status(404).json({ message: 'Agenda Not Found' });
        }
    );
};
