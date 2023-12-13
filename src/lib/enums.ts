export enum UserCardMenu {
	Home,
	Account,
	Boards,
	Settings,
	Edit,
	Authentication
}

export enum SharingOption {
	Private = 'Private',
	PublicWithLink = 'Public with link',
	Public = 'Public'
}

export enum TooltipPosition {
	Top = '-top-1 left-1/2 transform -translate-x-1/2 -translate-y-full',
	Right = '-right-1 top-1/2 transform -translate-y-1/2 translate-x-full',
	Bottom = '-bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full',
	Left = '-left-1 top-1/2 transform -translate-y-1/2 -translate-x-full'
}

export enum ComponentSize {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl'
}

export const ButtonSizeClasses = {
	[ComponentSize.XS]: {
		button: 'px-2 py-1',
		text: 'text-xs sm:text-xs',
		icon: 'w-4 h-4'
	},
	[ComponentSize.SM]: {
		button: 'px-3 py-2',
		text: 'text-sm sm:text-sm',
		icon: 'w-5 h-5'
	},
	[ComponentSize.MD]: {
		button: 'px-4 py-2.5',
		text: 'text-base sm:text-sm',
		icon: 'w-6 h-6'
	},
	[ComponentSize.LG]: {
		button: 'px-6 py-4',
		text: 'text-lg sm:text-base',
		icon: 'w-6 h-6'
	},
	[ComponentSize.XL]: {
		button: 'px-8 py-5',
		text: 'text-xl sm:text-lg',
		icon: 'w-8 h-8'
	}
};
