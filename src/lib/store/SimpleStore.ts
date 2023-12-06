import { writable } from 'svelte/store';

export function createSimpleStore() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		show: () => set(true),
		hide: () => set(false),
		toggle: () => update((v) => !v)
	};
}
