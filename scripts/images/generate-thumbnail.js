// @TODO: Refactor (DRY)

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

import { input_path, output_path } from './variables.js';

async function processFilesInDirectory(inputPath) {
	const files = await fs.promises.readdir(inputPath);

	// Ensure output directory exists, create if not
	if (!fs.existsSync(output_path)) {
		fs.mkdirSync(output_path, { recursive: true });
		console.log(`Created directory: ${output_path}`);
	}

	for (const file of files) {
		const filePath = path.join(inputPath, file);
		const stat = await fs.promises.stat(filePath);

		const fileExtension = path.extname(file).toLowerCase();
		const imageFileExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

		const isFileAnImage = imageFileExtensions.includes(fileExtension);

		if (stat.isDirectory()) {
			// Recursively process files in the subdirectory
			await processFilesInDirectory(filePath);
		} else if (isFileAnImage) {
			try {
				await sharp(filePath)
					.resize({
						width: 80,
						height: 120
					})
					.toFormat('jpg')
					.toFile(
						path.join(
							output_path,
							path.basename(filePath, path.extname(filePath)) + '_thumbnail.jpg'
						)
					);
			} catch (error) {
				console.log(error);
			}
		}
	}
}

processFilesInDirectory(input_path);
