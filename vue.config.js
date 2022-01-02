const { defineConfig } = require("@vue/cli-service");

const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");

//let renderedRoutes = ["/", "/components", "/about", "/contact"];
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "production") return;

    return {
      plugins: [
        new PrerenderSpaPlugin({
          // Absolute path to compiled SPA
          staticDir: path.resolve(__dirname, "dist"),
          // indexPath: path.join(__dirname, "dist", "index.html"),
          // List of routes to prerender
          routes: ["/", "/about"],
          renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            headless: false,
            //renderAfterElementExists: "#app",
            renderAfterTime: 50000,
            maxConcurrentRoutes: 1,
            // waitUntil: "domcontentloaded",
            // ignoreHTTPSErrors: true,
            // timeout: 0,
          }),
        }),
      ],
    };
  },
});

// TODO: Prerenderer not working. Puppeteer loads dist with Syntax Error Unexpected Token "."
