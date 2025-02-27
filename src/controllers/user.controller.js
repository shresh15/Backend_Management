import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  /* 1. get user details from frontend
  2.validation - not empty
  3.check if user already exists: username, email
  4.check for images, check for avatar
  5.upload them to cloudinary, avatar
  6.create user object- create entry in db
  7.remove password and refresh token field from response
  8.check for user creation

  //9.return res
  */
  const { fullName, email, username, password } = req.body;
  console.log("email", email);

  //   if(fullName ==="") throw new ApiError("400", "fullname is required");
  // });
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, " All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  console.log(req.files?.avatar[0]);

  const CoverImageLocalPath = req.files?.coverImage[0]?.path;
  console.log(req.files?.coverImage[0]);

  if (!avatarLocalPath) {
    throw new ApiError("400", "Avatar is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(CoverImageLocalPath);
  if (!avatar) {
    throw new ApiError("400", "Avatar file is required");
  }
  const user = await User.create({
    fullname: fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "error while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered succesfully"));
});

export { registerUser };
