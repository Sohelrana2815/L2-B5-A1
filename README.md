## Differences Between Interfaces and Types in TypeScript: A Very Basic Approach

In TypeScript, both `interface` and `type` let you define the shape of your data. They often look alike, but each has its own special powers. To keep things simple, we'll use the name `Animal` for both examples.

---

### 1. Defining the Shape

**Using `interface`**

```ts
interface Animal {
  name: string;
  age: number;
}
```

**Using `type`**

```ts
type Animal = {
  name: string;
  age: number;
};
```

> Both definitions say: “An `Animal` has a `name` (string) and an `age` (number).”

---

### 2. Declaration Merging

**Interfaces** can be declared more than once and TypeScript will merge them together:

```ts
interface Animal {
  species: string;
}
interface Animal {
  speak: () => void;
}

const pet: Animal = {
  name: "Buddy",
  age: 4,
  species: "Dog",
  speak: () => console.log("Woof!")
};
```

**Types** cannot be redeclared. Trying to reuse the same name causes an error:

```ts
type Animal = { color: string };
// Error: Duplicate identifier 'Animal'.
// type Animal = { size: number }; // ❌
```

---

### 3. Extending and Combining

* **Interfaces** use the `extends` keyword:

  ```ts
  interface Animal {
    name: string;
    age: number;
  }
  interface Pet extends Animal {
    owner: string;
  }
  const myPet: Pet = { name: "Bella", age: 2, owner: "Alice" };
  ```

* **Types** use **intersection** (`&`):

  ```ts
  type Animal = { name: string; age: number };
  type Pet = Animal & { owner: string };
  const myPet: Pet = { name: "Max", age: 3, owner: "Bob" };
  ```

> Both approaches let you build on an existing definition, but the syntax differs.

---

### 4. When to Choose Which?

| Scenario                           | Use `interface` | Use `type`                                |
| ---------------------------------- | --------------- | ----------------------------------------- |
| You want declaration merging       | ✔️              | ❌                                         |
| You need to extend with `extends`  | ✔️              | ❌ (use `&`)                               |
| You need unions or tuples          | ❌               | ✔️ (e.g., `string \| number`)             |
| You’re naming a primitive or tuple | ❌               | ✔️ (e.g., `type Pair = [string, number]`) |

**In short:**

* Reach for **`interface`** when you’re modeling objects, especially if you expect to extend or merge definitions.
* Reach for **`type`** when you need the flexibility of unions, tuples, or combining multiple types.

---

By knowing these differences, you can pick the right tool for your TypeScript code and keep it clear, flexible, and easy to maintain.
