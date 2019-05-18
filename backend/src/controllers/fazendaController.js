const Fazenda = require('../models/Fazenda');

module.exports = {

    async mostra(req, res){
        const dadosFazenda = await Fazenda.find({ }).sort("-createdAt");

        return res.json(dadosFazenda);
    },

    async store(req, res){
        const lanc_Fazenda = await Fazenda.create(req.body);

        return res.json(lanc_Fazenda);
    },

    async total(req, res){
        const total = await Fazenda.findById(req.params.id);
        const dadosFazenda = await Fazenda.find({ });

        total.set = {
            total_Fazenda: total + dadosFazenda
        };

        await total.save();

        return res.json(total);
    },

    async delete(req, res){
        const del = await Fazenda.findByIdAndDelete(req.params.id);

        return res.send('Deletado com sucesso! :)')
    }
}