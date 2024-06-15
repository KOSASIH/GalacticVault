// integration/app.test.ts
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ConfigService } from '@nestjs/config';

describe('Integration Test (e2e)', () => {
  let app: INestApplication;
  let configService: ConfigService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    configService = app.get(ConfigService);

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 200 OK', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/);
  });

  it('should return Swagger documentation', () => {
    return request(app.getHttpServer())
      .get('/api')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('should create a new banking system', async () => {
    const data = {
      name: 'Personal Checking',
      description: 'Personal checking account',
      accountNumber: '1234567890',
      accountType: 'checking',
      balance: 1000,
    };

    const response = await request(app.getHttpServer())
      .post('/banking-systems')
      .send(data)
      .expect(201);

    expect(response.body).toMatchObject(data);
  });

  it('should get all banking systems', async () => {
    const response = await request(app.getHttpServer())
      .get('/banking-systems')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a banking system by ID', async () => {
    const id = '1';

    const response = await request(app.getHttpServer())
      .get(`/banking-systems/${id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', id);
  });

  it('should update a banking system', async () => {
    const id = '1';
    const data = {
      name: 'Updated Personal Checking',
      description: 'Updated personal checking account',
      accountNumber: '1234567890',
      accountType: 'checking',
      balance: 2000,
    };

    const response = await request(app.getHttpServer())
      .put(`/banking-systems/${id}`)
      .send(data)
      .expect(200);

    expect(response.body).toMatchObject(data);
  });

  it('should delete a banking system', async () => {
    const id = '1';

    await request(app.getHttpServer())
      .delete(`/banking-systems/${id}`)
      .expect(204);

    await request(app.getHttpServer())
      .get(`/banking-systems/${id}`)
      .expect(404);
  });

  // Repeat the above tests for CryptoGateway and OmniFusionToken
});
