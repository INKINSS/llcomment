/** @type {import('tailwindcss').Config} */
const { nextui, colors } = require("@nextui-org/react");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(14,39,47)',
				grayPrimary:'rgb(103,103,103)',
				purplePrimary: 'rgb(43,14,47)',
				cardHover:'rgb(223,213,255)',
			},
			screens : {
				'ssm': '380px',
			},
			boxShadow: {
				'custom': '0px 0px 25px 4px rgb(0 0 0 / 6%)',
			  }
		},
	},
	darkMode: 'class',
	plugins: [nextui(), require('@tailwindcss/typography'),],
}
