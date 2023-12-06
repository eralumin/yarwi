import type * as theme from '$lib/theme';

export type CommonProps = {
	color?: theme.color.Enum;
	borderRadius: theme.border.BorderRadius;
	containerClasses?: string[];
};
