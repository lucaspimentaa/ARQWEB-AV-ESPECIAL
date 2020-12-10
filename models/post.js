const mongoose = require('mongoose')

// definição do esquema
const postSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    idEscritor: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    dataDeCriacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    dataDeModificacao: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// configurando o esquema no banco
module.exports = mongoose.model('post', postSchema)