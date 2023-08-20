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
			}
		},
		fontFamily: {
			sans: [
				'Outfit',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			]
		}
	},
	plugins: []
};
