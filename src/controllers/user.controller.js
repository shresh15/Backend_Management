import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler((req, res, next) => {
  res.send("registered successfully");
  //return new Promise()
});

export { registerUser };
