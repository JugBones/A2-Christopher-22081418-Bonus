module.exports = app => {
    const booths = require("../controllers/booth.controller.js");
  
    var router = require("express").Router();
  
    router.post("/booths/", booths.create);
  
    router.get("/booths/", booths.findAll);
  
    router.get("/booths/:boothId", booths.findOne);
  
    router.put("/booths/:boothId", booths.update);
  
    router.delete("/booths/:boothId", booths.delete);
  
    app.use('/api', router);
};