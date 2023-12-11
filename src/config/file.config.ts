import { diskStorage } from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export const multerConfig = async (): Promise<MulterOptions> => {
    return {
        storage: diskStorage({}),
        limits: {
            files: 10, 
        },
    };
};

export const cloudinaryConfig = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};
