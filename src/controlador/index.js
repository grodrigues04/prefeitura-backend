const PesquisaServico = require('../serviço');

const PesquisaControlador = {
	recuperarGrid: async (req, res) => {
		try {
			const resposta = await PesquisaServico.recuperarGrid();
			res.status(200).send({ resposta });
		} catch (e) {
			console.log('Ocorreu um erro ao tentar recuperar os registros:', e);
		}
	},

	cadastrarItem: async (req, res) => {
		const resposta = {
			message: '',
			data: '',
			error: []
		};
		const data = req.body.data;
		try {
			PesquisaServico.cadastrarItem(data);
			return res.status(201).send({ resposta });
		} catch (e) {
			console.log('Ocorreu um erro ao tentar cadastar item no controlador', e);
		}
	}
};

module.exports = PesquisaControlador;
