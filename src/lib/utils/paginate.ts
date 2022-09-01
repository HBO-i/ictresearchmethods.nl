// Options is very difficult to type
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { PREVIOUS_PAGE, NEXT_PAGE, ELLIPSIS } from './symbolTypes';
import type { Method, Option } from '$lib/types';

export function paginate(items: Array<Method>, pageSize: number, currentPage: number) {
	return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
}

export function generateNavigationOptions(
	totalItems: number,
	pageSize: number,
	currentPage: number,
	limit: number,
	showStepOptions = false
) {
	const totalPages = Math.ceil(totalItems / pageSize);
	const limitThreshold = getLimitThreshold(limit);
	const limited = limit && totalPages > limitThreshold;
	const options = limited
		? generateLimitedOptions(totalPages, limit, currentPage)
		: generateUnlimitedOptions(totalPages);

	return showStepOptions ? addStepOptions(options, currentPage, totalPages) : options;
}

function generateUnlimitedOptions(totalPages: number): Array<Option> {
	return new Array(totalPages).fill(null).map((value, index) => ({
		type: 'number',
		value: index + 1
	}));
}

function generateLimitedOptions(
	totalPages: number,
	limit: number,
	currentPage: number
): Array<Option> | undefined {
	const boundarySize = limit * 2 + 2;
	const firstBoundary = 1 + boundarySize;
	const lastBoundary = totalPages - boundarySize;
	const totalShownPages = firstBoundary + 2;

	if (currentPage <= firstBoundary - limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((value, index) => {
				if (index === totalShownPages - 1) {
					return {
						type: 'number',
						value: totalPages
					};
				} else if (index === totalShownPages - 2) {
					return {
						type: 'symbol',
						symbol: ELLIPSIS,
						value: firstBoundary + 1
					};
				}
				return {
					type: 'number',
					value: index + 1
				};
			});
	} else if (currentPage >= lastBoundary + limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((value, index) => {
				if (index === 0) {
					return {
						type: 'number',
						value: 1
					};
				} else if (index === 1) {
					return {
						type: 'symbol',
						symbol: ELLIPSIS,
						value: lastBoundary - 1
					};
				}
				return {
					type: 'number',
					value: lastBoundary + index - 2
				};
			});
	} else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((value, index) => {
				if (index === 0) {
					return {
						type: 'number',
						value: 1
					};
				} else if (index === 1) {
					return {
						type: 'symbol',
						symbol: ELLIPSIS,
						value: currentPage - limit + (index - 2)
					};
				} else if (index === totalShownPages - 1) {
					return {
						type: 'number',
						value: totalPages
					};
				} else if (index === totalShownPages - 2) {
					return {
						type: 'symbol',
						symbol: ELLIPSIS,
						value: currentPage + limit + 1
					};
				}
				return {
					type: 'number',
					value: currentPage - limit + (index - 2)
				};
			});
	}
}

function addStepOptions(options: Array<Option>, currentPage: number, totalPages: number) {
	return [
		{
			type: 'symbol',
			symbol: PREVIOUS_PAGE,
			value: currentPage <= 1 ? 1 : currentPage - 1
		},
		...options,
		{
			type: 'symbol',
			symbol: NEXT_PAGE,
			value: currentPage >= totalPages ? totalPages : currentPage + 1
		}
	];
}

function getLimitThreshold(limit: number): number {
	const maximumUnlimitedPages = 3; // This means we cannot limit 3 pages or less
	const numberOfBoundaryPages = 2; // The first and last pages are always shown
	return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
