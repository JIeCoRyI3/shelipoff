import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@honkhonk/vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), reactRefresh(), tsconfigPaths()],
});
