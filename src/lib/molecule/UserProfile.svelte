<script lang="ts">
	import * as motion from '$lib/motion';
	import * as theme from '$lib/theme';

	export let avatarUrl: string;
	export let toggleUserCardVisibility: () => void;

	const size = 'w-16 h-16 p-0.5';
</script>

<button
	class="cursor-pointer rounded-full border-4 {size} {theme.color.border.sky}"
	on:click={toggleUserCardVisibility}
	use:motion.spring
>
	<img class="rounded-full object-cover" src={avatarUrl} alt="User Avatar" />
</button>
