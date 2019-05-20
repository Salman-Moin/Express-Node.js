var Mustache = require("mustache");
var result1 = Mustache.render("Hi {{first}} {{last}}!", 
{
    first: "Nicolas",
    last: "Cage"
});

var result2 = Mustache.render("Hi {{first}} {{last}}!", 
{
    first: "Sheryl",
    last: "Sandberg"
});
console.log(result1);
console.log(result2);
