import express from "express";
const app: Application = express();
import { Application } from "express";
import { router as usersRouter } from "./routes/user.routes";
import {router as register } from "./routes/auth"
import { authenticate } from "./models";

app.use(express.json());

app.use("/users", usersRouter);
app.use("/users",register); 

const initApp = async () => {
  console.log("Testing the database connection..");
  /**
   * Test the connection.
   * You can use the .authenticate() function to test if the connection works.
   */
  try {
    await authenticate();
    console.log("Connection has been established successfully.");

    /**
     * Start the web server on the specified port.
     */
    app.listen(8000, () => {
      console.log(`Server is up and running at: http://localhost:8000`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

/**
 * Initialize the application.
 */
initApp();
