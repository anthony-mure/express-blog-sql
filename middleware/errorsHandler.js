//definisco il middleware errorsHandler
const errorsHandler = (err, req, res, next) =>{

  res.status(500).json({

    error : err.message

  });
};

//esporto il middleware
module.exports = errorsHandler;