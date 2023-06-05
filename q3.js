/**Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1] *
    **xample 1:**

**Input:** arr = [2,1]

**Output:** false*/

var validMountainArray = function(arr) {
    if (arr.length < 3 || arr[0]>=arr[1]) return false;
 let peak = true;
 for (let i = 0; i < arr.length - 1; i++) {
   if (peak && arr[i] > arr[i + 1]) {
     peak = false;
   } else if ((!peak && arr[i] <= arr[i + 1])||(arr[i]===arr[i+1])) {
     return false;
   }
 }
 return peak ? false : true;
};
arr = [2,1]
console.log(validMountainArray(arr))