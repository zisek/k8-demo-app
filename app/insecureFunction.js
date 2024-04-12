// (CWE-359)
// This sample JavaScript file contains an insecure function that logs a password to the console. 
// It can be used to test SAST tools' ability to identify sensitive information exposure.
function insecureFunction(password) {
  console.log("Received password: " + password);

  var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2*1024*1024);  // Noncompliant Web SQL database

}
var userInput = "sensitivePassword";
var KEY_TOKEN = "thisisasecrettokenthatnobodyshouldsee";
var openai_api_key = "password";

insecureFunction(userInput);