import { describe, test } from "@jest/globals";

import createApp from "../../src/app";
import * as request from "supertest";

describe("GET /", () => {
  test("should send the homepage", async () => {
    await request(createApp())
      .get("/")
      .expect(200)
      .expect("content-type", /html/);
  });
});
