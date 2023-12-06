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
