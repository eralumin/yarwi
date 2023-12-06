<script lang="ts">
	import * as theme from '$lib/theme';
	import type { MenuItem } from '$lib/type';

	export let props: MenuItem[][];
	console.log('MenuItems props:', props);
	$: gridContainerClasses = `grid grid-wrap ${theme.layout.gap.sm}`;
	$: gridColSpans = props.map((row) => theme.layout.grid.getColSpanFromRowLength(row.length));

	function isOnEdge(index: number, rowItemsLength: number): boolean {
		return index === 0 || index === rowItemsLength - 1;
	}

	function getBorderRadius(index: number, rowItemsLength: number): theme.border.BorderRadius {
		if (rowItemsLength === 1) {
			return theme.border.BorderRadius.RoundedFull;
		}

		if (isOnEdge(index, rowItemsLength)) {
			return index === 0
				? theme.border.BorderRadius.RoundedLeft
				: theme.border.BorderRadius.RoundedRight;
		}

		return theme.border.BorderRadius.RoundedNone;
	}
</script>

<div class={gridContainerClasses}>
	{#each props as rowItems, rowIndex}
		{#each rowItems as item, index}
			<svelte:component
				this={item.component}
				props={item.props}
				commonProps={{
					color: item.commonProps?.color,
					borderRadius: getBorderRadius(index, rowItems.length),
					containerClasses: [
						theme.layout.grid.colSizeMobile[12],
						gridColSpans[rowIndex],
						item.commonProps?.containerClasses ?? ''
					]
				}}
			/>
		{/each}
	{/each}
</div>
