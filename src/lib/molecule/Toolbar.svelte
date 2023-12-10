<script lang="ts">
	import { getBorderRadius } from '$lib/utils';
	import type { ItemProps, CommonProps } from '$lib/types';
	import * as theme from '$lib/theme';
	import DynamicBehaviorWrapper from '$lib/atom/DynamicBehaviorWrapper.svelte';

	export let props: ItemProps[];
	export let commonProps: CommonProps;

	$: containerClasses = (commonProps.containerClasses || []).join(' ');
	$: flex = [
		'relative',
		'flex flex-nowrap',
		'justify-between',
		'content-stretch',
		'items-center',
		theme.layout.gap.sm
	].join(' ');
</script>

<div class={containerClasses}>
	<div class={flex}>
		{#each props as item, index}
			<DynamicBehaviorWrapper
				component={item.component}
				props={item.props}
				commonProps={{
					color: item.commonProps?.color,
					tooltipText: item.commonProps?.tooltipText,
					borderRadius: getBorderRadius(index, props.length),
					containerClasses: [theme.layout.flex.basisMobile.Full],
					alternateColor: item.commonProps?.alternateColor,
					alternateTooltipText: item.commonProps?.alternateTooltipText
				}}
				dynamicBehaviorProps={item.dynamicBehaviorProps}
			/>
		{/each}
	</div>
</div>
