// tsc --target ES5 --noEmitOnError
// tsc --init
class Customer {
    // default accessor is public
    private _firstName: string;
    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    constructor(theFirst : string, theLast : string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // get/set accessor are only available ES5
    public get firstName(): string {
        return this._firstName;
    }
    
    // no return, void need not to be specified
    public set firstName(value: string) {
        this._firstName = value;
    }
}

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);