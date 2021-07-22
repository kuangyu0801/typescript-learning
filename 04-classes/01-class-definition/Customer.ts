class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst : string, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Martin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);