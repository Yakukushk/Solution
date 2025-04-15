import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  css: ["~/app/styles/style.css"],
  components: true,

  vite: {
    plugins: [tailwindcss()],
  },

  routeRules: {
    "/": { prerender: true },
  },
  plugins: ["~/app/providers/plugins/hookPlugin.ts"],
  runtimeConfig: {
    public: {
      middleware: {
        redirect: true 
      }
    }
  },

  build: {
    extend(config) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore "Property 'buildContext' does not exist on type 'NuxtOptionsBuild'"
      const rootDir = this.buildContext.options.rootDir;
      const joinSrc = (s) => path.join(rootDir, "src", s);

      if (!config?.resolve?.alias) {
        throw new Error("webpack config aliases not found!");
      }

      config.resolve.alias["@features"] = joinSrc("features");
      config.resolve.alias["@shared"] = joinSrc("shared");
      config.resolve.alias["@ui"] = joinSrc("ui");
    },
  },

  modules: ["@pinia/nuxt", "@vee-validate/nuxt"],
  pinia: {
    storesDirs: ["./app/stores/**", "./shared/model/**"],
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
});
