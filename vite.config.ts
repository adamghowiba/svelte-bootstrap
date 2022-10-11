import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import preproccess from '@sveltejs/kit';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
};

export default config;

// const config = {
// 	css: {
// 		preprocessorOptions: {
// 			scss: {
// 				additionalData: '@use "src/variables.scss" as *;'
// 			}
// 		}
// 	}
// };

// export default config;
