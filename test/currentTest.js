//
describe("firsttest",function(){
	it("first test case",function(){
		expect(1+1).toBe(2);
	})
});
describe("Ajax testing", function () {
it ("Logs text from the service to the console", function () {

  var consoleSpy = spyOn(console, "log");

  jasmine.Ajax.stubRequest('/some/url').andReturn({
    "status": 200, 
    "contentType": 'text/plain',
    "responseText": 'Hello from the world'
  });

  var result = Hello.callWorld();
  expect(consoleSpy).toHaveBeenCalledWith('Hello from the world');
});
});

