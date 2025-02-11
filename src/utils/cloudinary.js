// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Upload Function
// const uploadOnCloudinary = async (localfilePath) => {
//   try {
//     if (!localfilePath) return null;

//     // Upload file to Cloudinary
//     const uploadResult = await cloudinary.uploader.upload(localfilePath, {
//       resource_type: "auto",
//     });

//     console.log("File uploaded to Cloudinary:", uploadResult.secure_url);

//     // Remove the local file after successful upload
//     if (fs.existsSync(localfilePath)) {
//       fs.unlinkSync(localfilePath);
//     }

//     return uploadResult;
//   } catch (error) {
//     console.error(" Cloudinary Upload Error:", error);

//     // Delete the local file if upload fails
//     if (fs.existsSync(localfilePath)) {
//       fs.unlinkSync(localfilePath);
//     }

//     return null;
//   }
// };

//export { uploadOnCloudinary };

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
    if (!localfilePath) return null;
    console.log(localfilePath);
    // upload file on cloudinary
    const uploadResult = await cloudinary.uploader.upload(localfilePath, {
      //public_id: "shoes",
      resource_type: "auto",
    });
    //file uploaded
    console.log("file uploaded", uploadResult.url);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(localfilePath);
    //remove the locally saved temporary file as  the upload.
    //operation got failed
    console.log(error);
    return null;
  }
};
export { uploadOnCloudinary };
