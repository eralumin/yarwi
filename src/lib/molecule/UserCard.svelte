<script lang="ts">
	import * as eases from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { userCardVisible } from '$lib/store';
	import * as theme from '$lib/theme';
	import MenuItems from '$lib/molecule/MenuItems.svelte';
	import type { MenuItem } from '$lib/type';

	export let email: string;
	export let homeMenuItems: MenuItem[][];

	// const userCardBoardsVisible = false;
	const emailSize = 'ml-4 mr-24';
	const cardSize = 'p-4 pt-5 w-76';
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

		<!-- {#if $userCardBoardsVisible} -->
		<!-- <div class={menuContainerSize}>
				<MenuItems {boardsMenuItems} />
			</div> -->
		<!-- {:else} -->
		<div class={menuContainerSize}>
			<MenuItems props={homeMenuItems} />
		</div>
		<!-- {/if} -->
	</div>
{/if}
