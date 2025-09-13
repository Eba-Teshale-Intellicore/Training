/* JavaScript Variable Exercises */
var a = 8;
var b = 3;

alert ("a is " + b);
alert ("b is " + a);

/* OR */

var temp = a;
a = b;
b = temp;

console.log("a is " + a);
console.log("b is " + b);

/* other way */
function test(){
    var a = 8;
    var b = 3;

    var c = a;
    a = b;
    b = c;


console.log("a is " + a);
console.log("b is " + b);
}
test();

/* Another way */
/*Math trick (no temp, old-school puzzle)*/

let a = 8, b = 3;
a = a + b; 
b = a - b;
a = a - b;
console.log("a is " + a);
console.log("b is " + b);

/*
Great question — taking this swapping logic into the **real world** makes it click even better. Let’s translate the abstract code into something physical.

---

### 1. Classic swap with `temp`

**Code idea:**

```js
var temp = a;
a = b;
b = temp;
```

**Real world analogy:**
Imagine you have **two water glasses** — one full of orange juice (a = 8) and one full of milk (b = 3).
You want to swap their contents. You can’t just pour milk directly into the juice glass (it will mix).

So what do you do?

* Take a **third empty glass** (temp).
* Pour juice into the temp glass.
* Pour milk into the now-empty juice glass.
* Finally, pour juice from temp into the milk glass.

Now they’re swapped. That’s the role of `temp`.

---

### 2. Math trick (no temp)

**Code idea:**

```js
a = a + b;
b = a - b;
a = a - b;
```

**Real world analogy:**
You and your friend are carrying **stones**.

* You have 8 stones, your friend has 3.
* To swap without an extra bucket, you put **all stones together in one pile** (a = a + b).
* Your friend now takes back their share by subtracting (b = a - b).
* You then take what’s left (a = a - b).

It works, but it’s trickier — and if the pile is *huge*, it may overflow (like in programming).

---

### 3. Function swap

**Code idea:**

```js
function test(){
   var a = 8;
   var b = 3;
   ...
}
```

**Real world analogy:**
Think of a **recipe card**. The recipe says: “Take 8 eggs and 3 tomatoes, then swap them using a bowl.”
Each time you follow the recipe, you start fresh with new eggs and tomatoes. The swap only affects the items *inside your kitchen* at that moment — not the eggs and tomatoes in someone else’s kitchen.
That’s **scope**.

---

### 4. Destructuring swap

**Code idea:**

```js
[a, b] = [b, a];
```

**Real world analogy:**
Imagine you have two labeled baskets: Basket A (with apples) and Basket B (with bananas).
You simply **swap the labels**: now Basket A is for bananas, and Basket B is for apples.
Fast, clean, no extra basket needed.

---

So:

* **Temp glass/basket** = extra container
* **Math trick** = combine and redistribute
* **Function** = self-contained recipe
* **Destructuring** = swap labels instantly

Each swap style reflects a real-world way humans solve the same problem: moving things around without losing track.

Would you like me to build a **story-style analogy** (like kids in a classroom swapping chairs with or without an extra chair) so it feels even more alive?
*/