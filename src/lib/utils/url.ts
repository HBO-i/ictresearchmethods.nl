export function getCurrentDomain() {
	const PROD_URL = import.meta.env.VITE_URL_PROD;
	const DEV_URL = import.meta.env.VITE_URL_DEV;
	const isDevelopment = import.meta.env.MODE === 'development';

	return isDevelopment ? DEV_URL : PROD_URL;
}
