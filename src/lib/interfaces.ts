import type { SvelteComponent } from 'svelte';

export interface ExtendedComponent extends SvelteComponent {
	getRootElement?: () => HTMLElement;
}
