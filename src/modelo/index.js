const clientDb = require('../../mongo');
const constantes = require('../contantes');
const { ObjectId } = require('mongodb');
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
		try {
			await clientDb.client.connect();
			const database = await clientDb.client.db(constantes.constantes.db_name);
			const collection = await database.collection(constantes.constantes.db_collections.dados);
			if (data.alteracao) {
				const id = new ObjectId(data._id);
				await collection.deleteOne({
					_id: id
				});
				delete data.alteracao;
				delete data._id;
			}
			return await collection.insertOne(data);
		} catch (e) {
			console.log('Ocorreu um erro ao cadastrar um item na tabela', e);
		}
	},

	excluirPaciente: async (id) => {
		try {
			await clientDb.client.connect();
			const database = await clientDb.client.db(constantes.constantes.db_name);
			const collection = await database.collection(constantes.constantes.db_collections.dados);
			return await collection.deleteOne({
				_id: id
			});
		} catch (e) {
			console.log('Ocorreu um erro ao excluir um item na tabela', e);
		}
	}
};

module.exports = PesquisaModelo;
