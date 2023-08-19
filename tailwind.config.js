/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				'on-secondary': 'var(--color-on-secondary)',
				background: 'var(--color-background)',
				'on-background': 'var(--color-on-backgropund)',
				surface: 'var(--color-surface)',
				'on-surface': 'var(--color-on-surface)',
				neutral: 'var(--color-neutral)'
				// Secondary 228CDB
				// Background E7E5E4
				// On Background 1C1917
				// OnSecondary F4F4F5
				// Surface F5F5F4
				// OnSurface 1C1917
				// Neutral 44403C
				// Primary Hover DB652E 20%
			}
		}
	},
	plugins: []
};
