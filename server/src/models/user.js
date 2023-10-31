module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      branchId: {
        type: Sequelize.INTEGER,
      },
      roleId: {
        type: Sequelize.INTEGER,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      token: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  user.associate = (models) => {
    user.belongsTo(models.branch, { foreignKey: "branchId" });
    user.belongsTo(models.role, { foreignKey: "roleId" });
    user.hasMany(models.event, { foreignKey: "userId" });
  };

  return user;
};
