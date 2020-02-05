// const COLLECTION = [
//   [2, 3, [1, 2]],
//   [4, 5],
//   [5, 6]
// ];

// const COLLECTION = [1, 2];

// const COLLECTION = ["a", "b", "c", "d"];

const COLLECTION = ["bla", "bla", "black", "ship"];

const isEqual = function(element1, element2) {
  return JSON.stringify(element1) === JSON.stringify(element2);
};

const doesIncludes = function(element, matcher) {
  const stringifiedElement = JSON.stringify(element);
  const stringifiedMatchers = matcher.map(element => JSON.stringify(element));
  return stringifiedMatchers.includes(stringifiedElement);
};

const doesIncludesInOrder = function(collection, matcher) {
  const matchedElements = collection.filter(element =>
    doesIncludes(element, matcher)
  );
  return isEqual(matcher, matchedElements);
};

const conditionsApply = function(collection) {
  if (doesIncludesInOrder(collection, [1, 2])) {
    return "wonder woman";
  }

  if (doesIncludesInOrder(collection, ["a", "b", "c", "d"])) {
    return "durga";
  }

  if (
    doesIncludesInOrder(collection, [
      [2, 3, [1, 2]],
      [4, 5]
    ])
  ) {
    return "cleopatra";
  }
  return "tuntun";
};

const result = conditionsApply(COLLECTION);
console.log(result);
