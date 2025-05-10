{
  // 1

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper === true) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
  // 2

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const highRatingItems = items.filter((item) => item.rating >= 4);
    return highRatingItems;
  }

  // 3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
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

  // myCar.getInfo();
  // myCar.getModel();

  // 5

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
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
    return mostExpensiveProduct;
  }

  // 7

  enum Day {
    Monday, //0
    Tuesday, //1
    Wednesday, //2
    Thursday, //3
    Friday, //4
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
