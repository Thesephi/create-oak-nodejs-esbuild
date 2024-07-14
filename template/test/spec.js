/**
 * Forewords:
 * This file is just an example of how we may implement test logic for
 * this project. You can throw this whole file away and write your own
 * tests using whichever test framework you prefer.
 */

import { describe, it, before, after } from "node:test";
import assert from "node:assert";
import { spawn } from "node:child_process";

let cp;
let cpExited;

const waitFor = (ms = 3000) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const tryFetch = async (url, retry = 0, maxRetries = 5) => {
  try {
    return await fetch(url);
  } catch (e) {
    retry++;
    if (retry > maxRetries) throw e;
    await waitFor(200);
    return tryFetch(url, retry);
  }
};

function killCp() {
  if (cp && !cpExited) {
    const killed = cp.kill("SIGTERM");
    if (!killed) console.warn(`test process ${cp.pid} may not have exited cleanly, please ensure it is killed`);
  }
}

process.on("uncaughtExcception", () => {
  console.debug("test: uncaughtException");
  killCp();
});

describe("Test oak-routing-ctrl app build bundle", async () => {
  before(() => {
    cp = spawn("node", ["dist/bundle.js"]);
    cp.on("error", (err) => { console.error(err.stack); });
    cp.on("close", (code) => { cpExited = true; });
  });
  after(() => { killCp(); });

  it("call /v1/hello/:name", async () => {
    const response = await tryFetch("http://127.0.0.1:1993/v1/hello/tester");
    const respText = await response.text();
    assert.strictEqual(respText, "hello, tester");
  });

  it("call /oas.json", async () => {
    const response = await tryFetch("http://127.0.0.1:1993/oas.json");
    const respJson = await response.json();
    assert.deepEqual(respJson, {"openapi":"3.0.0","info":{"version":"1.0.0","title":"My API","description":"This is the API"},"servers":[{"url":"/"}],"components":{"schemas":{},"parameters":{}},"paths":{"/v1/hello/{name}":{"get":{"parameters":[{"schema":{"type":"string"},"required":true,"name":"name","in":"path"}],"responses":{"200":{"description":"Success","content":{"text/html":{"schema":{"type":"string"}}}}}}}}});
  });
});
