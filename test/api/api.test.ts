import createApp from "../../src/app";
import * as request from "supertest";

describe("APP", () => {
  describe("GET /", () => {
    it("should send the homepage", async () => {
      await request(createApp())
        .get("/")
        .expect(200)
        .expect("content-type", /html/);
    });
  });
});
