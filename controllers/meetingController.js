const connection = require('../config/db'); // your MySQL connection

// Get all meetings
exports.getAllMeetings = (req, res) => {
    connection.query('SELECT * FROM meetings', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

// Get meeting by ID
exports.getMeetingById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM meetings WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows);
        else res.status(404).json({ message: 'Meeting not found' });
    });
};

// Create a new meeting
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

// Update a meeting
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

// Delete a meeting
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
