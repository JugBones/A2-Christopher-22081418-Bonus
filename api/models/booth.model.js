module.exports = (sequelize, Sequelize) => {
    const Booth = sequelize.define("booth", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    }, {});
    return Booth;
};