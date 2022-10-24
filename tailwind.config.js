/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter'],
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'ping-slow': 'ping 3s linear infinite',
				'pulse-slow': 'pulse 3s linear infinite',
				'bounce-slow': 'bounce 3s linear infinite',
			},
		},
	},
	plugins: [],
};
