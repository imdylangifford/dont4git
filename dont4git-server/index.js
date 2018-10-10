const express = require("express");
const bodyParser = require("body-parser");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
console.log(process.env.ACCOUNT_SID);
console.log(process.env.AUTH_TOKEN);
// const authToken = "";
// const client = require("twilio")(accountSid, authToken);

// const app = express();
// app.use(bodyParser.json());

// app.post("/", (req, res) => {
//   let date = new Date(req.body.date);
//   //   console.log(date, "-----", req.body.date);
//   new CronJob(
//     date,
//     function() {
//       console.log("i ran");
//       client.messages
//         .create({
//           to: req.body.number,
//           from: "+13858812505",
//           body: req.body.message
//         })
//         .then(res => console.log(res));
//     },
//     null,
//     true
//   );

//   res.send("hello");
// });

// app.listen(5000, () => {
//   console.log("Running on Port 5000");
// });
