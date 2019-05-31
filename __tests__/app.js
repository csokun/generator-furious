"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-furious:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([
      "app/index.js",
      "app/healthz/index.js",
      "config/config.dev.json",
      "config/config.json",
      "config/config.test.json",
      "infra/configuration/index.js",
      "infra/fastify/common/Correlation.js",
      "infra/fastify/common/ErrorHandler.js",
      "infra/fastify/index.js",
      "infra/logger/index.js",
      "package-lock.json",
      "package.json",
      "index.js"
    ]);
  });
});
