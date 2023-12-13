<script lang="ts">
	import { getBorderRadius } from '$lib/utils';
	import type { ItemProps, CommonProps } from '$lib/types';
	import * as theme from '$lib/theme';
	import DynamicBehaviorWrapper from '$lib/atom/DynamicBehaviorWrapper.svelte';
	import { ComponentSize } from '$lib/enums';

	export let props: ItemProps[];
	export let commonProps: CommonProps;

	$: containerClasses = (commonProps.containerClasses || []).join(' ');
	$: flex = [
		'relative',
		'flex',
		'flex-nowrap',
		'justify-stretch',
		'content-stretch',
		'items-center',
		theme.layout.gap.None
	].join(' ');
	$: border = [
		theme.color.border.defaultLight,
		theme.color.hoverBorder.default,
		theme.border.BorderRadius.RoundedFull,
		'border-2'
	].join(' ');
	$: toolbarClass = `${flex} ${border}`;
</script>

<div class={containerClasses}>
	<div class={toolbarClass}>
		{#each props as item, index}
			<DynamicBehaviorWrapper
				component={item.component}
				props={item.props}
				commonProps={{
					color: item.commonProps?.color,
					size: ComponentSize.SM,
					tooltipText: item.commonProps?.tooltipText,
					borderRadius: getBorderRadius(index, props.length),
					containerClasses: [theme.layout.flex.basisMobile[1]],
					alternateColor: item.commonProps?.alternateColor,
					alternateTooltipText: item.commonProps?.alternateTooltipText
				}}
				dynamicBehaviorProps={item.dynamicBehaviorProps}
			/>
		{/each}
	</div>
</div>
