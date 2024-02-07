import { describe, jest, test } from "@jest/globals";
import * as request from "supertest";

import createApp from "../../src/app";
import requestData from "../../src/lib/request-data";
import categoryData from "../test-data/category-data";

jest.mock("../../src/lib/request-data");

describe("/category/men", () => {
  test("should send the data for the category", async () => {
    (requestData as jest.Mock).mockImplementation(() => 1);

    await request(createApp())
      .get("/category/men")
      .expect(200)
      .expect("content-type", /json/)
      .expect(categoryData);
  });
});
