//importo express 
const express = require('express');

//invoco la funzione express e salvo il risultato in una variabile
const app = express();

//definisco la porta 3000
const port = 3000;

//importo il file router per i posts
const postRouter = require('./routers/routerPosts');

//importo il middleware notFound
const notFound = require('./middleware/notFound.js');

//importo il middleware errorsHandler
const errorsHandler = require('./middleware/errorsHandler.js');

//inserisco il middleware dei file statici
app.use(express.static('public'));

//inserisco il body-parser per decifrare  il request body
app.use(express.json());

//uso il router
app.use('/posts', postRouter);


//definisco la 1 rotta
app.get('/',(req, res) =>{

  res.send("Server del mio Blog");

});

//uso il middleware notFound
app.use(notFound);

//uso il middleware errorsHandler
app.use(errorsHandler);

//restiamo in ascolto sulla porta 3000
app.listen(port, () =>{

   console.log(`Server del blog in ascolto sulla porta ${port}`);

});
