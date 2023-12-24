// Write a function called searchString which accepts a string and a pattern and returns true if the pattern is in the string, otherwise it returns false.
// eg: searchString('wowomxzomg', 'omg') => true
// searchString('wowomgzomg', 'lol') => false

const searchString = (str: string, pattern: string): boolean => {
  if (!str.length || !pattern.length) return false;
  let start = 0;
  let patternStart = 0;
  while (start < str.length) {
    if (str[start] === pattern[patternStart]) {
      patternStart++;
      if (patternStart === pattern.length) return true;
    } else {
      while (patternStart > 0 && str[start] !== pattern[patternStart]) {
        patternStart--;
      }
    }
    start++;
  }
  return false;
};

const searchStringV2 = (str: string, pattern: string): boolean => {
  const updatedArr = str.split(pattern);
  return updatedArr.length > 1;
};

console.log(searchString("wowomxzomg", "omg")); // true
console.log(searchString("wowomgzomg", "lol")); // false
console.log(searchString("abcabcabcabc", "abcabc")); // true
console.log(searchString("abcabcabcabc", "abce")); // false

console.log(searchStringV2("wowomxzomg", "omg")); // true
console.log(searchStringV2("wowomgzomg", "lol")); // false
console.log(searchStringV2("abcabcabcabc", "abcabc")); // true
console.log(searchStringV2("abcabcabcabc", "abce")); // false
