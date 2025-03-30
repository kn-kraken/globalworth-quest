import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inclusive: ['Inclusive Sans', 'sans-serif'],
			  },
			  fontWeight: {
				thin: '300', // Define the thin font weight
			  },
		}
	},

	plugins: []
} satisfies Config;
