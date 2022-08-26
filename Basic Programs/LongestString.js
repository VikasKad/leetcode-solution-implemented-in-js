const findLongestWordLength = (word) => {
    let longestWordDlen = 0;
    const splittedWords = word.split(' ');
    for (let i = 0; i < splittedWords.length; i++) {
        if (splittedWords[i].length > longestWordDlen) {
            longestWordDlen = splittedWords[i].length;
        }
    }
    return longestWordDlen;
}

// Using reduce method
const findLongestWordLength = (word) => {
    return word.split(' ').reduce((total, currentValue) => {
        return Math.max(total, currentValue.length);
    }, 0)
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));