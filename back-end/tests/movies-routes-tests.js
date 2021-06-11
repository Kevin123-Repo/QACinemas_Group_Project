const CHAI = require('chai');
const CHAIHTTP = require('chai-http');
CHAI.use(CHAIHTTP);
const APP = require('../index');
const EXPECT = CHAI.expect;

describe('Testing the movie routes', function() {

    it('Should complete getAll request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/getAll')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf.above(4);
                done();
            });
    });

    it('Should complete getCurrent request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/getCurrent')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf.above(3);
                done();
            });
    });

    it('Should complete getNewReleases request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/getNewReleases')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf.above(3);
                done();
            });
    });

    it('Should complete get by title request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/get/Inception')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.property('actors');
                done();
            });
    });

    it('Should fail get by title request with status 500', function(done) {
        CHAI.request(APP)
            .get('/movies/get/Inc')
            .end(function(err, response) {
                EXPECT(response).to.have.status(500);
                done();
            });
    });

    it('Should complete get by full query request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/find/Inception')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf(1);
                done();
            });
    });

    it('Should complete get by partial query request with status 200', function(done) {
        CHAI.request(APP)
            .get('/movies/find/godf')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf(1);
                done();
            });
    });

    it('Should get empty return from get by query request', function(done) {
        CHAI.request(APP)
            .get('/movies/find/xfyrhg')
            .end(function(err, response) {
                EXPECT(err).to.be.null;
                EXPECT(response).to.have.status(200);
                EXPECT(response.body).to.have.lengthOf(0);
                done();
            });
    });
});