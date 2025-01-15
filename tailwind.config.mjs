/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'RecklessNeueBold':['RecklessNeue Bold'],
				'RecklessNeueMedium':['RecklessNeue Medium'],
				'RecklessNeueMediumItalic':['RecklessNeue Medium Italic'],
				'RecklessNeueRegular':['RecklessNeue Regular'],
				'RecklessNeueRegularItalic':['RecklessNeue Regular Italic'],
				'RecklessNeueSemiBold':['RecklessNeue SemiBold'],
				'RecklessNeueSemiBoldItalic':['RecklessNeue SemiBold Italic'],
				'RecklessNeueThin':['RecklessNeue Thin'],
				'RecklessNeueThinItalic':['RecklessNeue Thin Italic'],
				'CentraNo2-BlackItalic': ['CentraNo2 Black Italic'],
				'CentraNo2-Black': ['CentraNo2 Black'],
				'CentraNo2-Bold': ['CentraNo2 Bold'],
				'CentraNo2-Bolditalic': ['CentraNo2 Bold Italic'],
				'CentraNo2-Book': ['CentraNo2 Book'],
				'CentraNo2-BookItalic': ['CentraNo2 Book Italic'],
				'CentraNo2-Extrabold': ['CentraNo2 Extrabold'],
				'CentraNo2-ExtraboldItalic': ['CentraNo2 Extrabold Italic'],
				'CentraNo2-Hairline': ['CentraNo2 Hairline'],
				'CentraNo2-HairlineItalic': ['CentraNo2 Hairline Italic'],
				'CentraNo2-Light': ['CentraNo2 Light'],
				'CentraNo2-LightItalic': ['CentraNo2 Light Italic'],
				'CentraNo2-Medium': ['CentraNo2 Medium'],
				'CentraNo2-MediumItalic': ['CentraNo2 Medium Italic'],
				'CentraNo2-Thin': ['CentraNo2 Thin'],
				'CentraNo2-ThinItalic': ['CentraNo2 Thin Italic'],
				
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
