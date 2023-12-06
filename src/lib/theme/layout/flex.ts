interface FlexBasisLayout {
	[key: string]: string;
}

export const basisMobile: FlexBasisLayout = {
	Full: 'basis-full',
	None: 'basis-0',
	'1/12': 'basis-1/12',
	'2/12': 'basis-2/12',
	'3/12': 'basis-3/12',
	'4/12': 'basis-4/12',
	'5/12': 'basis-5/12',
	'6/12': 'basis-6/12',
	'7/12': 'basis-7/12',
	'8/12': 'basis-8/12',
	'9/12': 'basis-9/12',
	'10/12': 'basis-10/12',
	'11/12': 'basis-11/12'
};

export const basisDesktop = {
	Full: 'sm:basis-full',
	None: 'sm:basis-0',
	'1/12': 'sm:basis-1/12',
	'2/12': 'sm:basis-2/12',
	'3/12': 'sm:basis-3/12',
	'4/12': 'sm:basis-4/12',
	'5/12': 'sm:basis-5/12',
	'6/12': 'sm:basis-6/12',
	'7/12': 'sm:basis-7/12',
	'8/12': 'sm:basis-8/12',
	'9/12': 'sm:basis-9/12',
	'10/12': 'sm:basis-10/12',
	'11/12': 'sm:basis-11/12'
};

export function fractionToString(fraction: number): string {
	const roundedFraction = Math.round(fraction * 12) / 12;
	return (
		Object.keys(basisMobile).find((key) => {
			const [numerator, denominator] = key.split('/');
			return denominator === '12' && Number(numerator) / 12 === roundedFraction;
		}) || ''
	);
}
