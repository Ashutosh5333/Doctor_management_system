const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/User.route");
const { DoctorRouter } = require("./routes/Docter.route");
const { Authenticate } = require("./middleware/Authenticate");
const cors = require("cors");
const { AppointmentRouter } = require("./routes/BookAppoinment");
const { AdminRouter } = require("./routes/AdminRoute");
const { commentRouter } = require("./routes/comment.route");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome home ");
});

app.use(commentRouter)
app.use(AdminRouter)
app.use(UserRouter);
app.use(DoctorRouter);
// app.use(Authenticate);
app.use(AppointmentRouter);

app.listen(8000, async (req, res) => {
  try {
    await connection;
    console.log("connected to database");
  } catch (err) {
    console.log("comething went wrong in connected");
    console.log(err);
  }
  console.log("listening on port 8000");
});
