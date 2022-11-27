const { Schema, model } = require('mongoose');

const LibrosSchema = new Schema({ 
    Nombre: { type: String },

    Autor: { type: String },

    Editorial: { type: String },

    AnioDeEdicion : { type : Number },

    Stock : { type : Number },

    Review : { type : Object, type : Array }
});

module.exports = model('libros', LibrosSchema )