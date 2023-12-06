import type { SvelteComponent } from 'svelte';
import type { CommonProps } from '.';
import type { ButtonProps } from '.';

export type MenuItem = {
	component: typeof SvelteComponent;
	commonProps: Partial<CommonProps>;
	props: ButtonProps;
};
