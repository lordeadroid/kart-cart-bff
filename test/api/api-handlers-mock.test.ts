import { describe, jest, test } from "@jest/globals";

import createApp from "../../src/app";
import request from "supertest";
import requestData from "../../src/lib/request-data";
import mockCategoryData from "../test-data/category-data";

jest.mock("../../src/lib/request-data");

describe("GET /category/men", () => {
  (requestData as jest.Mock).mockImplementation(() => {
    return mockCategoryData;
  });

  test("should get data for men's category", async () => {
    const response = await request(createApp()).get("/category/men");

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body).toStrictEqual(mockCategoryData.men);
  });
});
