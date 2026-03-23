const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendaController');

router.get('/agendas', controller.getAllAgendas);
router.get('/agendas/:id', controller.getAgendaById);
router.post('/agendas', controller.createAgenda);
router.put('/agendas/:id', controller.updateAgenda);
router.delete('/agendas/:id', controller.deleteAgenda);

module.exports = router;
