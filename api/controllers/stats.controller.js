const db = require("../models");
const Staffs = db.staffs;
const Booths = db.booths;
const Custs = db.custs; 
const Op = db.Sequelize.Op;

exports.calculate = async (req, res) => {
    try {
        // Calculate stats using async/await
        const totalBooths = await Booths.count();
        const totalStaffs = await Staffs.count();
        const totalCusts = await Custs.count(); 
        const lastUpdatedBooth = await Booths.max('updatedAt');
        const oldestBooth = await Booths.min('createdAt');

        // Send the aggregated stats as a response
        res.send({
            totalBooths: totalBooths,
            totalStaffs: totalStaffs,
            totalCusts: totalCusts, 
            lastUpdatedBooth: lastUpdatedBooth,
            oldestBooth: oldestBooth,
        });
    } catch (error) {
        console.error("Error calculating stats:", error);
        res.status(500).send({
            message: "An error occurred while calculating stats.",
        });
    }
};
