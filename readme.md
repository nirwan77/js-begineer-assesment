# beginner-assessment

# Learn javascript basic concept:
The first step is to go through the basics of javascript which you can learn from the below link. 

Link: https://www.jschallenger.com/javascript-basics/variables/introduction

Challenges:
In order to complete all the tasks, first write the psuedo code and then write the program(optional).

## 1. Returning Strings

Write a function that given the input string `name`, returns the greeting statement `Hello, <name> how are you doing today?`

```js
const greet = name => {
  //Your solution
};

console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
console.log(greet('Sara')); // "Hello, Sara how are you doing today?"
```

## 2. Even or Odd

Create a function that takes and integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers.

```js
const even_or_odd = number => {
  // Your solution
}

console.log(even_or_odd(0)); // '0 is Even number'
console.log(even_or_odd(2)); // '2 is Even number'
console.log(even_or_odd(3)); // '3 is Odd number'
console.log(even_or_odd(-3)); // '-3 is Odd number'
```

## 3. Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.

```js
const solution = number => {
  // Your solution
};

console.log(solution(0)); // 0
console.log(solution(-15)); // 0
console.log(solution(10)); // 23
console.log(solution(20)); // 78
console.log(solution(200)); // 9168
```

## 4. Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number.

```js
const createPhoneNumber = numbers => {
  // Your solution
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
```
## 5. Clock

The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.

```js
const past = (h, m, s) => {
  // Your solution
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000
```

## 6. Move Zeroes
Given an integer array `nums`, move all `0`'s in the array to the end of it while maintaining the relative order of the non-zero elements. Achieve this without copying the array or creating a new array.

```js
const moveZeroes = nums => {
  // Your solution
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0])); // [0]
```

## 7. First Non-repeating Character

Write a function that takes an input string and returns the first character that is not repeated anywhere in the string. Upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.

```js
const firstNonRepeatingLetter = str => {
  // Your solution
};

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
console.log(firstNonRepeatingLetter('abba')); // ''
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','
```

## 8. Century From Year

The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.

```js
const century = year => {
  // Your solution
};

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1
```

## 9. Vowel Count

Return the number (count) of vowels (a, e, i, o, u) in the given string. The input string will only consist of lower case letters and/or spaces.

```js
const getCount = str => {
  // Your solution
};

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
```

## 10. Is n Divisible by x and y?

Create a function that checks if a number `n` is divisible by two numbers `x` AND `y`. All inputs are positive, non-zero digits.

```js
const isDivisible = (n, x, y) => {
  // Your solution
};

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true
```

## 11. Get Names

Write a function that given an array of users, returns an array of their names. Can you achieve this in one line of code?

```js
const getNames = users => {
  // Your solution
};

const users = [
  {
    id: 001,
    name: 'Alice',
    startDate: '2021-01-03',
  },
  {
    id: 002,
    name: 'Bob',
    startDate: '2020-02-01',
  },
  {
    id: 003,
    name: 'Claire',
    startDate: '2019-03-01',
  },
];

console.log(getNames(users)); // ['Alice', 'Bob', 'Claire']
```

## 12. Keep Hydrated!

Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. Given the time in hours, you need to return the number of litres of water that Nathan will drink, rounded to the smallest value.

```js
const litres = time => {
  // Your solution
};

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
console.log(litres(0.82)); // 0
console.log(litres(11.8)); // 5
console.log(litres(1787)); // 893
```

## 13. Get the Middle Character

Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

```js
const getMiddle = str => {
  // Your solution
};

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'
```

## 14. Disemvowel Trolls

Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and returns a new string with all vowels (`a, e, i, o, u`) removed.

```js
const disemvowel = str => {
  // Your solution
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'
```

## 15. You're a Square!

Write a function that given an integer, checks to see if it is a square number. A Square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

```js
const isSquare = n => {
  // Your solution
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false
```

## 16. Shortest Word

Given a non-empty string of words, return the length of the shortest word(s).

```js
const findShort = str => {
  // Your solution
};

console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1
```

## 17. Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The input string can contain any character.

```js
const XO = str => {
  // Your solution
};

console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)
```

## 18. Array.diff

Write a function that subtracts one list from another and returns the result. It should remove all values from array `a`, which are present in array `b`.

```js
const arrayDiff = (a, b) => {
  // Your solution
};

console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([], [4, 5])); // []
```

## 19. Capitalize Words

Write a function that capitalizes each word in a given input string.

```js
const capitalize = () {
  // Your solution
};

console.log(capitalize("How can mirrors be real if our eyes aren't real")); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
```

## 20. FizzBuzz

Write a program that prints the numbers from 1 to 100. But for multiples of
`3` prints "Fizz" instead of the number and for the multiples of `5` prints
"Buzz". For numbers which are multiples of both `3` and `5` prints "FizzBuzz".

```js
const fizzBuzz = () => {
  // Your solution
};

fizzBuzz(); // 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, ...
```

## 21. Who likes it?

You probably know the "like" system from Facebook and other social media. People can "like" posts, photos or other items. We want to create the text that should be displayed next to such an item.

