const db = require("../models");
const Booths = db.booths;
const Staffs = db.staffs;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    console.log(req.body); // Debug log
    
    const booth = {
        name: req.body.name,
        category: req.body.category
    };

    Booths.create(booth)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all Booths
exports.findAll = (req, res) => {
    Booths.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one booth by id
exports.findOne = (req, res) => {
    const id = req.params.boothId;

    Booths.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving booth with id=" + id
            });
        }
    );
};

// Update one booth by id
exports.update = (req, res) => {
    const id = req.params.boothId;

    Booths.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "booth was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update booth`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating booth with id=" + id
        });
    });
};

// Delete one booth by id
exports.delete = (req, res) => {
    const id = parseInt(req.params.boothId);

    Staffs.destroy({
        where: { boothId: id }
    })
    .then(num => {
        Booths.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "booth was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete booth`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete booth with id=" + id
            });
        });
    });
};