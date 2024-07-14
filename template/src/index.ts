// do NOT import from @oak/oak/application directly
// because `@dklab/oak-routing-ctrl` imports from `@jsr/oak__oak`
// @NOTE this is seemingly how JSR & NPM are currently interoperating
import { Application } from "@jsr/oak__oak/application";
import { useOakServer, useOas } from "@jsr/dklab__oak-routing-ctrl";
import { MyController } from "./MyController";

const app = new Application();
useOakServer(app, [MyController]);
useOas(app);
await app.listen({ port: 1993 });
