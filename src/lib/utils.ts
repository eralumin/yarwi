import * as theme from '$lib/theme';

// Generics
export function findMaxIterableLength<T extends Iterable<unknown>>(iterables: T[]): number {
	const lengths = iterables.map((iterable) => {
		return Array.from(iterable).length;
	});

	return Math.max(0, ...lengths);
}

export function countNestedIterablesItems<T extends Iterable<unknown>>(iterable: T[]): number {
	let totalCount = 0;

	for (const nestedIterable of iterable) {
		for (const _ of nestedIterable) {
			totalCount++;
		}
	}

	return totalCount;
}

// Components Props
function isOnEdge(index: number, rowItemsLength: number): boolean {
	return index === 0 || index === rowItemsLength - 1;
}

export function getBorderRadius(index: number, rowItemsLength: number): theme.border.BorderRadius {
	if (rowItemsLength === 1) {
		return theme.border.BorderRadius.RoundedFull;
	}

	if (isOnEdge(index, rowItemsLength)) {
		return index === 0
			? theme.border.BorderRadius.RoundedLeft
			: theme.border.BorderRadius.RoundedRight;
	}

	return theme.border.BorderRadius.RoundedNone;
}
