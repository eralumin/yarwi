<script lang="ts">
	import Icon from '@iconify/svelte';
	import * as theme from '$lib/theme';
	import type { ButtonProps, CommonProps } from '$lib/type';

	export let props: ButtonProps;
	export let commonProps: CommonProps;

	const size = 'w-full h-full px-8 py-4 text-lg sm:text-sm';
	const flexMobile = 'flex place-content-center justify-center';

	$: flexDesktop = props.icon && props.text ? 'sm:justify-between' : '';
	$: textOnly = props.icon ? 'hidden sm:block' : '';
	$: buttonClasses = [
		size,
		flexMobile,
		flexDesktop,
		commonProps.borderRadius,
		theme.color.background.default,
		theme.color.text[commonProps.color || theme.color.Enum.default],
		theme.color.hoverBackground[commonProps.color || theme.color.Enum.default],
		theme.color.hoverText.default
	].join(' ');
</script>

<div class={commonProps.containerClasses.join(' ')}>
	<button class={buttonClasses}>
		{#if props.icon}
			<Icon icon={props.icon} class="w-6 h-6" />
		{/if}
		{#if props.text}
			<span class={textOnly}>{props.text}</span>
		{/if}
	</button>
</div>
