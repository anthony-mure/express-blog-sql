//definisco il middleware notFound
const notFound = (req, res, next) => {

  res.status(404).json({

    error : "404 NOT FOUND",
    message : "pagina NON trovata !"

  }); 

};

//esporto il middleware
module.exports = notFound;