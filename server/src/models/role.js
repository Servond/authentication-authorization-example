module.exports = (sequelize, Sequelize) => {
  const role = sequelize.define(
    "role",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "roles",
    }
  );

  role.associate = (models) => {
    role.hasMany(models.user, { foreignKey: "roleId" });
  };

  return role;
};
