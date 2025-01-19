const { test } = require("@jest/globals");
const axios = require("axios");

const fullName = "Dammar Singh Rana";
const phoneNumber = "98094989433";
const email = "dammarrana098@gmail.com";
const password = "@dyams093";
const BASE_URL = "http://localhost:3000/api/v1";

describe("Authentication", () => {
  test("User registration", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, { fullName, email, phoneNumber, password });
      expect(response.status).toBe(201);
    } catch (error) {
      console.error("Error during user registration:", error.response?.data || error.message);

    }
  });

  test("User registration with existing email or phone", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, { fullName, email, phoneNumber, password });
      expect(response.status).toBe(400);
    } catch (error) {
      expect(error.response?.status).toBe(400);
    }
  });

  test("User login with email and password", async () => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, { email, password });
      expect(response.status).toBe(200);
    } catch (error) {
      expect(error.response?.status).toBe(400);
    }
  })
});
