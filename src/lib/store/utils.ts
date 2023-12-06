export function runInBrowser(callback: () => void) {
	if (typeof window !== 'undefined') {
		callback();
	}
}
