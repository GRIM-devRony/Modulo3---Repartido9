const { Schema, model } = require('mongoose');

const GenerosSchema = new Schema({ 
    Accion: {type: String},

    Fantasia: {type : Array}, 
    
    Terror : {type : String} 
    
});

module.exports = model('generos', GenerosSchema )