// Jasmine Test
const request = require('request');
const testing = require("../server/server");
const localHostUrl = "http://localhost:5000/";


// MATCHERS
// toBe() & not.toBe(), toEqual(), toBeDefined(), toContain(), toBeCloseTo()


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
describe("Array", () => {

  let newArr;
  beforeEach( ()=> {
    newArr = [4,8,10];
  });

  describe("#unshift", () => {
    it("adds an element to the begining of the array", () => {
      newArr.unshift(12);
      expect(newArr[0]).toBe(12);
    });
    it("returns the new length", () => {
      expect(newArr.unshift(1000)).toBe(4);
    });
  });

  describe("#push", () => {
    it("adds element to the end of the array", () => {
      newArr.push(14);
      expect(newArr[newArr.length-1]).toBe(14);
    });
    it("returns new array length", () => {
      expect(newArr.push(1000)).toBe(4);
    });
  });

});


// Clock is available for time testing
// syntax: jasmine.clock().install()
// setTimeout
describe("a simple setTimeout", () => {
  let sample;

  // install clock()
  beforeEach(() => {
    // creates spy
    sample = jasmine.createSpy("sampleFunction");
    jasmine.clock().install();
  });

  // uninstall clock()
  afterEach(() => {
    jasmine.clock().install();
  });

  it("only invoked after 1000 ms", () => {
    setTimeout(() => {
      sample();
    }, 1000);

    jasmine.clock().tick(999);
    expect(sample).not.toHaveBeenCalled();

    jasmine.clock().tick(1);
    expect(sample).toHaveBeenCalled();
  });

});