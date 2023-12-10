<script lang="ts">
	import * as theme from '$lib/theme';
	import type { TextProps, CommonProps } from '$lib/types';

	export let props: TextProps;
	export let commonProps: CommonProps;

	const size = 'w-full h-full px-8 py-4 text-lg sm:text-sm';
	const flexMobile = 'flex place-content-center justify-center';

	$: boardItemClasses = [
		size,
		flexMobile,
		commonProps.borderRadius,
		theme.color.background.default,
		theme.color.text[commonProps.color || theme.color.Enum.default],
		theme.color.hoverBackground[commonProps.color || theme.color.Enum.default],
		theme.color.hoverText.default
	].join(' ');
</script>

<div class={commonProps.containerClasses?.join(' ')}>
	<div class={boardItemClasses}>
		<span>{props.text}</span>
	</div>
</div>
