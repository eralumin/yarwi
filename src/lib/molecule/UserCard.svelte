<script lang="ts">
	import * as eases from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { userCardVisible } from '$lib/store';
	import * as theme from '$lib/theme';
	import MenuItems from '$lib/molecule/Menu.svelte';
	import type { ItemProps } from '$lib/types';

	export let email: string;
	export let menuItems: ItemProps[][];

	const emailSize = 'ml-4 mr-24';
	const cardSize = 'p-4 pt-5 max-w-full';
	const menuContainerSize = 'mt-16';
	const transitionSettings = { x: 200, duration: 250, easing: eases.expoOut };
</script>

{#if $userCardVisible}
	<div
		class="rounded-lg shadow-lg {cardSize} {theme.color.background.defaultDark}"
		in:fly={transitionSettings}
		out:fly={transitionSettings}
	>
		<span class="{emailSize} {theme.color.text.sky}">{email}</span>

		<div class={menuContainerSize}>
			<MenuItems props={menuItems} />
		</div>
	</div>
{/if}
