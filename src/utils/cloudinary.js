import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file on cloudinary
    const uploadResult = await cloudinary.uploader.upload("localFilePath", {
      public_id: "shoes",
      resource_type: "auto",
    });
    //file uploaded
    console.log("file uploaded", uploadResult.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath);
    //remove the locally saved temporary file as  the upload.
    //operation got failed
    return null;
  }
};
export { uploadOnCloudinary };
