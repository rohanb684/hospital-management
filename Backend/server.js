import app from "./app.js";
import dbConnection from "./database/connection.js";
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT || 3000, async ()=>{
    console.log(`Server listening on port ${process.env.PORT}`)
    await dbConnection();
})
