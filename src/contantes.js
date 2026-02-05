const constantes = {
	db_name: 'prefeitura',
	db_collections: {
		dados: 'dados',
		logins: 'logins'
	},
	tipos_de_requisicao: {
		editar_perfil: 10
	},
	hash_salts: {
		password: 10
	}
};

module.exports = { constantes };
