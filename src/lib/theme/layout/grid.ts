export const colSizeMobile = {
	None: 'grid-cols-none',
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
	7: 'grid-cols-7',
	8: 'grid-cols-8',
	9: 'grid-cols-9',
	10: 'grid-cols-10',
	11: 'grid-cols-11',
	12: 'grid-cols-12'
};

export const colSizeDesktop = {
	None: 'sm:grid-cols-none',

	1: 'sm:grid-cols-1',
	2: 'sm:grid-cols-2',
	3: 'sm:grid-cols-3',
	4: 'sm:grid-cols-4',
	5: 'sm:grid-cols-5',
	6: 'sm:grid-cols-6',
	7: 'sm:grid-cols-7',
	8: 'sm:grid-cols-8',
	9: 'sm:grid-cols-9',
	10: 'sm:grid-cols-10',
	11: 'sm:grid-cols-11',
	12: 'sm:grid-cols-12'
};

export const rowSizeMobile = {
	None: 'grid-rows-none',
	1: 'grid-rows-1',
	2: 'grid-rows-2',
	3: 'grid-rows-3',
	4: 'grid-rows-4',
	5: 'grid-rows-5',
	6: 'grid-rows-6'
};

export const rowSizeDesktop = {
	None: 'sm:grid-rows-none',
	1: 'sm:grid-rows-1',
	2: 'sm:grid-rows-2',
	3: 'sm:grid-rows-3',
	4: 'sm:grid-rows-4',
	5: 'sm:grid-rows-5',
	6: 'sm:grid-rows-6'
};

export const colSpanMobile = {
	Auto: 'col-span-1',
	Full: 'col-span-full',
	1: 'col-span-1',
	2: 'col-span-2',
	3: 'col-span-3',
	4: 'col-span-4',
	5: 'col-span-5',
	6: 'col-span-6',
	7: 'col-span-7',
	8: 'col-span-8',
	9: 'col-span-9',
	10: 'col-span-10',
	11: 'col-span-11',
	12: 'col-span-12',
	StartAuto: 'col-start-auto',
	Start1: 'col-start-1',
	Start2: 'col-start-2',
	Start3: 'col-start-3',
	Start4: 'col-start-4',
	Start5: 'col-start-5',
	Start6: 'col-start-6',
	Start7: 'col-start-7',
	Start8: 'col-start-8',
	Start9: 'col-start-9',
	Start10: 'col-start-10',
	Start11: 'col-start-11',
	Start12: 'col-start-12',
	Start13: 'col-start-13',
	EndAuto: 'col-end-auto',
	End1: 'col-end-1',
	End2: 'col-end-2',
	End3: 'col-end-3',
	End4: 'col-end-4',
	End5: 'col-end-5',
	End6: 'col-end-6',
	End7: 'col-end-7',
	End8: 'col-end-8',
	End9: 'col-end-9',
	End10: 'col-end-10',
	End11: 'col-end-11',
	End12: 'col-end-12',
	End13: 'col-end-13'
};

export const colSpanDesktop = {
	Auto: 'sm:col-span-1',
	Full: 'sm:col-span-full',
	1: 'sm:col-span-1',
	2: 'sm:col-span-2',
	3: 'sm:col-span-3',
	4: 'sm:col-span-4',
	5: 'sm:col-span-5',
	6: 'sm:col-span-6',
	7: 'sm:col-span-7',
	8: 'sm:col-span-8',
	9: 'sm:col-span-9',
	10: 'sm:col-span-10',
	11: 'sm:col-span-11',
	12: 'sm:col-span-12',
	StartAuto: 'sm:col-start-auto',
	Start1: 'sm:col-start-1',
	Start2: 'sm:col-start-2',
	Start3: 'sm:col-start-3',
	Start4: 'sm:col-start-4',
	Start5: 'sm:col-start-5',
	Start6: 'sm:col-start-6',
	Start7: 'sm:col-start-7',
	Start8: 'sm:col-start-8',
	Start9: 'sm:col-start-9',
	Start10: 'sm:col-start-10',
	Start11: 'sm:col-start-11',
	Start12: 'sm:col-start-12',
	Start13: 'sm:col-start-13',
	EndAuto: 'sm:col-end-auto',
	End1: 'sm:col-end-1',
	End2: 'sm:col-end-2',
	End3: 'sm:col-end-3',
	End4: 'sm:col-end-4',
	End5: 'sm:col-end-5',
	End6: 'sm:col-end-6',
	End7: 'sm:col-end-7',
	End8: 'sm:col-end-8',
	End9: 'sm:col-end-9',
	End10: 'sm:col-end-10',
	End11: 'sm:col-end-11',
	End12: 'sm:col-end-12',
	End13: 'sm:col-end-13'
};

export function getColSpanFromRowLength(rowLength: number): string {
	const colSpan = (1 / rowLength) * 12;
	return colSpanDesktop[colSpan] || '';
}
