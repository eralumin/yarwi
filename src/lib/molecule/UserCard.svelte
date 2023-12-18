<script lang="ts">
	import * as eases from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import * as theme from '$lib/theme';
	import { Menu } from '$lib/molecule/Menu.svelte';
	import type { UserCardProps, UserProfileProps } from '$lib/types';
	import UserProfile from '$lib/atom/UserProfile.svelte';
	import { colSizeMobile } from '$lib/theme/layout/grid';

	export let props: UserCardProps;
	export let userProfileProps: UserProfileProps;

	const grid = [
		'grid',
		'grid-nowrap',
		theme.layout.grid.colSizeMobile[12],
		theme.layout.gap.sm
	].join(' ');
	const emailSize = 'ml-4 mr-24';
	const cardSize = 'p-4 pt-5 max-w-full';
	const menuContainerSize = 'mt-16 col-span-12';
	const transitionSettings = { x: 200, duration: 250, easing: eases.expoOut };
</script>

<div
	class="rounded-lg shadow-lg {cardSize} {theme.color.background.defaultDark} {grid}"
	in:fly={transitionSettings}
	out:fly={transitionSettings}
>
	<!-- Header -->
	<span class="{theme.layout.grid.colSpanMobile[10]} text-center {emailSize} {theme.color.text.sky}"
		>{props.email}</span
	>
	<div class={theme.layout.grid.colSpanMobile[2]}>
		<UserProfile props={userProfileProps} />
	</div>

	<!-- Body -->
	<div class={menuContainerSize}>
		<Menu props={props.menuProps} />
	</div>
</div>
