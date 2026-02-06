const express = require('express');
const router = express.Router();
const PesquisaControlador = require('./controlador/index');

router.get('/registros', (req, res) => {
	PesquisaControlador.recuperarGrid(req, res);
});

router.post('/cadastro', (req, res) => {
	PesquisaControlador.cadastrarItem(req, res);
});

router.delete('/deletar-paciente/:id', (req, res) => {
	PesquisaControlador.excluirPaciente(req, res);
});
module.exports = router;
