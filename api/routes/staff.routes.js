module.exports = app => {
    const staffs = require("../controllers/staff.controller.js");
  
    var router = require("express").Router();
  
    router.post("/booths/:boothId/staffs", staffs.create);
  
    router.get("/booths/:boothId/staffs", staffs.findAll);
  
    router.get("/booths/:boothId/staffs/:staffId", staffs.findOne);
  
    router.put("/booths/:boothId/staffs/:staffId", staffs.update);
  
    router.delete("/booths/:boothId/staffs/:staffId", staffs.delete);
  
    app.use('/api', router);
};