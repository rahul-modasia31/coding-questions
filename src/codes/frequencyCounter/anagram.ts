// Write a js function that takes two strings and returns true if they are anagrams of each other.
// eg: 'anagram' and 'nagaram' => true
// 'rat' and 'car' => false
// 'awesome' and 'awesom' => false

const getFrequency = (str: string): Record<string, number> => {
  const frequency: Record<string, number> = {};
  for (const val of str) {
    frequency[val] = (frequency[val] ?? 0) + 1;
  }
  return frequency;
};

const checkstrayIsSame = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const str1Frequency = getFrequency(str1);
  for (const value of str2) {
    if (!(value in str1Frequency)) return false;
    str1Frequency[value] -= 1;
  }
  return true;
};

console.log(checkstrayIsSame("anagram", "nagaram"));
console.log(checkstrayIsSame("rat", "car"));
console.log(checkstrayIsSame("awesome", "awesom"));
console.log(checkstrayIsSame("", ""));

export {};
