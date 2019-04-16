// Jasmine Test
let request = require('request');
let localHostUrl = "http://localhost:5000/";


describe("testing", () => {
  // first test is to ensure server HTTP request is returning a 200 / OK
  describe("GET /", () => {
    // content expected to return
    it("status of 200", () => {
      // makes call to localhost and expect it to be 200
      request.get(localHostUrl, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      })
    })
  });
});