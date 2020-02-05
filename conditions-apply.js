// const COLLECTION = [
//   [2, 3, [1, 2]],
//   [4, 5],
//   [5, 6]
// ];

// const COLLECTION = [1,2]

const COLLECTION = ["a", "b", "c", "d"];

const isEqual = function(element1, element2) {
  return JSON.stringify(element1) === JSON.stringify(element2);
};

const doesIncludes = function(element, matcher) {
  if (typeof element === "object") {
    const newElement = JSON.stringify(element);
    const newMatcher = matcher.map(element => {
      if (typeof element === "object") return JSON.stringify(element);
      return element;
    });
    return newMatcher.includes(newElement);
  }
  return matcher.includes(element);
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
