
var findOriginalArray = function(changed) {
    if (changed.length % 2 === 1) return []; // get rid of odd-length inputs
    let double = true;
    changed.sort((a,b)=>a-b) // sort array in ascending order
    let i = 0;
    while (i < changed.length){
        let pos = changed.indexOf(changed[i]*2, i+1); // check for presence of doubled number
        if (pos === -1){
            double = false; // if not found, break out of the loop w/ false check
            break;
        } else {
            changed.splice(pos,1); // if found, get rid of doubled number and move on.
            i++;
        } 
    }
    return (double? changed: []);
};
changed = [1,3,4,2,6,8]
console.log(findOriginalArray(changed))