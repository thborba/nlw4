
import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../app';


describe("Users", async () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/Users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201);
    });


    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/Users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });








});