import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    title: {
      type: String, //cloudinary url
      required: true,
    },
    description: {
      type: String, //cloudinary url
      required: true,
    },
    duration: {
      type: Number, //cloudinary url
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate);

export const video = mongoose.model("Video", videoSchema);
// mongoose aggregation pipeline is so important
//bcrypt- core nodejs package library. we can find it from npm whilesearching packages
//bcrypt: It is used to hash your passwords. clear text password we wont keep and if passwords are encrypted .. we shall decrypt it. Based on cryptography

//JWTTokens-based on cryptography. In tokens..when we decrypt it, we get a (secret) -which makes each token unique.
