const connection = require('../database/connection');
module.exports = {
	async index(request, response){
		const ong_id = request.headers.author;
		const listaEspecifica = await connection('incidents').select('*').where('ong_id', ong_id);

		return response.json(listaEspecifica);
	}
}