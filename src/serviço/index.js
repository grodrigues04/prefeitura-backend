const pesquisaModelo = require('../modelo/index');

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
	}
};

module.exports = PesquisaServico;
