const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const taskModel = require('../../../src/models/task');
const app = require('../../../src/app');
const { taskMock } = require('../../mocks/tasksMocks/taskMock');

chai.use(chaiHttp);

describe('Tests the GET "/" endpoint', () => {
  let chaiHttpResponse;

  beforeEach(async () => {
    sinon.stub(taskModel, 'getAll').resolves(taskMock);
  });

  afterEach(() => {
    taskModel.getAll.restore();
  });

  it('if successful, returns all tasks and a status 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(taskMock);
  });
});
