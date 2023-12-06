<script lang="ts">
	import '../app.pcss';

	import * as action from '$lib/action';
	import { userCardVisible } from '$lib/store';
	import * as color from '$lib/theme/color';

	import DarkModeToggle from '$lib/molecule/DarkModeToggle.svelte';
	import UserProfile from '$lib/molecule/UserProfile.svelte';
	import UserCard from '$lib/molecule/UserCard.svelte';
	import type { MenuItem } from '$lib/type';
	import Button from '$lib/atom/Button.svelte';

	const darkModeTogglePosition = 'fixed top-6 left-6';
	const userProfilePosition = 'fixed top-6 right-6 z-40';
	const userCardPosition = 'fixed w-full sm:w-auto sm:top-2 sm:right-2 z-30';

	const avatarUrl = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';
	const email = 'kevin.marilleau@example.com';
	const homeMenuItems: MenuItem[][] = [
		[
			{
				component: Button,
				props: { text: 'Edit', icon: 'material-symbols:edit-rounded' },
				commonProps: { color: color.Enum.sky }
			}
		],
		[
			{
				component: Button,
				props: { text: 'Account', icon: 'material-symbols:switch-account-rounded' }
			},
			{
				component: Button,
				props: { text: 'Boards', icon: 'material-symbols:dashboard-rounded' }
			}
		],
		[
			{
				component: Button,
				props: { text: 'Settings', icon: 'material-symbols:settings-outline-rounded' }
			},
			{
				component: Button,
				props: { text: 'Logout', icon: 'material-symbols:logout-rounded' },
				commonProps: { color: color.Enum.red }
			}
		]
	];
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
	<div class={darkModeTogglePosition}>
		<DarkModeToggle />
	</div>

	<div class={userProfilePosition} id="user-profile">
		<UserProfile {avatarUrl} {toggleUserCardVisibility} />
	</div>

	<div
		class={userCardPosition}
		use:action.clickOutside={'#user-profile'}
		on:click_outside={hideCardWhenOutsideClick}
	>
		<UserCard {email} {homeMenuItems} />
	</div>
</div>
