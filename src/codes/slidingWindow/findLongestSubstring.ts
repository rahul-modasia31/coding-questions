// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// eg: findLongestSubstring('') => 0
// findLongestSubstring('rithmschool') => 7
// findLongestSubstring('thisisawesome') => 6

const findLongestSubstring = (str: string): number => {
  if (!str.length) return 0;
  const hash: Record<string, number> = {};
  let start = 0;
  let maxLength = 0;

  for (let i = start; i < str.length; i++) {
    const char = str[i];
    if (hash[char] !== undefined) {
      start = Math.max(start, hash[char] + 1);
    }
    hash[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
