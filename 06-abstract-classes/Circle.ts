import {Shape} from './Shape';

export class Circle extends Shape {
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    constructor (theX: number, theY : number, private _radius: number) {
        // using the super class constuctor
        super(theX, theY);
    }

    // overriding super method
    getInfo() : string {
        return super.getInfo() + ` radius = ${this._radius}`;
    }

}