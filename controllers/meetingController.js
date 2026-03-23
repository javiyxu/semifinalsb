const connection = require('../config/db');

// ─── GET ALL MEETINGS ───
exports.getAllMeetings = (req, res) => {
    connection.query('SELECT * FROM meetings', (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
};

// ─── GET MEETING BY ID ───
exports.getMeetingById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM meetings WHERE id=?', [id], (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).json({ message: 'Meeting not found' });
    });
};

// ─── CREATE MEETING ───
exports.createMeeting = (req, res) => {
    const { meeting_title, host, department, meeting_type, scheduled_date } = req.body;
    connection.query(
        'INSERT INTO meetings (meeting_title, host, department, meeting_type, scheduled_date) VALUES (?,?,?,?,?)',
        [meeting_title, host, department, meeting_type, scheduled_date],
        (err, result) => {
            if (err) throw err;
            res.json({ message: 'Meeting Created Successfully', meetingId: result.insertId });
        }
    );
};

// ─── UPDATE MEETING ───
exports.updateMeeting = (req, res) => {
    const id = req.params.id; // <-- now comes from URL
    const { meeting_title, host, department, meeting_type, scheduled_date } = req.body;
    connection.query(
        "UPDATE meetings SET meeting_title=?, host=?, department=?, meeting_type=?, scheduled_date=? WHERE id=?",
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

// ─── DELETE MEETING ───
exports.deleteMeeting = (req, res) => {
    const id = req.params.id; // <-- now comes from URL
    connection.query(
        "DELETE FROM meetings WHERE id=?",
        [id],
        (err, result) => {
            if (err) throw err;
            if (result.affectedRows > 0) {
                res.json({ message: "Meeting Deleted Successfully" });
            } else {
                res.status(404).json({ message: "Meeting Not Found" });
            }
        }
    );
};
