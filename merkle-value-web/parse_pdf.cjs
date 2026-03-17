const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('d:/Project/Merkle Website/Final Option 5.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("=== PDF CONTENT START ===");
    console.log(data.text);
    console.log("=== PDF CONTENT END ===");
}).catch(function(error){
    console.error("Error parsing:", error);
});
