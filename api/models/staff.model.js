module.exports = (sequelize, Sequelize) => {
    const Staff = sequelize.define("staff", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        staff_type: {
            type: Sequelize.STRING,
        },
        staff_number: {
            type: Sequelize.STRING,
        },
        staff_name: { // Add staff_name field
            type: Sequelize.STRING,
        },
        boothId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'booths',
                key: 'id',
            }
        }
    });

    return Staff;
};
