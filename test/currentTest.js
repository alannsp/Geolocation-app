//
describe("firsttest",function(){
	it("first test case",function(){
		expect(1+1).toBe(2);
	})
});
/*describe("Ajax testing", function () {
it ("Logs text from the service to the console", function () {

  var consoleSpy = spyOn(console, "log");

  jasmine.Ajax.stubRequest('http://ip-api.com/json/').andReturn({
    "status": 200, 
    "contentType": 'text/plain',
    "responseText": '{"as":"AS6128 Cablevision Systems Corp.",'+
	'"city":"Piscataway","country":"United States","countryCode":"US",'+
	'"isp":"Optimum Online","lat":40.5516,"lon":-74.4637,"org":"Optimum Online",'+
	'"query":"96.57.154.234","region":"NJ","regionName":"New Jersey",'+
	'"status":"success","timezone":"America/New_York","zip":"08854"}'
  });

  var result = Hello.callWorld();
  expect(consoleSpy).toHaveBeenCalledWith('Hello from the world');
});
});
*/
