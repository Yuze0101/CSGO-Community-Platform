import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	// server: {
	// 	//服务相关配置
	// 	host: "localhost",
	// 	port: 8080, //端口
	// 	open: true, //自动打开
	// 	proxy: {
	// 		//代理
	// 		"/api": {
	// 			target: "http://139.9.54.245:50000",
	// 		},
	// 	},
	// },
})
