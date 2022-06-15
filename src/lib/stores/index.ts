import { writable } from 'svelte/store';

// Writables
export const selectedCategoryFilter = writable('all');
export const currentPaginationPage = writable(1);
