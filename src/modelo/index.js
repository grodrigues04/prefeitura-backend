const clientDb = require('../../mongo');
const constantes = require('../contantes');
const PesquisaModelo = {
	recuperarGrid: async () => {
		try {
			await clientDb.client.connect();
			const database = await clientDb.client.db(constantes.constantes.db_name);
			const collection = await database.collection(constantes.constantes.db_collections.dados);
			return await collection.find().toArray();
		} catch (e) {
			console.log('Ocorreu um erro ao recuperar os itens da tabela', e);
		} finally {
			clientDb.client.close();
		}
	},
	cadastrarItem: async (data) => {
		console.log('Data modelo', data);
		try {
			await clientDb.client.connect();
			const database = await clientDb.client.db(constantes.constantes.db_name);
			const collection = await database.collection(constantes.constantes.db_collections.dados);
			return await collection.insertOne(data);
		} catch (e) {
			console.log('Ocorreu um erro ao cadastrar um item na tabela', e);
		}
	}
};

module.exports = PesquisaModelo;
