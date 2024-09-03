//Write a function groupAnagrams(words) that takes an array of strings words and groups anagrams together. Anagrams are words that have the same characters but in a different order.

//Scenario:
// You are developing a language learning app with vocabulary exercises. 
//Write a function to group words entered by users into anagrams, helping them recognize common patterns and improve their language skills.

// solution
//Step-by-step thought process:
//Create an empty object to store our grouped anagrams.
//Iterate through each word in the input array.
//Sort the characters of each word to create a key for our object.
//Add the original word to an array in the object under this sorted key.
//Return the resulting object.
//Key points to consider:
//We need to handle empty strings (which should form their own group).
//The order of words within each group doesn't matter.
//We should use a stable sorting algorithm to ensure consistent results.

function groupAnagrams(words) {
    const result = {};

    // Handle empty string separately

    if (words.includes('')) {
        result[''] = [''];
    }

    // Group anagrams
    words.forEach(word => {
        const sortedWord = [...word].sort().join('');
        if (!result[sortedWord]) {
            result[sortedWord] = [];
        }
        result[sortedWord].push(word);
    });

    return Object.values(result);
}

// Example usage:
const inputWords = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(inputWords));
