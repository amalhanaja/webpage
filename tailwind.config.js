/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			size: {
				120: '28rem'
			},
			boxShadow: {
				xs: '1px 1px 0 0',
				sm: '2px 2px 0 0',
				md: '4px 4px 0 0',
				lg: '6px 6px 0 0',
				xl: '8px 8px 0 0',
				'2xl': '12px 12px 0 0',
				'3xl': '16px 16px 0 0'
			},
			borderWidth: {
				1: '1px'
			}
		}
	},
	plugins: []
};
