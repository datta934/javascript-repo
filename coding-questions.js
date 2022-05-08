// 1. Find second largest number in array - If not sort
function findSecondLargest(arr) {
    let i;
    let largest = second = 0;
    let arr_size = arr.length;

    // finding the largest element
    for (i = 0; i < arr_size; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    // Now find the second largest element
    for (i = 0; i < arr_size; i++) {
        if (arr[i] > second && arr[i] < largest) {
            second = arr[i];
        }
    }
    return second;
}
findSecondLargest([4, 1, 8, 3, 2])

//2. Remove duplicates from an array
// using set
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

//using indexOf and filter
let numbers = [2, 2, 1, 1, 4, 3];

let uniqueNumbers = numbers.filter((c, index) => {
    return numbers.indexOf(c) === index;
});

console.log(uniqueNumbers);

// 3. Merge two array
// Sample Input
let arr1 = [3, 5, 2, 5, 2];
let arr2 = [2, 3, 5, 5, 2];


// using sort
function areEqual(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    // If lengths of array are not equal means
    // array are not equal
    if (n != m)
        return false;

    // Sort both arrays
    arr1.sort();
    arr2.sort();

    // Linearly compare elements
    for (let i = 0; i < n; i++)
        if (arr1[i] != arr2[i])
            return false;

    // If all elements were same.
    return true;
}

// using xor
function areEqual(arr1, arr2) {

    // Length of the two array
    let n = arr1.length;
    let m = arr2.length;

    // If lengths of arrays are not equal
    if (n != m)
        return false;

    // To store xor of both arrays
    let b1 = arr1[0];
    let b2 = arr2[0];

    // Find xor of each elements in array
    for (let i = 1; i < n; i++) {
        b1 ^= arr1[i];
    }
    for (let i = 1; i < m; i++) {
        b2 ^= arr2[i];
    }
    let all_xor = b1 ^ b2;

    // If xor is zero means they are
    // equal (5^5=0)
    if (all_xor == 0)
        return true;

    // If all elements were not same,
    // then xor will not be zero
    return false;
}

//4. Find the alphabets count in a string
// output as object - ignoring casing
function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

getFrequency('Indivisibilities');

//Example string abc.de.f.g and output gfe.dc.b.a
// with for loop - Time complexity -> O(N) Auxiliary Space -> O(N)
function preserveCharacter(str) {
    let inputArray = str.split("");
    let result = new Array(inputArray.length);
    // Mark characters in result
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == '.') {
            result[i] = '.';
        }
    }

    let j = result.length - 1;
    for (let i = 0; i < inputArray.length; i++) {

        // Ignore character in input string
        if (inputArray[i] != '.') {

            // ignore character in result.
            if (result[j] == '.') {
                j--;
            }
            result[j] = inputArray[i];
            j--;
        }
    }
    console.log((result).join("")); // gfe.dc.b.a
}
preserveCharacter('abc.de.f.g');

// Optimized - with two pointers
function preserveCharacter(str) {
    let n = str.length;
    // Initialize two pointers
    // as two corners
    let start = 0;
    let end = n - 1;

    let Str = str.split('');
    while (start < end) {

        // If character at start or
        // end is space, ignore it
        if (Str[start] == '.') {
            start++;
            continue;
        }
        else if (Str[end] == '.') {
            end--;
            continue;
        }

        // If both are not spaces, do swap
        else {
            let temp = Str[start];
            Str[start] = Str[end];
            Str[end] = temp;
            start++;
            end--;
        }
    }
    console.log(Str.join(""));
}

