import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src")
		},
		extensions: [".jsx", ".js", ".vue", ".css", ".ts", ".tsx", "css"]
	},
	plugins: [vue(), vueJsx()],
	server: {
		port: 8099,
		host: "172.168.10.75",
		proxy: {
			"/api": {
				target: "http://172.168.10.62:8085/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, "")
			},
			"/read": {
				target: "http://172.168.10.105:5000/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/read/, "")
			}
		}
	}
});
