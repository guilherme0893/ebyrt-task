import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp = require('chai-http');
import { App } from '../../../src/app';
import { Response } from 'superagent';
import TaskModel from '../../../src/models/task';
import { singleTaskMock } from '../../mocks/tasksMocks/taskMock';

chai.use(chaiHttp);

describe('Tests the POST "/" endpoint', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(TaskModel, "createTask")
      .callsFake(TaskModel.createTask)
      .resolves(singleTaskMock);
    console.log('!!!!!!!!1')
  });

  after(() => {
    TaskModel.createTask.restore();
  });

  it('it is possible to create a new task', async () => {
    chaiHttpResponse = await chai
      .request(App)
      .post('/')
      .send(singleTaskMock);
    expect(chaiHttpResponse).to.be.equal(201);
    expect(chaiHttpResponse.body).to.be.deep.equal(singleTaskMock);
  });
});
