// (CWE-359)
// This sample JavaScript file contains an insecure function that logs a password to the console. 
// It can be used to test SAST tools' ability to identify sensitive information exposure.
function insecureFunction(password) {
  console.log("Received password: " + password);

  var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2*1024*1024);  // Noncompliant Web SQL database

}
let userInput = "sensitivePassword";
var KEY_TOKEN = "thisisasecrettokenthatnobodyshouldsee";
var openai_api_key = "password";

// Noncompliant NoSQL operations should not be vulnerable to injection attacks https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-5147/
const { MongoClient } = require('mongodb');

function nosql(req, res) {
    let query = { user: req.query.user, city: req.query.city };

    MongoClient.connect(url, (err, db) => {
        db.collection("users")
        .find(query) // Noncompliant
        .toArray((err, docs) => { });
    });
}



// Cipher algorithms should be robust https://rules.sonarsource.com/javascript/type/Vulnerability/RSPEC-5547/

const crypto = require('crypto');
crypto.createCipheriv("DES", key, iv); // Noncompliant



insecureFunction(userInput);