Implement a function that takes an input array, containing the names of people who like an item and returns an output string formatted nicely as shown below.

```js 
const likes = names =>{
  // Your solution
}

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
```

## 22. Square Evey Digit

Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.

```js
const squareDigits = num => {
  // Your solution
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
```

## 23. Share the Cake

Create a function that determines whether or not it's possible to share the cake fairly given these three parameters: Total slices, Recipients, Slices each. It's fine not to use the entire cake. Print true if the cake can be shared equally, otherwise print false.

```js
const sliceOfCake = (totalSilces, recipients, slicesPerPerson) =>{
  // Your solution
};

console.log(sliceOfCake(10,3,2)); // true
console.log(sliceOfCake(10,6,2)); // false
```

## 24. Highest and Lowest

Given a string of space-seperated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

```js
const highAndLow = numbers => {
  //Your solution
};

console.log(highAndLow('1 2 3 4 5')); // 'Max number is 5 and Min number is 1'
console.log(highAndLow('1 2 -3 4 5')); // 'Max number is 5 and Min number is -3'
console.log(highAndLow('1 9 3 4 -5')); // 'Max number is 9 and Min number is -5'
console.log(highAndLow('0 -214 542')); // 'Max number is 542 and Min number is -214'
```


## 25. Descending Order

Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order. Essentially, reaarange the digits to create the highest possible number.

```js
const descendingOrder = n => {
  // Your solution
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
```

## 26. Sum of Positives

Given an array of numbers, write a function that returns the sum of all of the positives ones. If the array is empty, the sum should be `0`.

```js
const positiveSum = arr => {
  // Your solution
};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0
```

## 27. Counting Duplicates

Write a function that will return the count of distinct case-insensetive alphanumeric characters that occur more than once in the input string.

```js
const duplicateCount = text => {
  // Your solution
}

console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('abA11')); // 2
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
```

## 28. Reversed Strings

Write a function that reverses the string that is passed to it. For this challenge, you may **NOT** use the JavaScript built-in `reverse()` methid.

```js
const reverseString = str => {
  // Your solution
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
console.log(reverseString('')); // ''
console.log(reverseString('h')); // 'h'
```

## 29. Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

Example 1:

```shell
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

Example 2:

```shell
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

```js
const maxProfit = prices => {
  // Your solution
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
```

## 30 Remove Duplicates from Sorted Array

Given a sorted array `nums`, write a function that removes the duplicates in-place such that each element appears only once and returns the new length. Do **not** allocate extra space for another array, you must do this by modifying the input array in-place with `O(1)` extra memory.

```js
const removeDuplicates = nums => {
  // Your solution
};

console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([])); // 0
```

## 31. Find the Odd Int

Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

```js
const findOdd = arr => {
  // Your solution
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([10])); // 10
```

## 32. Pete, the Baker

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function `cakes()`, which takes the `recipe` object and the `available` ingredients object and returns the maximum number of cakes Pete can bake. Ingredients that are not present in the objects, can be considered as `0`.

```js
const cakes = (recipe, available) => {
  // Your solution
};

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); // 0
```

## 33. Count Characters in Your String

Write a function that counts the frequency of all the characters in a given string.

```js
const count = string => {
  // Your solution
};

console.log(count('')); // {}
console.log(count('aba')); // { a: 2, b: 1 }
```

## 34. Roman Numerals Encoder

Create a function that takes a positive integer less than `4,000` as its input and returns a string containing the Roman numeral representation of that integer. Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There can't be more than 3 identical symbols in a row. More about Roman numerals: [http://en.wikipedia.org/wiki/Roman_numerals](http://en.wikipedia.org/wiki/Roman_numerals)

Table of individual decimal places for your reference:

|     | Thousands | Hundreds | Tens | Units |
| --- | :-------- | :------- | :--- | :---- |
| 1   | M         | C        | X    | I     |
| 2   | MM        | CC       | XX   | II    |
| 3   | MMM       | CCC      | XXX  | III   |
| 4   |           | CD       | XL   | IV    |
| 5   |           | D        | L    | V     |
| 6   |           | DC       | LX   | VI    |
| 7   |           | DCC      | LXX  | VII   |
| 8   |           | DCCC     | LXXX | VIII  |
| 9   |           | CM       | XC   | IX    |

```js
const convertToRoman = number => {
  // Your solution
};

console.log(convertToRoman(4)); // IV
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(11)); // XI
console.log(convertToRoman(19)); // XIX
console.log(convertToRoman(22)); // XXII
console.log(convertToRoman(15)); // XV
console.log(convertToRoman(39)); // XXX + IX = XXXIX
console.log(convertToRoman(160)); // C + LX = CLX
console.log(convertToRoman(207)); // CC + VII = CCVII
console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
console.log(convertToRoman(1009)); // M + IX = MIX
console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX
```

## 35. Mumbling

Given a string which includes only letters, write a function that produces the outputs below.

```js
const accum = str => {
  // Your solution
};

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
```

