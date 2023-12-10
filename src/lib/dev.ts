import { Button, Text } from '$lib/atom';
import type { ItemProps } from '$lib/types';
import Toolbar from '$lib/molecule/Toolbar.svelte';
import { color } from '$lib/theme';
import * as store from '$lib/store';
import * as action from '$lib/action';
import { UserCardMenu } from '$lib/enums';

export const avatarUrl = 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';
export const email = 'kevin.marilleau@example.com';
export const homeMenuItems: ItemProps[][] = [
	[
		{
			component: Button,
			props: { text: 'Edit', icon: 'material-symbols:edit-rounded' },
			commonProps: { color: color.Enum.sky }
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
				color: color.Enum.amber,
				tooltipText: 'Dark Mode',
				alternateTooltipText: 'Light Mode'
			},
			dynamicBehaviorProps: {
				actions: [{ action: action.fadeInOut, parameters: [180] }],
				eventListeners: [{ eventType: 'click', handler: store.theme.toggleDarkMode }]
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
				color: color.Enum.red,
				tooltipText: 'Logout',
				alternateColor: color.Enum.sky,
				alternateTooltipText: 'Login'
			}
		}
	]
];

export const boardsMenuItems: ItemProps[][] = [
	[
		{
			component: Text,
			props: { text: 'Electronic' }
		},
		{
			component: Text,
			props: { text: 'Studio' }
		},
		{
			component: Text,
			props: { text: 'Soundtracks' }
		},
		{
			component: Text,
			props: { text: 'Live' }
		},
		{
			component: Text,
			props: { text: 'Band' }
		},
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
						color: color.Enum.emerald,
						tooltipText: 'Share'
					}
				},
				{
					component: Button,
					props: {
						icon: 'material-symbols:delete-rounded'
					},
					commonProps: {
						color: color.Enum.red,
						tooltipText: 'Remove'
					}
				}
			],
			commonProps: {
				containerClasses: ['text-xs']
			}
		}
	]
];
