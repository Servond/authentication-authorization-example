const {
  createEventQuery,
  findEventsByIdQuery,
} = require("../queries/eventQuery");

const createEventService = async (name, userId, image) => {
  try {
    const res = await createEventQuery(name, userId, image);

    return res;
  } catch (err) {
    throw err;
  }
};

const findEventsByIdService = async (id) => {
  try {
    const res = await findEventsByIdQuery(id);

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findEventsByIdService,
  createEventService,
};
