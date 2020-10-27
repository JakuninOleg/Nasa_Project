import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const PORT = 8000;

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

app.use(async (ctx, next) => {
  await next();
})

if (import.meta.main) {
  app.listen({
    port: PORT,
  });
}
