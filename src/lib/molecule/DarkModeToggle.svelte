<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import * as store from '$lib/store';
	import * as action from '$lib/action';

	onMount(() => {
		store.theme.initializeTheme();
	});
</script>

<button use:action.flip={700} class="rotate-icon text-xl" on:click={store.theme.toggleDarkMode}>
	<Icon id="toggle-dark-mode" icon="material-symbols:sunny-outline-rounded" />
</button>
