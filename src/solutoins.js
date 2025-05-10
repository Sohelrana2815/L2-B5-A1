"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    // 1
    function formatString(input, toUpper) {
        if (toUpper === undefined || toUpper === true) {
            console.log(input.toUpperCase());
            return input.toUpperCase();
        }
        else {
            console.log(input.toLowerCase());
            return input.toLowerCase();
        }
    }
    // 2
    function filterByRating(items) {
        const highRatingItems = items.filter((item) => item.rating >= 4);
        console.log(highRatingItems);
        return highRatingItems;
    }
    // 3
    function concatenateArrays(...arrays) {
        const concatenatedArray = [].concat(...arrays);
        console.log(concatenatedArray);
        return concatenatedArray;
    }
    // 4
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year); // Call the constructor of the parent class (Vehicle)
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    // 5
    function processValue(value) {
        if (typeof value === "string") {
            const charactersOfValue = value.length;
            console.log(charactersOfValue);
            return charactersOfValue;
        }
        else if (typeof value === "number") {
            const doubleTheValue = value * 2;
            console.log(doubleTheValue);
            return doubleTheValue;
        }
        else {
            throw new Error("Invalid input type");
        }
    }
    function getMostExpensiveProduct(product) {
        const mostExpensiveProduct = product.reduce((max, min) => max.price > min.price ? max : min);
        console.log(mostExpensiveProduct);
        return mostExpensiveProduct;
    }
    // 7
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDayType(day) {
        if (day >= Day.Monday && day <= Day.Friday) {
            console.log("Weekday");
            return "Weekday";
        }
        else if (day === Day.Saturday || day === Day.Sunday) {
            console.log("Weekend");
            return "Weekend";
        }
        else {
            console.log("Unknown");
            return "Unknown";
        }
    }
    // 8
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (n < 0) {
                    reject("Error: Negative number not allowed");
                }
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            });
        });
    }
}
