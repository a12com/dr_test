import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const { expect } = chai;

describe('/GET', () => {
  it('it should return "Hello World"', (done) => {
    chai.request('http://localhost:8888')
        .get('/')
        .end((err, res) => {
            expect(res.text).to.equal("Hello World\n");
            done();
        });
  });
});
