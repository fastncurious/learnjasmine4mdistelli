var request = require("request");
var helloWorld = require("../index.js")
var baseUrl = "http://localhost:3000/"


describe ("Hello World Test", function(){
    describe("GET /", function() {
        it("should reurn a defined response",function(done){
            request.get(baseUrl,function(error,response,body){
                expect(response).toBeDefined();
                done();
            });
        });
        it("should return status code 200", function(done){
            request.get(baseUrl, function(error, response, body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("should return Hello World string", function(done){
            request.get(baseUrl,function(error, response,body){
                expect(body).toBe("Hello World");
                done();
            });
        });
        it("should call closeServer method", function(done){
              spyOn(helloWorld,"dummyFunction");
              helloWorld.dummyFunction();
              expect(helloWorld.dummyFunction).toHaveBeenCalled();
              helloWorld.closeServer();
              done();
        });
    });
});

/* Reference
https://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/pdf/

C:\Users\XXXXX\Desktop\Learning-Jasmine\learnjasmine4mdistelli>npm ls -g --depth=0
C:\Users\XXXX\AppData\Roaming\npm
+-- bower@1.7.7
+-- jasmine@2.5.0
+-- learnyounode@2.5.2
+-- node-gyp@2.0.1
+-- nodemon@1.8.1
+-- swagger@0.6.0
`-- yo@1.5.1
C:\Users\XXXXX\Desktop\Learning-Jasmine\learnjasmine4mdistelli>

istanbul with Jasmine-node
https://bryce.fisher-fleig.org/blog/setting-up-istanbul-with-jasmine/

*/
