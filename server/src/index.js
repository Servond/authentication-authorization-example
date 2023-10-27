const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const db = require("./models");
db.sequelize.sync({ alter: true });

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      process.env.WHITELISTED_DOMAIN &&
        process.env.WHITELISTED_DOMAIN.split(" "),
    ],
  })
);
const branchRouter = require("./routes/branchRouter");
const authRouter = require("./routes/authRouter");
const eventRouter = require("./routes/eventRouter");

app.use("/branchs", branchRouter);
app.use("/auth", authRouter);
app.use("/event", eventRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
});
