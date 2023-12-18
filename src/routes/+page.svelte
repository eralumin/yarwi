<script lang="ts">
	import '../app.pcss';

	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import * as action from '$lib/action';
	import { userCardVisible, theme, userCardMenu } from '$lib/store';
	import * as color from '$lib/theme/color';
	import UserCard from '$lib/molecule/UserCard.svelte';
	import * as config from '$lib/config';
	import { UserCardMenu } from '$lib/enums';
	import DynamicBehaviorWrapper from '$lib/atom/DynamicBehaviorWrapper.svelte';

	const defaultAvatarUrl =
		'https://www.softlatestkey.com/wp-content/uploads/2018/09/Cockos-REAPER.png';

	const menuButtonPosition = 'fixed top-6 right-6 z-40';
	const userCardPosition = 'fixed sm:top-2 sm:right-2 z-30';
	const userCardSize = 'w-full sm:w-[24rem]';

	export const currentMenuProps = derived(userCardMenu, ($userCardMenu) => {
		switch ($userCardMenu) {
			case UserCardMenu.Home:
				return config.menus.homeMenu;
			case UserCardMenu.Boards:
				return config.menus.boardsMenu;
			default:
				return config.menus.homeMenu;
		}
	});

	onMount(() => {
		theme.initialize();
	});

	function toggleUserCardVisibility(event: MouseEvent) {
		event.stopPropagation();
		userCardVisible.toggle();
	}
	function hideCardWhenOutsideClick() {
		userCardVisible.hide();
	}
</script>

<div
	class="relative min-h-screen min-w-screen select-none {color.background.default} {color.text
		.default}"
>
	{#if userCardVisible}
		<div
			class={`${userCardPosition} ${userCardSize}`}
			use:action.clickOutside={'#user-profile'}
			on:click_outside={hideCardWhenOutsideClick}
		>
			<UserCard
				props={{
					email: config.user.email,
					menuProps: $currentMenuProps
				}}
				userProfileProps={{
					toggleUserCardVisibility: toggleUserCardVisibility,
					avatarUrl: config.user.userProfile.avatarUrl || defaultAvatarUrl
				}}
			/>
		</div>
	{:else}
		<div class={menuButtonPosition}>
			<DynamicBehaviorWrapper {...config.menus.showMenuButton} />
		</div>
	{/if}
</div>
