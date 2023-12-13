<script lang="ts">
	import { getBorderRadius } from '$lib/utils';

	import * as theme from '$lib/theme';
	import type { ItemProps } from '$lib/types';
	import { DynamicBehaviorWrapper } from '$lib/atom';
	import { ComponentSize } from '$lib/enums';

	export let props: ItemProps[][];

	$: gridContainerClasses = `grid grid-wrap ${theme.layout.gap.sm}`;
	$: gridColSpans = props.map((row) => theme.layout.grid.getColSpanFromRowLength(row.length));
</script>

<div class={gridContainerClasses}>
	{#each props as rowItems, rowIndex}
		{#each rowItems as item, index}
			<DynamicBehaviorWrapper
				component={item.component}
				props={item.props}
				commonProps={{
					color: item.commonProps?.color,
					size: ComponentSize.LG,
					tooltipText: item.commonProps?.tooltipText,
					borderRadius: getBorderRadius(index, rowItems.length),
					containerClasses: [
						theme.layout.grid.colSizeMobile[12],
						gridColSpans[rowIndex],
						...(item.commonProps?.containerClasses ?? [])
					],
					alternateColor: item.commonProps?.alternateColor,
					alternateTooltipText: item.commonProps?.alternateTooltipText
				}}
				dynamicBehaviorProps={item.dynamicBehaviorProps}
			/>
		{/each}
	{/each}
</div>
