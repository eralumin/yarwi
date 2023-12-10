import { writable } from 'svelte/store';
import { UserCardMenu } from '$lib/enums';

export function createUserCardMenuStore() {
	const { subscribe, set } = writable(UserCardMenu.Home);

	return {
		subscribe,
		set: (menuState: UserCardMenu) => set(menuState),
		reset: () => set(UserCardMenu.Home)
	};
}
