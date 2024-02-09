<<<<<<< HEAD
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
=======
import { describe, test } from "@jest/globals";

import createApp from "../../src/app";
import request from "supertest";

describe("GET /category/men", () => {
  test("should get data for men's category", async () => {
    const response = await request(createApp()).get("/category/men");

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  // test("should send the homepage", async () => {
  //   jest.clearAllMocks();
  //   jest.mock("../../src/lib/request-data");
  //   (requestData as jest.Mock).mockImplementationOnce(() => {});

  //   const response = await request(createApp()).get("/category/men");
  //   expect(response.status).toBe(200);
  // });
>>>>>>> 39be971 (added category endpoint)
});
