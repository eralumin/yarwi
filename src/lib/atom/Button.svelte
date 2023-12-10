<script lang="ts">
	import { writable } from 'svelte/store';
	import Icon from '@iconify/svelte';
	import * as theme from '$lib/theme';
	import type { ButtonProps, CommonProps } from '$lib/types';
	import Tooltip from './Tooltip.svelte';
	import * as enums from '$lib/enums';

	export let props: ButtonProps;
	export let commonProps: CommonProps;

	let rootElement: HTMLElement;
	let isToggled = writable(false);
	let isTooltipVisible = false;

	export function getRootElement() {
		return rootElement;
	}

	function toggle() {
		isToggled.update((n) => !n);
	}

	$: size = 'w-full h-full px-8 py-4 text-lg sm:text-sm';
	$: flex = `flex place-content-center justify-center ${
		props.icon && props.text ? 'sm:justify-between' : ''
	}`;
	$: textStyle = `${props.icon ? 'hidden sm:block' : ''}`;
	$: iconStyle = 'w-6 h-6';
	$: backgroundColor = theme.color.background.default;
	$: textColor =
		$isToggled && commonProps.alternateColor
			? theme.color.text[commonProps.alternateColor]
			: theme.color.text[commonProps.color || theme.color.Enum.default];
	$: hoverColor =
		$isToggled && commonProps.alternateColor
			? theme.color.hoverBackground[commonProps.alternateColor]
			: theme.color.hoverBackground[commonProps.color || theme.color.Enum.default];
	$: hoverTextColor = theme.color.hoverText.default;

	$: containerStyle = `min-w-0 group ${commonProps.containerClasses?.join(' ')}`;
	$: buttonStyle = `${size} ${flex} ${commonProps.borderRadius} ${backgroundColor} ${textColor} ${hoverColor} ${hoverTextColor}`;
</script>

<div bind:this={rootElement} class={containerStyle}>
	<div class="relative">
		<button
			id={commonProps.id}
			class={buttonStyle}
			on:click={toggle}
			on:mouseenter={() => (isTooltipVisible = true)}
			on:mouseleave={() => (isTooltipVisible = false)}
		>
			{#if props.icon}
				<Icon
					icon={$isToggled && props.alternateIcon ? props.alternateIcon : props.icon}
					class={iconStyle}
				/>
			{/if}
			{#if props.text}
				<span class={textStyle}>
					{$isToggled && props.alternateText ? props.alternateText : props.text}
				</span>
			{/if}
		</button>
		{#if isTooltipVisible && commonProps.tooltipText}
			<Tooltip
				props={{
					text:
						$isToggled && commonProps.alternateTooltipText
							? commonProps.alternateTooltipText
							: commonProps.tooltipText,
					position: enums.TooltipPosition.Top
				}}
			/>
		{/if}
	</div>
</div>
