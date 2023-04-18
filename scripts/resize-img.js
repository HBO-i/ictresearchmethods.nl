import sharp from 'sharp';
import fs from 'fs';
import process from 'process';
import path from 'path';

const root = process.cwd();
const input_path = path.join(root, 'uploads');
const output_path = path.join(root, 'static', 'uploads');

fs.readdir(input_path, async function (err, files) {
	if (err) {
		console.error('Could not list the directory.', err);
		process.exit(1);
	}

	for await (const inputFile of files) {
		try {
			const inputFilePath = path.join(input_path, inputFile);
			if (!fs.existsSync(inputFilePath)) {
				console.error(`Input file not found: ${inputFile}`);
				continue;
			}

			await sharp(inputFilePath)
				.resize({
					width: 150,
					height: 97
				})
				.toFormat('webp')
				.toFile(
					path.join(output_path, path.basename(inputFile, path.extname(inputFile)) + '.webp')
				);
		} catch (error) {
			console.log(error);
		}
	}
});
