import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [createVuePlugin()],
    server: {
        host: '0.0.0.0',//指定服务器主机名 
        port: 8088,//指定服务器端口。注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是服务器最终监听的实际端口
        strictPort: false,//为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
        open: true,// 在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名
        proxy: {//跨域
            // 如果是 /api 打头，则访问地址如下
            '/api': {
                target: 'http://localhost:8088',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            },
        },
        hmr: { overlay: false }
    },

    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            }
        ]
    },
})