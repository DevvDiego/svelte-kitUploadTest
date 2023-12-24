import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
            assets: "docs",
			
			// default options are shown. On some platforms
			// these options are set automatically — see below
			fallback: "404.html",
			precompress: false,
			strict: true
		}),

		paths: {
			base: process.env.BASE_PATH
		}
	}
};

export default config;
