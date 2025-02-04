import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler((req, res, next) => {
  /*1. get user details from frontend
  2.validation - not empty
  3.check if user already exists: username, email
  4.check for images, check for avatar
  5.upload them to cloudinary, avatar
  6.create user object- create entry in db
  7.remove password and refresh token field from response
  8.check for user creation
  9.return res
  */
  const { fullName, email, username, password } = req.body;
  console.log("email", email);
});

export { registerUser };
