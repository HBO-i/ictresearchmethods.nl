import { writable } from 'svelte/store';

// Writables
export const currentPaginationPage = writable(1);
export const allMethods = writable([]);
export const searchedMethods = writable([]);
export const showSearchField = writable(false);
export const isJavaScriptDisabled = writable(true);
export const isMenuOpen = writable(false);
export const isMacDevice = writable(false);
export const isGroupedByPhase = writable(false);
