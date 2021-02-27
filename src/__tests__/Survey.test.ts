
import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../app';


describe("Surveys", async () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/Surveys").send({
            title: "user@example.com",
            description: "User Example"
        });

        expect(response.status).toBe(201);

        expect(response.body).toHaveProperty("id");
    });



});