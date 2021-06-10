const STRIPE = require("stripe")("sk_test_51IyD7qIkKzhuH6slejJKhVPVa2V6IDLzETDFUsJeIjpXxE3aS0UC3tH60PIJZecdAEfihJlGy6K3CeIKFVqeraLo00CsHxOjQQ");
const CHAI = require('chai');
const CHAIHTTP = require('chai-http');
const APP = require('../index');
const EXPECT = CHAI.expect;
CHAI.use(CHAIHTTP);

describe('Testing the booking routes', function() {

    it('Should fail request due to stripe token being reused', function(done) {
        CHAI.request(APP)
            .post('/bookings/payment')
            .send({
                price: 13.98,
                token: {
                  id: 'tok_1J0aU2IkKzhuH6slqPmUvz9R',
                },
                booking: {
                  name: 'Test Name',
                  movieTitle: 'The GodFather',
                  date: '2021-06-10T23:00:00.000Z',
                  time: '12:30',
                  numberOfSeats: '2',
                  billing_details: {
                    email: 'testemail@email.com'
                  }
                }
              })
            .end(function(err, response) {
                EXPECT(response).to.have.status(500);
                done();
            });
    });
});