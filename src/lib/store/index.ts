import { createThemeStore } from './ThemeStore';
import { createSimpleStore } from './SimpleStore';

export const theme = createThemeStore();
export const userCardVisible = createSimpleStore();
export const userCardBoardsVisible = createSimpleStore();
