import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it("Should be able to create a new survey", async () => {
    const res = await request(app).post("/surveys").send({
      title: "Title Exemple",
      description: "Description Exemple",
    });

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty("id");
  });

  it("Should be able to grt all surveys", async () => {
    await request(app).post("/surveys").send({
      title: "Title Exemple2",
      description: "Description Exemple2",
    });

    const res = await request(app).get("/surveys");

    expect(res.body.length).toBe(2);
  })
})