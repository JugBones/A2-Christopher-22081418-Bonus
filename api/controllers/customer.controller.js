const db = require("../models");
const Custs = db.custs;
const Op = db.Sequelize.Op;

// Create customer
exports.create = (req, res) => {
    const customer = {
        customer_name: req.body.customer_name,
        customer_address: req.body.customer_address,
        boothId: parseInt(req.params.boothId)
    };

    Custs.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get all custs associated with a booth
exports.findAll = (req, res) => {
    Custs.findAll({
        where: {
            boothId: parseInt(req.params.boothId)
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one customer by id associated with a booth
exports.findOne = (req, res) => {
    Custs.findOne({
        where: {
            boothId: req.params.boothId,
            id: req.params.customerId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update one customer by id associated with a booth
exports.update = (req, res) => {
    const id = req.params.customerId;

    Custs.update(req.body, {
        where: { id: id, boothId: req.params.boothId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
};

// Delete one customer by id associated with a booth
exports.delete = (req, res) => {
    const id = req.params.customerId;

    Custs.destroy({
        where: { id: id, boothId: req.params.boothId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with id=" + id
            });
        });
};
