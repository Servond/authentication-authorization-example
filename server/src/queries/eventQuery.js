const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;

const createEventQuery = async (name, userId) => {
  try {
    const res = await event.create({
      name,
      userId,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const findEventsByIdQuery = async (id) => {
  try {
    const res = await event.findAll({
      where: {
        userId: id,
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventQuery,
  findEventsByIdQuery,
};
