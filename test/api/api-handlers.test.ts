import { describe, test } from "@jest/globals";

import createApp from "../../src/app";
import request from "supertest";

describe("GET /category/men", () => {
  test("should able to get men's category", async () => {
    const response = await request(createApp()).get("/category/men");

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("should able to get women's category", async () => {
    const response = await request(createApp()).get("/category/women");

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("should able to get women's category", async () => {
    const response = await request(createApp()).get("/category/kids");

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
});
