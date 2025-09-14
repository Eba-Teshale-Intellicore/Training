// Nice one! This is a classic **beginner’s puzzle** in programming: *parameters vs arguments*. They sound like twins but they’re not identical. Let’s sort them out clearly.

// ---

// ## **1️⃣ Parameters**

// * Think of **parameters** as **placeholders** (like empty boxes 🗳️) in a function definition.
// * They **define what kind of input** a function expects.
// * Example:

//   ```js
  function greet(name) {   // <-- 'name' is a parameter
    console.log("Hello, " + name);
  }
//   ```

// Here, `name` is a **parameter** — it’s waiting for something to be passed in.

// ---

// ## **2️⃣ Arguments**

// * **Arguments** are the **actual values** you give to a function when you call it.
// * Example:

//   ```js
//   greet("Eba");   // <-- "Eba" is an argument
//   greet("Teshale"); // <-- "Teshale" is another argument
//   ```

// When the function runs:

// * First call → parameter `name` becomes `"Eba"`
// * Second call → parameter `name` becomes `"Teshale"`

// ---

// ## **3️⃣ Analogy (Real World)**

// * Function = **Coffee machine ☕**
// * Parameters = **slots** where you can put coffee beans, water, sugar (inputs).
// * Arguments = **the actual stuff** you put in (Ethiopian coffee beans, 200ml water, 1 spoon sugar).
// * The coffee machine (function) works differently depending on what arguments you pass.

// ---

// ## **4️⃣ Multiple Parameters & Arguments**

// ```js
function add(a, b) {   // a, b = parameters
  return a + b;
}

console.log(add(5, 3)); // 5, 3 = arguments → Output: 8
console.log(add(10, 20)); // Output: 30
// ```

// ---

// ## **5️⃣ Default Parameters**

// If no argument is provided, you can give a **default value** to a parameter:

// ```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();         // Hello, Guest
greet("Eba");    // Hello, Eba
// ```

// ---

// ## **Summary**

// * **Parameters** = variables listed in the function definition.
// * **Arguments** = actual values passed when the function is called.

// ---

// ⚡ Imagine you’re learning **functions deeply in JS**: want me to create a **Bootstrap mini-web app** where you type arguments into input fields, click a button, and see how parameters/arguments work live?
