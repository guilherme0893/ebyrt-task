const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const taskModel = require('../../../src/models/task');
const app = require('../../../src/app');
const { singleTaskMock } = require('../../mocks/tasksMocks/taskMock');

chai.use(chaiHttp);

describe('Tests the POST "/" endpoint', () => {
  let chaiHttpResponse;

  beforeEach(async () => {
    sinon.stub(taskModel, 'createTask').resolves(singleTaskMock);
  });

  afterEach(() => {
    taskModel.createTask.restore();
  });

  it('if successful, returns all tasks and a status 201', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/');
    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(chaiHttpResponse.body).to.be.deep.equal(singleTaskMock);
  });
});
