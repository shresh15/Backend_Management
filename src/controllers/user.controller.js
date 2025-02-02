import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler((req, res, next) => {
  //get user details from frontend
  //validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object- create entry in db

  res.send("registered successfully");
  //return new Promise()
});

export { registerUser };
