/* const {MongoClient} = require('mongodb');

const mongoServer = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoServer);

async function run(){
    try{
        await client.connect();
        const db = client.db('biblioteca');
        const librosCollection = db.collection('libros');
        const generosCollection = db.collection('genero');

        //Inserto un libro
        const insertTheHobbit = async () =>{
            await librosCollection.insertOne({Nombre : "The hobbit", Autor : "J. R. R. Tolkien", Editorial : "Planeta", anioDeEdicion : 1937}); 
           }

          // insertTheHobbit();
          
          //Inserto varios libros
          const insertManyLibros = async() =>{
            await librosCollection.insertMany([{Nombre : "The lord of the rings", Autor : "J. R. R. Tolkien", Editorial : "De bolsillo", anioDeEdicion : 1954},
            {Nombre : "Las aventuras de Tom Bombadil", Autor : "J. R. R. Tolkien", Editorial : "Penguin Books", anioDeEdicion : 1934},
            {Nombre : "Los hijos de Húrin", Autor : "J. R. R. Tolkien" , Editorial : "Planeta", anioDeEdicion : 2007} ]); 
        
           }
        
           //insertManyLibros()
           
           //SELECTS-----

           //ver libros editados en siglo 21
           const librosEditXXI = await librosCollection.find({anioDeEdicion: {$gt: 2000}}).toArray();
            
           //ver libros de editorial Planeta
           const librosEditPlaneta = await librosCollection.find({Editorial : "Planeta"}, {projection : {_id : 0, Nombre : 1}}).toArray(); 
          
           //libros editados entre 1930 y 1940
           const libros1930a1940 = await librosCollection.find({anioDeEdicion: {$gt: 1929, $lt:1941}}, { projection : {_id: 0}}).toArray();

           //agrego a The hobbit número de stock 37.
           const addStockTheHobbit = async () =>{
            const addStock = await librosCollection.updateOne({Nombre : "The hobbit"},{$set : { Stock : 37 } }); 
          }

           //addStockTheHobbit()

           //agrego stock a el resto de libros
            const addManyStock = async () => {
            const addStockM = await librosCollection.updateMany({Stock: {$exists : false}}, {$set : { Stock : 60}}); 
      }
           //addManyStock()
 
           //elimino un libro
           const deleteOne = async () =>{
           const delOne = await librosCollection.deleteOne({Nombre : "Las aventuras de Tom Bombadil"}); 
           }
            
           //deleteOne();

           //elimino varios libros
            const deleteMany = async () =>{
            const delMany = await librosCollection.deleteMany({Editorial: "Planeta"}); 
          }
      
           //deleteMany()

           //inserto nuevo libro con nuevos atributos
            const insertNewBook = async () =>{
            const result = await librosCollection.insertOne({Nombre: "La leyenda de Sigurd y Gudrun",Autor: "J. R. R. Tolkien",Editorial: "Minotauro",añoDeEdicion: 2022, stock: 60, review: {Valoracion : 5,Comentario : "Muy buen libro"}});
           }

           //insertNewBook();

            const addReviews = async () =>{
            const newReview = await librosCollection.updateMany({Nombre : "The lord of the rings"}, {$set :{ review : {valoracion: [4,3], comentario:[ "Excelente libro!", "Buenisimo, lo recomiendo"]}}}); 
           }
        
           //addReviews()

           //creo la coleccion generos y ubico cada libro en el suyo
            const createCollectionGeneros = async () =>{
            const result = await generosCollection.insertMany([{Acción : ""},  {Fantasía : ["The lord of the rings", "La leyenda de Sigurd y Gudrun"]}, {Terror : ""} ]);
           } 

           //createCollectionGeneros();
        
    }finally{
        
    }
}

  run().catch(console.error); */