import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(5, 10, 20, 25);

// declare an empty array of shape
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let theShape of theShapes) {
    console.log(theShape.getInfo());
    console.log(theShape.calculateArea());
    console.log
}