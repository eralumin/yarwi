<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as theme from '$lib/theme';
	import type { CommonProps, TooltipProps } from '$lib/types';

	export let props: TooltipProps;
	export let commonProps: CommonProps = {};

	$: backgroundColor = theme.color.background.default;
	$: textColor = theme.color.text[commonProps.color || theme.color.Enum.default];
	$: borderColor = theme.color.border[theme.color.Enum.defaultInverseDark];
	$: shadowColor = theme.color.shadow[theme.color.Enum.defaultDark];
	$: textPosition = 'whitespace-nowrap';
	$: borderRadius = theme.border.BorderRadius.RoundedNone;
	$: tooltipStyle = `absolute z-10 px-2 py-1 border shadow-md ${props.position} ${textPosition} ${backgroundColor} ${textColor} ${borderColor} ${shadowColor} ${borderRadius}`;
</script>

<div
	class={tooltipStyle}
	role="tooltip"
	aria-label={props.text}
	in:fade={{ delay: 800, duration: 300 }}
	out:fade={{ duration: 300 }}
>
	{props.text}
</div>
