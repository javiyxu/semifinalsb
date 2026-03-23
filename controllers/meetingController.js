const connection = require('../config/db');

// GET all agendas
exports.getAllAgendas = (req, res) => {
    connection.query('SELECT * FROM agendas', (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

// GET agenda by ID
exports.getAgendaById = (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM agendas WHERE id=?', [id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) res.json(rows[0]);
        else res.status(404).json({ message: 'Agenda not found' });
    });
};

// CREATE agenda
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

// UPDATE agenda
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

// DELETE agenda
exports.deleteAgenda = (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM agendas WHERE id=?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows > 0) res.json({ message: 'Agenda Deleted Successfully' });
        else res.status(404).json({ message: 'Agenda Not Found' });
    });
};
