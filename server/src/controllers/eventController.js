const {
  createEventService,
  findEventsByIdService,
} = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const { eventName } = req.body;
    const { id } = req.user;

    const result = await createEventService(eventName, id);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const findEventsByIdController = async (req, res) => {
  try {
    const { id } = req.user;

    const result = await findEventsByIdService(id);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  createEventController,
  findEventsByIdController,
};
