//Write a function mergeArrays(arr1, arr2) that takes two arrays arr1 and arr2 and merges them into a single array, with the elements sorted in ascending order.
//Scenario
//You are building a music playlist app. You have two playlists from different sources. Write a function to merge these playlists into one,
// ensuring that the songs are sorted alphabetically by their titles.


//solution
//Step-by-step thought process:
//First, we'll create a function that takes two parameters: arr1 and arr2.
//We'll combine the two arrays using the spread operator (...) to create a new array.
//Finally, we'll sort the combined array using the sort() method.
//Key points to consider:
//The sort() method modifies the original array in place.
//We want to ensure the original arrays remain unchanged.
//The sort() method uses a comparison function to determine the order of elements.

function mergeArrays(arr1, arr2) {
    // Combine the two arrays
    const combinedArray = [...arr1, ...arr2];
    
    // Sort the combined array in ascending order
    return combinedArray.sort((a, b) => a.localeCompare(b));
  }
  
  // Example usage:
  const playlist1 = ["Song A", "Song B", "Song C"];
  const playlist2 = ["Song D", "Song E", "Song F"];
  
  const mergedPlaylist = mergeArrays(playlist1, playlist2);
  console.log(mergedPlaylist);
  


