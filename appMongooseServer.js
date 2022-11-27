const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

const mongoServer = 'mongodb://127.0.0.1:27017/biblioteca';
mongoose.connect(mongoServer);
const client = new MongoClient(mongoServer);

mongoose.connection.on('Open', _ => {
    console.log("BDD conectada en", mongoServer)
})


mongoose.connection.on('error', err => {
   console.log(err)
})


const Books = require('./models/librosSchema');

//inserto un libro solo
const insertOne = async() => {
    const oneBook = new Books ({ 
        Nombre : "The Hobbit",
        Autor : "J. R. R. Tolkien",
        Editorial : "Planeta",
        AnioDeEdicion : 1937
    });
    
   const bookSave =  await oneBook.save();
    return bookSave
};

//insertOne().catch(err => console.log(err));


  //inserto varios libros

 const insertMany = async () => {

    const firstBook = new Books ({
        Nombre : "The lord of the rings",
        Autor : "J. R. R. Tolkien",
        Editorial : "De bolsillo",
        AnioDeEdicion : 1954
    })

    await firstBook.save()

    
    const secondBook = new Books ({
        Nombre : "Las aventures de Tom Bombadil",
        Autor : "J. R. R. Tolkien",
        Editorial : "Penguin Books",
        AnioDeEdicion : 1934
    })

    await secondBook.save()

    const thirdBook = new Books ({
        Nombre : "Los hijos de Húrin",
        Autor : "J. R. R. Tolkien",
        Editorial : "Planeta",
        AnioDeEdicion : 2007
    })
    
    await thirdBook.save()
    

};

//insertMany().catch(err => console.log(err)); 



//hago un find a los libros de mi BDD

    const findBooks = async ()=>{
    const books = await Books.find()
    console.log(books)
  
  }
  
  //findBooks();




  //hago find a los libros editados en el siglo 21
  const findBooksXXI = async ()=>{
  const books = await Books.find({AnioDeEdicion: {$gte: 2000}});
  console.log(books)
}

//findBooksXXI();




//hago find a los libros editados por la editorial planeta
   const findBooksPlaneta = async ()=>{
   const books = await Books.find({Editorial : "Planeta"}, {Nombre : 1});
   console.log(books)
}
       
//findBooksPlaneta();



//realizo un find de los libros editados entre 1930 y 1940
    const books30to40 = async ()=>{
    const books = await Books.find({AnioDeEdicion: {$gt: 1929, $lt:1941}}, {_id: 0}) 
    console.log(books)
  
  }
  
//books30to40();




//agrego stock 37 a el libro The Hobbit
    const addStockHobbit = async()=>{
    const book = await Books.updateOne({Nombre : "The Hobbit"},{$set : { Stock : 37 } });
    console.log(book);

}

//addStockHobbit()




//inserto stock 60 a el resto de libros
    const addStockManyBooks = async() =>{
    const books = await Books.updateMany({Stock : {$exists : false }},{$set : { Stock : 60 }},{multi:true});
    console.log(books);

}

//addStockManyBooks()




   //elimino un libro de la BDD
    const deleteOne = async () => {
    const books = await Books.deleteOne({Nombre: "Las aventures de Tom Bombadil"});
    console.log(books);
}
//deleteOne();




//elimino todos los libros que pertenezcan a la editorial PLaneta
    const deleteMany = async () => {
    const books = await Books.deleteMany({Editorial : "Planeta"}); 
    console.log(books);
    }
    
//deleteMany();




//agrego una reseña a el libro the lord of the rings
    const addReview = async () => {
    const books = await Books.updateOne({Nombre : "The lord of the rings"},{$set :{ Review : {valoracion: [4,3], comentario:[ "Excelente libro!", "Buenisimo, lo recomiendo"]}}});
    console.log(books);
    }
    
//addReview();




//inserto un nuevo libro con nuevos atributos
    const insertOneBook = async () => {

    const oneBook = new Books ({ 
        Nombre : "La leyenda de Sigurd y Gudrun",
        Autor : "J. R. R. Tolkien",
        Editorial : "Minotauro",
        AnioDeEdicion : 2022,
        Review : {
            Valoracion : 5,
            Comentario : "Buenisimo el libro."
        }
    });
    
   const bookSave =  await oneBook.save();
    return bookSave

}

//insertOneBook().catch(err => console.log(err));


      const Generos = require('./models/GenerosSchema');

      const insertGenero = async () => { 
       const genero = new Generos ({ 
        Accion : "",
        Fantasia : ["The hobbit","La leyenda de Sigurd y Gudrun"],
        Terror : ""
    });

    await genero.save()
}    

insertGenero().catch(err => console.log(err));