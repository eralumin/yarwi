import { writable } from 'svelte/store';
import { runInBrowser } from './utils';

export function createThemeStore() {
	const { subscribe, set, update } = writable(false);

	function initializeTheme() {
		runInBrowser(() => {
			const savedTheme = localStorage.getItem('theme');
			const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const isDarkModeInitially = savedTheme === 'dark' || (!savedTheme && prefersDarkScheme);

			set(isDarkModeInitially);
			updateTheme(isDarkModeInitially);
		});
	}

	function updateTheme(darkMode: boolean) {
		runInBrowser(() => {
			const action = darkMode ? 'add' : 'remove';
			document.documentElement.classList[action]('dark');
			localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		});
	}

	function toggleDarkMode() {
		update((current) => {
			const newMode = !current;
			updateTheme(newMode);
			return newMode;
		});
	}

	return {
		subscribe,
		initializeTheme,
		toggleDarkMode
	};
}
