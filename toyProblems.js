//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str) {
    return str.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (arr) {
    var tempArr = []

    for (i = 0; i < arr.length; i++) {
      if (tempArr.indexOf(arr[i]) === -1) {
        tempArr.push(arr[i])
      }
    }

    return tempArr
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (str) {
    return str.split(' ').map(val => {
      return val.split('').map((val2, i) => {
        return i === 0 ? val2.toUpperCase() : val2
      }).join('')
    }).join(' ')
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function (str) {
    var count = 0
    var vowel = ['a', 'e', 'i', 'o', 'u']

    str.split('').map((val, index, arr) => {
      for (i = 0; i < arr.length; i++) {
        if (vowel[i] == val.toLowerCase()) {
          count++
        }
      }
    })

    return count
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (num) {
    let i = 2
    do {
      if (num <= 1) {
        return false
      } else if (num % i === 0 && num != 2) {
        return false
      }
    } while (i < num)

    return true
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
