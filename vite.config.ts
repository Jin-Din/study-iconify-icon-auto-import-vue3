import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
// icon 插件
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// icon 加载 loader
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: path.resolve(path.resolve(__dirname, "./src"), "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "icon",
          //标识自定义的图标集，与下面Icons的customCollections保持一致
          customCollections: ["svg"],
        }),
      ],
      dts: "src/types/components.d.ts",
    }),
    Icons({
      compiler: "vue3",
      //自动安装 iconfy
      autoInstall: true,
      //自定义图标加载
      customCollections: {
        //自定义的svg图标文件路径
        svg: FileSystemIconLoader("public/images/svg", (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" width="1em" height="1em" ')),
      },
    }),
  ],
});
