<script lang="ts">
	import '../app.pcss';

	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import * as action from '$lib/action';

	import { userCardVisible, theme, userCardMenu } from '$lib/store';
	import * as color from '$lib/theme/color';

	import UserProfile from '$lib/molecule/UserProfile.svelte';
	import UserCard from '$lib/molecule/UserCard.svelte';

	import { homeMenuItems, boardsMenuItems, avatarUrl, email } from '$lib/dev';
	import { UserCardMenu } from '$lib/enums';

	const userProfilePosition = 'fixed top-6 right-6 z-40';
	const userCardPosition = 'fixed sm:top-2 sm:right-2 z-30';
	const userCardSize = 'w-full sm:w-[24rem]';

	export const currentMenuItems = derived(userCardMenu, ($userCardMenu) => {
		switch ($userCardMenu) {
			case UserCardMenu.Home:
				return homeMenuItems;
			case UserCardMenu.Boards:
				return boardsMenuItems;
			default:
				return homeMenuItems;
		}
	});

	onMount(() => {
		theme.initializeTheme();
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
	<div class={userProfilePosition} id="user-profile">
		<UserProfile {avatarUrl} {toggleUserCardVisibility} />
	</div>

	<div
		class={`${userCardPosition} ${userCardSize}`}
		use:action.clickOutside={'#user-profile'}
		on:click_outside={hideCardWhenOutsideClick}
	>
		<UserCard {email} menuItems={$currentMenuItems} />
	</div>
</div>
