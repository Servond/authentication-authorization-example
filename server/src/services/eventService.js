const {
  createEventQuery,
  findEventsByIdQuery,
} = require("../queries/eventQuery");

const createEventService = async (name, userId) => {
  try {
    const res = await createEventQuery(name, userId);

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
