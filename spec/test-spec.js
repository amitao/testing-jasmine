// Jasmine Test
const request = require('request');
const testing = require("../server/server");
const localHostUrl = "http://localhost:5000/";


describe("testing", () => {
  // first test is to ensure server HTTP request is returning a 200 / OK
  describe("GET /", () => {
    // content expected to return
    it("status of 200", (done) => {
      // makes call to localhost and expect it to be 200
      request.get(localHostUrl, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    // test to ensure body returns "Testing with Jasmine"
    it("returns testing", (done) => {
      request.get(localHostUrl, (error, response, body) => {
        expect(body).toBe("Testing with Jasmine");
        // close server after test run
        testing.closeServer();
        done();
      });
    });

  });
});



let earth = {
  isRound: true,
  numFromSum: 3
}

describe("Earth", () => {
  it("is round", () => {
    expect(earth.isRound).toBe(true);
  });
  it("is the 3rd planet from the sun", () => {
    expect(earth.numFromSum).toBe(3);
  });
});



// using beforeEach function
describe("push", () => {
  let arr;
  beforeEach( () => {
    arr = [1,3,5];
  })
  it("adds element to an array", () => {
    arr.push(7);
    expect(arr).toEqual([1,3,5,7]);
  });

  it("returns a new array length", () => {
    expect(arr.push(7)).toBe(4);
  });

  it("adds new element to array", () => {
    expect(arr.push({})).toBe(4);
  })
});


// using afterEach function
describe("counting", () => {
  let count = 0;
  
  beforeEach( () => {
    count++;
  });

  // use to reset variables
  afterEach( () => {
    count = 0;
  });

  it("has a counter that increments", () => {
    expect(count).toBe(1);
  });

  it("gets reset", () => {
    expect(count).toBe(1);
  });

});




// Nested describe block

