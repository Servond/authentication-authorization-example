module.exports = (sequelize, Sequelize) => {
  const event = sequelize.define(
    "event",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  event.associate = (models) => {
    event.belongsTo(models.user, { foreignKey: "userId" });
  };

  return event;
};
