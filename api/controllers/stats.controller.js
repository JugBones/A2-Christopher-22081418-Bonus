const db = require("../models");
const Phones = db.phones;
const Contacts = db.contacts;
const Companies = db.companies; 
const Op = db.Sequelize.Op;

exports.calculate = async (req, res) => {
    try {
        // Calculate stats using async/await
        const totalContacts = await Contacts.count();
        const totalPhones = await Phones.count();
        const totalCompanies = await Companies.count(); 
        const lastUpdatedContact = await Contacts.max('updatedAt');
        const oldestContact = await Contacts.min('createdAt');

        // Send the aggregated stats as a response
        res.send({
            totalContacts: totalContacts,
            totalPhones: totalPhones,
            totalCompanies: totalCompanies, 
            lastUpdatedContact: lastUpdatedContact,
            oldestContact: oldestContact,
        });
    } catch (error) {
        console.error("Error calculating stats:", error);
        res.status(500).send({
            message: "An error occurred while calculating stats.",
        });
    }
};
