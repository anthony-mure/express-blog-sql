
//importo l'array contenuto in dataPosts
const posts = require('../data/dataPosts.js');

//rotta INDEX
const index = (req, res) =>{

  //recupero i parametri passati da query string
  const tag = req.query.tags;

  //definisco un array da restituire
  let filteredPosts = posts;

  //controllo il valore di tags e se esiste eseguo il filtraggio
  if(tag){
    filteredPosts = posts.filter(item => item.tags.includes(tag.toLowerCase()));
  };

  res.json(filteredPosts);

};

//rotta SHOW
const show = (req, res) =>{

  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

 //controllo se il post è esistente, in caso contrario, return status 404 e un messaggio d’errore 
  if(!post){

    return res.status(404).json({ error : "404 NOT FOUND", message : "Il post NON è presente!"});
    
  };

  res.json(post);

};

//rotta CREATE
const store = (req, res) =>{

  //generare il nuovo id
  const newId = posts[posts.length - 1].id + 1;

  //recuperare i dati del body della richiesta
  const { titolo, contenuto, immagine, tags } = req.body;

  //push del nuovo oggetto dentro l'array
  posts.push({
    id : newId,
    titolo,
    contenuto,
    immagine,
    tags
  });

  //restituisco status e risposta del corretto inserimento
  res.status(201).json({ result : true, message : "Inserimento avvenuto con successo"});

  console.log(req.body);

};

//rotta UPDATE
const update = (req, res) =>{

  //recupero l'id della richiesta del body per recuperare il post nell'array
  const id = parseInt(req.params.id);

  //recupero il post nell'array
  const post = posts.find(item => item.id === id);

  //controllo se il post è esistente, in caso contrario, return status 404 e un messaggio d’errore 
  if(!post){

    return res.status(404).json({ error : "404 NOT FOUND", message : "Il post NON è presente!"});
    
  };

  //modifica delle risorse
  post.titolo = req.body.titolo;
  post.contenuto = req.body.contenuto;
  post.immagine = req.body.immagine;
  post.tags = req.body.tags;

  res.send(post);

  console.log(post);

};

//rotta PATCH
const modify = (req, res) =>{

  res.send(`Modifica parziale del post con id: ${req.params.id}`);

};

//rotta DELETE
const destroy = (req, res) =>{

  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  //controllo se il post è esistente, in caso contrario, return status 404 e un messaggio d’errore 
  if(!post){

    return res.status(404).json({ error : "404 NOT FOUND", message : "Il post NON è presente!"});
    
  }

  posts.splice(posts.indexOf(post), 1);

  res.sendStatus(204);

  console.log(posts);

};


//esporto il modulo

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}