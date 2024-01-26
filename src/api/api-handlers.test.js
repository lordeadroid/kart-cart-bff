const request = require("supertest");
const { createApp } = require("../app");

describe("Test the root path", () => {
  test("It should respond with 200 OK", () => {
    const response = request(createApp).get("/");
    console.log(response);
    expect(response).toBe(200);
    expect(response.body).toEqual({ message: "Hello, World!" });
  });
});
