import { createThemeStore } from './ThemeStore';
import { createSimpleStore } from './SimpleStore';
import { createUserCardMenuStore } from './MenuStore';

export const theme = createThemeStore();
export const userCardVisible = createSimpleStore();
export const userCardMenu = createUserCardMenuStore();
