import path from 'path';
import process from 'process';

const root = process.cwd();
export const input_path = path.join(root, 'src', 'content', 'methods', 'img');
export const output_path = path.join(root, 'static', 'img', 'methods-v2');
