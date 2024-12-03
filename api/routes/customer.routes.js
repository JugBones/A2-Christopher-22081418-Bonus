module.exports = app => {
  const custs = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  router.post("/booths/:boothId/custs", custs.create);

  router.get("/booths/:boothId/custs", custs.findAll);

  router.get("/booths/:boothId/custs/:customerId", custs.findOne);

  router.put("/booths/:boothId/custs/:customerId", custs.update);

  router.delete("/booths/:boothId/custs/:customerId", custs.delete);

  app.use('/api', router);
};
