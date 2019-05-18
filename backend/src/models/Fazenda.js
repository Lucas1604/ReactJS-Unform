const mongoose = require('mongoose');

const FazendaSchema = new mongoose.Schema({

    codigo:{
        type: String
    },

    nome:{
        type: String
    },

    fazenda:{
        talhao: {
            type: String
        },
        propriedade:{
            type: String
        }
    },

    medidas:{
        hectares: {
            type: Number
        },
        metros:{
            type: Number
        },
        ares:{
            type: Number
        }
    },

    plantas:{
        graos:{
            type: Number
        },
        cafe:{
            type: Number
        },
        cana:{
            type: Number
        }
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Fazenda', FazendaSchema);