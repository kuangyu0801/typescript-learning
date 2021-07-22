// compile
// $tsc -noEmitOnError my-helloworld.ts

console.log("My Hello World!");

// let <var> : <type> = <init value>
let found: boolean = true;
let score: number = 99;
let firstName: string = "Kuang-Yu";

console.log(firstName);
// using backtick ` to accept variable
console.log(found);
console.log("My score is: " + score);
console.log("My first name is: " + firstName);
console.log(`My first name is: ${firstName}`);

let reviews: number[] = [10, 20, 30, 40, 50];
let total: number = 0;

for (let i = 0; i < reviews.length; i += 1) {
    console.log(reviews[i]);
    total += reviews[i];
}

let sports : string[] = ["tennis", "baseball", "swimming"];
for (let i = 0; i < sports.length; i += 1) {
    console.log(sports[i]);
}
// arrays are dynamic

sports.push("criket");
console.log(sports[sports.length - 1]);
console.log("printing using iterator");
// using iterator
for (let sport of sports) {
    if (sport == "criket") {
        console.log(sport + "<< newly added")
    } else {
        console.log(sport);
    }
}
