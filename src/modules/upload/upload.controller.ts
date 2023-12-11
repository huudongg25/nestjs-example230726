import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { FileService } from './upload.service';
@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) { }

    @Post('upload-single')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file): Promise<string> {
        return this.fileService.uploadFile(file);
    }

    @Post('upload-multiple')
    @UseInterceptors(FilesInterceptor('files', 5))
    async uploadFiles(@UploadedFiles() files): Promise<string[]> {
        const uploadedFileUrls: string[] = await Promise.all(
            files.map(async (file) => await this.fileService.uploadFile(file)),
        );
        return uploadedFileUrls;
    }
}
