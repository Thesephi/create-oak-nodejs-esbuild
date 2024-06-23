import { Controller, ControllerMethodArgs, Get, Post } from "@jsr/dklab__oak-routing-ctrl";
import type { Context, RouteContext } from "@jsr/oak__oak";

@Controller("/v1")
export class MyController {
  @Get("/hello/:name")
  @ControllerMethodArgs("param")
  hello(
    param: Record<string, string>,
    ctx: Context & RouteContext<"/hello/:name">
  ) {
    console.log('hello,', ctx.params.name);
    return `hello, ${param.name}`;
  }
}
