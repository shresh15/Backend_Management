import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: ".env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     // await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     // app.on("error", (error) => {
//     //   console.log("ERRR", error);
//     //   throw error;
//     // });
//     app.get("/", (req, res) => {
//       res.send("Gethello");
//     });
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`App is listeninig on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
