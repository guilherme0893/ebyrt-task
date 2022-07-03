import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import { App } from '../../../src/app';
import { Response } from 'superagent';
import TaskModel from '../../../src/models/task';
import { taskMock } from '../../mocks/tasksMocks/taskMock';

chai.use(chaiHTTP);

describe('Tests the GET "/" endpoint', () => {
  let chaiHttpResponse: Response;
  
  beforeEach(async () => {
    sinon
      .stub(TaskModel.prototype, 'getAll')
      .resolves(taskMock);
  });

  afterEach(() => {
    (TaskModel.prototype.getAll as sinon.SinonStub).restore();
  });

  it('if successful, returns all tasks and a status 200', async () => {
    chaiHttpResponse = await chai
      .request(App)
      .get('/')
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(taskMock)
  });
});
