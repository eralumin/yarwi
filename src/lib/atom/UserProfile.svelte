<script lang="ts">
	import * as motion from '$lib/motion';
	import * as theme from '$lib/theme';
	import type { UserProfileProps } from '$lib/types';

	export let props: UserProfileProps;

	const size = 'w-14 h-14 p-0.5';
</script>

<button
	class="cursor-pointer rounded-full border-4 {size} {theme.color.border.sky}"
	on:click={props.toggleUserCardVisibility}
	use:motion.spring
>
	<img class="rounded-full object-cover" src={props.avatarUrl} alt="User Avatar" />
</button>
