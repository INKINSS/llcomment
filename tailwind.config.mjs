/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(14,39,47)'
			}
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
