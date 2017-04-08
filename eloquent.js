//Minimum

var min = function(a , b) {
  if (a < b) {
    return a;
} else return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion

function isEven(num) {
  num=Math.abs(num) // change to absolute value to account for negative numbers
  if(num === 0)
    return true;
   else if (num === 1)
    return false; 
   else 
     return isEven(num-2)
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Bean counting

function countBs(string) {
  return string.match(/B/g).length;
}
var countChar = function(string, character) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character)
            count++;
    }
    return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
