import { Application, send } from "https://deno.land/x/oak/mod.ts";
import api from './api.ts';

const app = new Application();
const PORT = 8000;

app.use(api.routes());

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = [
    "/index.html",
    "/javascripts/script.js",
    "/stylesheets/style.css",
    "/images/favicon.png",
  ];
  if (fileWhitelist.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  }
});


if (import.meta.main) {
  app.listen({
    port: PORT,
  });
}
