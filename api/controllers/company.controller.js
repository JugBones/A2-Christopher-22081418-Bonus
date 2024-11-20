const db = require("../models");
const Companies = db.companies;

// Create a company
exports.create = (req, res) => {
  const { company_name, company_address, contact_id } = req.body;

  // Validate request
  if (!company_name || !company_address) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const company = {
    company_name,
    company_address,
    contact_id,
  };

  Companies.create(company)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error creating the company." });
    });
};

// Get all companies
exports.findAll = (req, res) => {
  Companies.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error retrieving companies." });
    });
};

// Get one company by ID
exports.findOne = (req, res) => {
  const id = req.params.companyId;

  Companies.findByPk(id)
    .then((data) => {
      if (data) res.send(data);
      else res.status(404).send({ message: `Company with id=${id} not found.` });
    })
    .catch((err) => {
      res.status(500).send({ message: `Error retrieving company with id=${id}` });
    });
};

// Update a company
exports.update = (req, res) => {
  const id = req.params.companyId;

  Companies.update(req.body, { where: { company_id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Company was updated successfully." });
      } else {
        res.send({ message: `Cannot update company with id=${id}. Maybe company was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error updating company with id=${id}` });
    });
};

// Delete a company
exports.delete = (req, res) => {
  const id = req.params.companyId;

  Companies.destroy({ where: { company_id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Company was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete company with id=${id}. Maybe company was not found!` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Could not delete company with id=${id}` });
    });
};
