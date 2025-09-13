// app.js
import { mergeObjects, cloneObject } from "./utils.js";

const obj1 = { name: "Ahmed", age: 25 };
const obj2 = { city: "Cairo", age: 30 };

const merged = mergeObjects(obj1, obj2);
console.log("Merged Object:", merged);

const clone = cloneObject(obj1);
console.log("Cloned Object:", clone);
