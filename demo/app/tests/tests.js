var Facebook = require("nativescript-facebook").Facebook;
var facebook = new Facebook();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(facebook.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(facebook.greet()).toEqual("Hello, NS");
  });
});