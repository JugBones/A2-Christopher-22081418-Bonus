module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
      company_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company_address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contacts', // References the contacts table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  
    return Company;
  };
  