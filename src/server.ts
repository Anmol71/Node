import express from "express";
const app: Application = express();
import { Application } from "express";
import { router as usersRouter } from "./routes/user.routes";
import { authenticate } from "./models";

app.use(express.json());

app.use("/users", usersRouter);

// try {
//   authenticate().then(()=> {
//     app.listen(5000, () => {
//       console.log("Server Started on port 5000");
//     });
//   });
// } catch (err) {
//   console.log(err);
//   process.exit(1);
// }

// const init
