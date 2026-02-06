const pesquisaModelo = require('../modelo/index');
const { ObjectId } = require('mongodb');
const PesquisaServico = {
	recuperarGrid: async () => {
		try {
			return await pesquisaModelo.recuperarGrid();
		} catch (e) {
			console.log('Ocorreu um erro em pesquisa servico');
		}
	},
	cadastrarItem: async (data) => {
		try {
			return await pesquisaModelo.cadastrarItem(data);
		} catch (e) {
			console.log('Erro no controlador do servico', e);
		}
	},
	excluirPaciente: async (id) => {
		try {
			if (id) {
				const idFormatado = new ObjectId(id);
				return await pesquisaModelo.excluirPaciente(idFormatado);
			} else {
				console.log('Precisa de ID para excluir');
			}
		} catch (e) {
			console.log('Erro ao tentar excluir', e);
		}
	}
};

module.exports = PesquisaServico;
