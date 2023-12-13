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

	let size: enums.ComponentSize = commonProps.size || enums.ComponentSize.MD;

	$: sizeClasses = enums.ButtonSizeClasses[size];
	$: containerClass = `min-w-0 group w-full h-full ${commonProps.containerClasses?.join(' ')}`;
	$: flex = `flex w-full h-full items-center justify-center ${
		props.icon && props.text ? 'sm:justify-between' : ''
	}`;
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
	$: buttonClass = `${sizeClasses.button} ${flex} ${commonProps.borderRadius} ${backgroundColor} ${textColor} ${hoverColor} ${hoverTextColor}`;
	$: textClass = `${sizeClasses.text} ${props.icon ? 'hidden sm:block' : ''}`;
	$: iconClass = sizeClasses.icon;
</script>

<div bind:this={rootElement} class={containerClass}>
	<div class="relative">
		<button
			id={commonProps.id}
			class={buttonClass}
			on:click={toggle}
			on:mouseenter={() => (isTooltipVisible = true)}
			on:mouseleave={() => (isTooltipVisible = false)}
		>
			{#if props.icon}
				<Icon
					icon={$isToggled && props.alternateIcon ? props.alternateIcon : props.icon}
					class={iconClass}
				/>
			{/if}
			{#if props.text}
				<span class={textClass}>
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
