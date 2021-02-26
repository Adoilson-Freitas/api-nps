import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new user", async () => {
    const res = await request(app).post("/users").send({
      email: "user@gmail.com",
      name: "User Exemple"
    });

    expect(res.status).toBe(201)
  });

  it("Should be not able to create a user with exists email", async () => {
    const res = await request(app).post("/users").send({
      email: "user@gmail.com"   
    });

    expect(res.status).toBe(400)
  });
})