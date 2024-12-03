module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      customer_name: {
          type: Sequelize.STRING
      },
      customer_address: {
          type: Sequelize.STRING
      },
      boothId: {
          type: Sequelize.INTEGER,
          references: {
              model: 'booths',
              key: 'id',
          }
      }
  });

  return Customer;
};
