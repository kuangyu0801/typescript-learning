// compile
// $tsc my-helloworld.ts
console.log("My Hello World!");
// let <var> : <type> = <init value>
var found = true;
var score = 99;
var firstName = "Kuang-Yu";
console.log(firstName);
// using backtick ` to accept variable
console.log(found);
console.log("My score is: " + score);
console.log("My first name is: " + firstName);
console.log("My first name is: " + firstName);
var reviews = [10, 20, 30, 40, 50];
var total = 0;
for (var i = 0; i < reviews.length; i += 1) {
    console.log(reviews[i]);
    total += reviews[i];
}
var sports = ["tennis", "baseball", "swimming"];
for (var i = 0; i < sports.length; i += 1) {
    console.log(sports[i]);
}
sports.push("criket");
console.log("printing using iterator");
// using iterator
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "criket") {
        console.log(sport + "<< newly added");
    }
    else {
        console.log(sport);
    }
}
// arrays are dynamic
console.log(sports[sports.length - 1]);
