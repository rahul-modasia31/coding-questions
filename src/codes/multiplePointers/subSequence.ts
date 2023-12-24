// Write a function isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// eg: isSubsequence('hello', 'hello world') => true
// isSubsequence('sing', 'sting') => true
// isSubsequence('abc', 'abracadabra') => true
// isSubsequence('abc', 'acb') => false

const isSubsequence = (str1: string, str2: string): boolean => {
  if (str1.length > str2.length || !str2.length) return false;
  if (!str1.length) return true;
  let leftPtr = 0;
  let rightPtr = 0;
  while (rightPtr < str2.length) {
    if (str1[leftPtr] === str2[rightPtr]) {
      leftPtr++;
    }
    if (leftPtr === str1.length) return true;
    rightPtr++;
  }
  return false;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
