import { writable } from 'svelte/store';
import { runInBrowser } from './utils';

export function createThemeStore() {
	const { subscribe, set, update } = writable(false);

	function updateTheme(darkMode: boolean) {
		runInBrowser(() => {
			const action = darkMode ? 'add' : 'remove';
			document.documentElement.classList[action]('dark');
			localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		});
	}

	return {
		subscribe,
		initialize: () => {
			runInBrowser(() => {
				const savedTheme = localStorage.getItem('theme');
				const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const isDarkModeInitially = savedTheme === 'dark' || (!savedTheme && prefersDarkScheme);

				set(isDarkModeInitially);
				updateTheme(isDarkModeInitially);
			});
		},
		toggle: () => {
			update((darkMode) => {
				const newMode = !darkMode;
				updateTheme(newMode);
				return newMode;
			});
		}
	};
}
