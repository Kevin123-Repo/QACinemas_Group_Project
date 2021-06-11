const CHAI = require('chai');
const CHAIHTTP = require('chai-http');
CHAI.use(CHAIHTTP);
const APP = require('../index');
const EXPECT = CHAI.expect;

describe('Testing the discussion board routes', function() {

    it('Should complete getAll request with status 200', function(done) {
        CHAI.request(APP)
            .get('/discussions/getAll')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                done();
            });
    });

    it('Should complete post request with status 201', function(done) {
        CHAI.request(APP)
            .post('/discussions/post')
            .send({'username': 'test', 'comment': 'test comment', 'rating':'2', 'movieTitle': 'Inception'})
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(201);
                done();
            });
    });

    it('Should fail post request due to rating validation', function(done) {
        CHAI.request(APP)
            .post('/discussions/post')
            .send({'name': 'test', 'comment': 'test comment', 'rating':'0', 'movieTitle': 'Inception'})
            .end(function(err, response) {
                EXPECT(response).to.have.status(500);
                done();
            });
    });
});