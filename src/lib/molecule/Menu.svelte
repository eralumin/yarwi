<script lang="ts">
	import { getBorderRadius } from '$lib/utils';

	import * as theme from '$lib/theme';
	import type { MenuProps } from '$lib/types';
	import { DynamicBehaviorWrapper } from '$lib/atom';
	import { ComponentSize } from '$lib/enums';

	export let props: MenuProps;

	$: menuContainerClasses = '';
	$: headerContainerClasses = '';
	$: bodyGridContainerClasses = `grid grid-wrap ${theme.layout.gap.sm}`;
	$: bodyItemgridColSpans = props.map((row) =>
		theme.layout.grid.getColSpanFromRowLength(row.length)
	);
</script>

<div class={menuContainerClasses}>
	<!-- Header -->
	<div class={headerContainerClasses}>
		<!-- go home menu button    |   title of the menu -->
		<!-- toolbar -->
	</div>
	<!-- Body -->
	<div class={bodyGridContainerClasses}>
		{#each props.body as rowItems, rowIndex}
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
							bodyItemgridColSpans[rowIndex],
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
</div>
