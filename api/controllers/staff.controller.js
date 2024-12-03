const db = require("../models");
const Staffs = db.staffs;
const Op = db.Sequelize.Op;

// Create staff
exports.create = (req, res) => {
    const staff = {
        staff_type: req.body.staff_type,
        staff_number: req.body.staff_number,
        staff_name: req.body.staff_name, // New field
        boothId: parseInt(req.params.boothId),
    };

    Staffs.create(staff)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred",
            });
        });
};


// Get all staffs
exports.findAll = (req, res) => {
    Staffs.findAll({
        where: {
            boothId: parseInt(req.params.boothId),
        },
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred",
            });
        });
};


// Get one staff by id
exports.findOne = (req, res) => {
    Staffs.findOne({
        where: {
            boothId: req.params.boothId,
            id: req.params.staffId
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

// Update one staff by id
exports.update = (req, res) => {
    const id = req.params.staffId;

    Staffs.update(req.body, {
        where: { id: id, boothId: req.params.boothId },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Staff was updated successfully.",
                });
            } else {
                res.send({
                    message: `Cannot update Staff`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Staff with id=" + id,
            });
        });
};


// Delete one staff by id
exports.delete = (req, res) => {
    const id = req.params.staffId;

    Staffs.destroy({
        where: { id: id, boothId: req.params.boothId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Staff was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Staff`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Staff with id=" + id
            });
        });
};