const errorHandler = (err, req, res, next) => {
    let code = 0;
    let name = err.name;
    let message = "";
  
    switch (name) {
      case "NOT_FOUND":
        code = 404;
        message = "data_not_found";
        break;
      case "UNAUTHORIZED":
        code = 401;
        message = "probihited";
        break;
    }
    res.status(code).json({ success: false, message: message });
  };
  
  module.exports = errorHandler;