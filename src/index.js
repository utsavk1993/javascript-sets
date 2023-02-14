/* JS Set
 * used to store unique values of any type
 * open console to check the results
 */

// set methods
const mySet = new Set();

mySet.add(1); // => Set(1) { 1 }
mySet.add(5); // => Set(2) { 1, 5 }
mySet.add(5); // => Set(2) { 1, 5 }
mySet.add("some text"); // => Set(3) { 1, 5, 'some text' }

const obj = { a: 1, b: 2 };
mySet.add(obj); // => Set(4) { 1, 5, 'some text', {…} }

mySet.add({ a: 1, b: 2 }); // => Set(5) { 1, 5, 'some text', {…}, {…} } - obj is referencing a different object

mySet.has(1); // => true
mySet.has(3); // => false
mySet.has(Math.sqrt(25)); // => true
mySet.has("Some Text".toLowerCase()); // => true
mySet.has(obj); // => true

mySet.delete(5); // => true
mySet.delete("random text"); // => false

console.log("mySet size:", mySet.size); // => 4

const symbolIterator = mySet[Symbol.iterator]();
console.log("Symbol Iterator - 01", symbolIterator.next().value); // => 1
console.log("Symbol Iterator - 02", symbolIterator.next().value); // => some text

const keysIterator = mySet.keys();
console.log("Key Iterator - 01", keysIterator.next().value); // => 1
console.log("Key Iterator - 01", keysIterator.next().value); // => some text

const valuesIterator = mySet.values();
console.log("Value Iterator - 01", valuesIterator.next().value); // => 1
console.log("Value Iterator - 02", valuesIterator.next().value); // => some text

// iterating over sets
// => 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
for (const item of mySet) {
  console.log("Iterating over mySet - item", item);
}

// => 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
for (const item of mySet.keys()) {
  console.log("Iterating over mySet with keys() - item", item);
}

// => 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }
for (const item of mySet.values()) {
  console.log("Iterating over mySet with values() - item", item);
}

// => 1 1, "some text" "some text", { "a": 1, "b": 2 } { "a": 1, "b": 2 }, { "a": 1, "b": 2 } { "a": 1, "b": 2 }
for (const [key, value] of mySet.entries()) {
  console.log(
    "Iterating over mySet with entries(), key and value will be the same",
    key,
    value
  );
}

console.log(
  "Converting mySet to an array using Array.from()",
  Array.from(mySet)
); // => [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]
console.log("Converting mySet to an array using spread operator (...)", [
  ...mySet
]); // => [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

const mySet2 = new Set();

mySet2.add(1); // => Set(1) { 1 }
mySet2.add("some text"); // => Set(2) { 1, "some text" }
mySet2.add("i am a set"); // => Set(3) { 1, "some text", "i am a set" }

mySet2.forEach((value) =>
  console.log("Iterating over mySet2 using forEach()", value)
); // => 1, "some text"

// remove duplicate elements from an array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log("Unique elements", [...new Set(numbers)]); // => [2, 3, 4, 5, 6, 7, 32]

const intersection = (setA, setB) =>
  new Set([...setA].filter((x) => setB.has(x)));
console.log(
  "Intersection of 'mySet' and 'mySet2'",
  intersection(mySet, mySet2)
); // => Set(2) { 1, "some text" }

const difference = (setA, setB) =>
  new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference of 'mySet' and 'mySet2'", difference(mySet, mySet2)); // Set(2) { {…}, {…} }

const union = (setA, setB) => new Set([...setA].concat([...setB]));
console.log("Union of 'mySet' and 'mySet2'", union(mySet, mySet2)); // Set(5) { 1, "some text", {…}, {…}, "i am a set" }

const isSuperSet = (set, subset) => {
  for (const item of subset) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
};

const mySet3 = new Set();

mySet3.add(1);
mySet3.add("some text");

console.log("mySet superset of mySet2", isSuperSet(mySet, mySet2)); // => false
console.log("mySet superset of mySet3", isSuperSet(mySet, mySet3)); // => true

const symmetricDifference = (setA, setB) =>
  difference(union(setA, setB), intersection(setA, setB));

console.log(
  "Symmetric difference of 'mySet' and 'mySet2'",
  symmetricDifference(mySet, mySet2)
); // => { {…}, {…}, "i am a set" }

console.log(
  "Symmetric difference of 'mySet' and 'mySet3'",
  symmetricDifference(mySet, mySet3)
); // => { {…}, {…} }

console.log("mySet", mySet); // => Set(4) { 1, "some text", {…}, {…} }
console.log("mySet2", mySet2); // => Set(3) { 1, "some text", "i am a set" }
console.log("mySet3", mySet3); // => Set(2) { 1, "some text" }

const mySet4 = new Set();

mySet4.add(1); // => Set(1) { 1 };

console.log("Clearing mySet4", mySet4.clear()); // => undefined
