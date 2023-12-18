import { Button, Text } from '$lib/atom';
import Toolbar from '$lib/molecule/Toolbar.svelte';
import * as store from '$lib/store';
import * as theme from '$lib/theme';
import type { MenuProps } from '$lib/types';
import { UserCardMenu } from '$lib/enums';
import * as action from '$lib/action';

export const showMenuButton = {
	component: Button,
	props: {
		icon: 'material-symbols:menu-open-rounded'
	},
	commonProps: {
		color: color.Enum.sky,
		tooltipText: 'Open Menu'
	},
	dynamicBehaviorProps: {
		eventListeners: [
			{
				eventType: 'click',
				handler: () => store.userCardVisible.show()
			}
		]
	}
};

export const homeMenu: MenuProps = {
	header: [],
	body: [
		[
			{
				component: Button,
				props: { text: 'Edit', icon: 'material-symbols:edit-rounded' },
				commonProps: { color: theme.color.Enum.sky }
			}
		],
		[
			{
				component: Button,
				props: { text: 'Account', icon: 'material-symbols:switch-account-rounded' }
			},
			{
				component: Button,
				props: { text: 'Boards', icon: 'material-symbols:dashboard-rounded' },
				dynamicBehaviorProps: {
					eventListeners: [
						{
							eventType: 'click',
							handler: () => store.userCardMenu.set(UserCardMenu.Boards)
						}
					]
				}
			}
		],
		[
			{
				component: Button,
				props: {
					icon: 'material-symbols:sunny-outline-rounded'
				},
				commonProps: {
					id: 'toggle-dark-mode',
					color: theme.color.Enum.amber,
					tooltipText: 'Dark Mode',
					alternateTooltipText: 'Light Mode'
				},
				dynamicBehaviorProps: {
					actions: [{ action: action.fadeInOut, parameters: [180] }],
					eventListeners: [{ eventType: 'click', handler: store.theme.toggle }]
				}
			},
			{
				component: Button,
				props: { icon: 'material-symbols:settings-outline-rounded' },
				commonProps: {
					tooltipText: 'Settings'
				}
			},
			{
				component: Button,
				props: {
					icon: 'material-symbols:logout-rounded',
					alternateIcon: 'material-symbols:login-rounded'
				},
				commonProps: {
					color: theme.color.Enum.red,
					tooltipText: 'Logout',
					alternateColor: theme.color.Enum.sky,
					alternateTooltipText: 'Login'
				}
			}
		]
	]
};

export const boardsMenu: MenuProps = {
	header: [],
	body: [
		[
			{
				component: Text,
				props: { text: 'Electronic' }
			}
		],
		[
			{
				component: Text,
				props: { text: 'Studio' }
			}
		],
		[
			{
				component: Text,
				props: { text: 'Soundtracks' }
			}
		],
		[
			{
				component: Text,
				props: { text: 'Live' }
			}
		],
		[
			{
				component: Text,
				props: { text: 'Band' }
			}
		],
		[
			{
				component: Toolbar,
				props: [
					{
						component: Button,
						props: {
							icon: 'material-symbols:open-in-new-rounded'
						},
						commonProps: {
							tooltipText: 'Open'
						}
					},
					{
						component: Button,
						props: {
							icon: 'material-symbols:text-select-end-rounded'
						},
						commonProps: {
							tooltipText: 'Rename'
						}
					},
					{
						component: Button,
						props: {
							icon: 'material-symbols:file-copy-outline-rounded'
						},
						commonProps: {
							tooltipText: 'Duplicate'
						}
					},
					{
						component: Button,
						props: {
							icon: 'material-symbols:group-add-outline-rounded'
						},
						commonProps: {
							color: theme.color.Enum.emerald,
							tooltipText: 'Share'
						}
					},
					{
						component: Button,
						props: {
							icon: 'material-symbols:delete-rounded'
						},
						commonProps: {
							color: theme.color.Enum.red,
							tooltipText: 'Remove'
						}
					}
				],
				commonProps: {
					containerClasses: ['text-xs']
				}
			}
		]
	]
};
