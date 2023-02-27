const path = require("path");

// Get the base filnemae

console.log(__filename);
console.log(path.basename(__filename));

__filename.split(__filename.split("\\")[__filename.split("\\").length -1]);


console.log(path.dirname(__filename));
console.log(__dirname);

console.log(path.extname(__filename));


console.log(path.parse(__filename));

console.log(path.parse(__filename).ext);

console.log(path.join(__dirname, "test", "hello.html"));