{
  // 1

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
      console.log(input.toUpperCase());
      return input.toUpperCase();
    } else {
      console.log(input.toLowerCase());
      return input.toLowerCase();
    }
  }

  // 2

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const highRatingItems = items.filter((item) => item.rating >= 4);
    console.log(highRatingItems);
    return highRatingItems;
  }

  // 3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenatedArray = ([] as T[]).concat(...arrays);
    console.log(concatenatedArray);
    return concatenatedArray;
  }

  // 4

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): void {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year); // Call the constructor of the parent class (Vehicle)
      this.model = model;
    }

    getModel(): void {
      console.log(`Model: ${this.model}`);
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");

  // 5

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      const charactersOfValue = value.length;
      console.log(charactersOfValue);
      return charactersOfValue;
    } else if (typeof value === "number") {
      const doubleTheValue = value * 2;
      console.log(doubleTheValue);
      return doubleTheValue;
    } else {
      throw new Error("Invalid input type");
    }
  }

  // 6
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(product: Product[]): Product | null {
    const mostExpensiveProduct = product.reduce((max, min) =>
      max.price > min.price ? max : min
    );
    console.log(mostExpensiveProduct);
    return mostExpensiveProduct;
  }

  // 7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
      console.log("Weekday");
      return "Weekday";
    } else if (day === Day.Saturday || day === Day.Sunday) {
      console.log("Weekend");
      return "Weekend";
    } else {
      console.log("Unknown");
      return "Unknown";
    }
  }
  // 8

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject("Error: Negative number not allowed");
      }
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
}
