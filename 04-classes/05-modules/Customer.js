"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
// export class as module
var Customer = /** @class */ (function () {
    // constructor using parameter property
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // get/set accessor are only available ES5
        get: function () {
            return this._firstName;
        },
        // no return, void need not to be specified
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
