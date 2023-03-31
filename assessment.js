/*
1.
const greet = name => {
  return ("hello " + name +" how are you doing today?")
};

console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
console.log(greet('Sara')); // "Hello, Sara how are you doing today?"

*/

/*
2.
const even_or_odd = number => {
  if (number%2==0){
    return (number + " is a Even number");
  } else{
    return (number + " is a Odd number")
  }
}

console.log(even_or_odd(0)); // '0 is Even number'
console.log(even_or_odd(2)); // '2 is Even number'
console.log(even_or_odd(3)); // '3 is Odd number'
console.log(even_or_odd(-3)); // '-3 is Odd number'
*/

/*
3.
const solution = number => {
  let num=0;
  for (let i=1;i<number;i++){
    if (i%3==0 || i%5==0){
      num += i;
      
    }
  }
  return num;
};

console.log(solution(0)); // 0
console.log(solution(-15)); // 0
console.log(solution(10)); // 23
console.log(solution(20)); // 78
console.log(solution(200)); // 9168
*/

/*
4.
function createPhoneNumber(numbers){
  let fPart='', sPart='', lPart='';
  for(let i =0; i<numbers.length; i++){
     if(i < 3){
        fPart = (fPart)+(numbers[i]);
      }
     if(i >= 3 && i < 6){
        sPart = (sPart)+(numbers[i]);
      }
     if(i >= 6 && i < 10){
        lPart = (lPart)+(numbers[i]);
      }
  }
  return "("+(fPart)+ ") " + (sPart) + "-" +(lPart);
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
*/

/*
5.
const past = (h, m, s) => {
  let hour=h*60*60*1000;
  let min=m*60*1000;
  let sec=s*1000;
  
  return(hour+min+sec);
};

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000
*/

/*
6.
let moveZeroes = function(nums) {
        for(let i= nums.length-1; i>=0; i--){
            if(nums[i]===0){
                nums.push(0) 
                nums.splice(i,1)
            }
        }
        return nums
    };


console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0])); // [0]
*/

/*
7.
function firstNonRepeatingLetter(str) {
  let arra1 = str.toLowerCase().split('');
  let result = '';
  let count = 0;
 
  for (let x = 0; x < arra1.length; x++) {
    count = 0;
 
    for (let y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        count+= 1;
      }
    }
 
    if (count < 2) {
      result = str[x];
      break;
    }
  }
  return result;
};
console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('sTreSS')); // 'T'
console.log(firstNonRepeatingLetter('abba')); // ''
console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")); // ','
*/

/*
8.
function century(year) {
  let centuryCount = 0;
  while (year > 0){
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;
}
console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(89)); // 1
*/

/*
9.
function getCount(str) {
  return (str.match(/[aeiou+]/ig)||[]).length;
}

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
*/

/*
10.
const isDivisible = (n, x, y) => {
  if (n%x==0 && n%y==0){
    return true;
  }else{
    return false;
  }
};

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4)); // false
console.log(isDivisible(48, 3, 4)); // true
*/

/*
11.
const getNames = users => {
  return users.map(element=>element.name);

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
*/

/*
12.
const litres = time => {
  return Math.floor(time * 0.5);
};

console.log(litres(0)); // 0
console.log(litres(2)); // 1
console.log(litres(1.4)); // 0
console.log(litres(12.3)); // 6
console.log(litres(0.82)); // 0
console.log(litres(11.8)); // 5
console.log(litres(1787)); // 893
*/

/*
13.
const getMiddle = str => {
  let len=str.length;
  if (len%2==0){
    i=len/2;
    return (str[i-1]+str[i]);
  }else{
    i=(len+1)/2;
    return(str[i-1]);
  }
};

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'
*/

/*
14.
const disemvowel = str => {
  return str.match(/[^aeiou]/ig).join('');
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'
*/

/*
15.
const isSquare = n => {
  if (n >= 0){
    let check=Math.sqrt(n);
    let roun=Math.round(check);
    return (roun*roun == n);
  }
  return false;
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false
*/

/*
16.
const findShort = str => {
  let arr = str.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length
};

console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1
*/

/*
17.
function XO(str) {

    str = str.toLowerCase();

    var arrayOfCharacters = str.split("");

    var countX = arrayOfCharacters.reduce( function( acculumator, currentvalue ) {
        return acculumator + (currentvalue === 'x');
      }, 2);
    
    var countO = arrayOfCharacters.reduce( function( acculumator, currentvalue ) {
        return acculumator + (currentvalue === 'o');
      }, 2);
    
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}

console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)
*/

/*
18.
const arrayDiff = (a, b) => {
  let arr1 = [];
  if(b.length === 0 || a.length === 0){
    return a;
  }else{
    arr1 = a.filter(num => !(b.includes(num)) );
    return arr1;
  }
}
console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([4,5], [])); // <-- not working

*/

/*
19.
 capitalize = (str)=> {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};const



console.log(capitalize("How can mirrors be real if our eyes aren't real")); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
*/

/*
20.
const fizzBuzz = () => {
  for (let i=1;i<=100;i++){
    if(i%3==0){
      console.log("fizz");
    }else if(i%5==0){
      console.log("buzz");
    }else{
      console.log(i);
    }
  }
};

fizzBuzz(); // 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, ...
*/

/*
21.
const likes = names =>{
  switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return (names[0] + "likes this");
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}


console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
I*/

/*
22.
const squareDigits = num => {
  let number= " " + num;
  let newNum = [];
  number.split('').map(element => {
    newNum.push(element**2);
  })
  
  return parseInt(newNum.join(''));

  console.log(number);
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
*/

/*
23.
const sliceOfCake = (totalSilces, recipients, slicesPerPerson) =>{
  if(recipients*slicesPerPerson<=totalSilces){
    return true;
  }else{
    return false;
  }
};

console.log(sliceOfCake(10,3,2)); // true
console.log(sliceOfCake(10,6,2)); // false
*/

/*
24.
const highAndLow = numbers => {
  numbers = numbers.split(" ");
  return "Max number is " + Math.max.apply(null, numbers) + " and Min number is " +  Math.min.apply(null, numbers)
}

console.log(highAndLow('1 2 3 4 5')); // 'Max number is 5 and Min number is 1'
console.log(highAndLow('1 2 -3 4 5')); // 'Max number is 5 and Min number is -3'
console.log(highAndLow('1 9 3 4 -5')); // 'Max number is 9 and Min number is -5'
console.log(highAndLow('0 -214 542')); // 'Max number is 542 and Min number is -214'
*/

/*
25.
const descendingOrder = n => {
  let st= n.toString();
  let spli=st.split("");
  return spli.sort((a,b)=>b-a).join("");
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
*/

/*
26.
const positiveSum = arr => {
    if (arr.length < 1) {
        return 0;
    }
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            sum = arr[i] + sum;
      } 
    }
    return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0

*/

/*
27.
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([\w])\1+/g) || []).length;
}


console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('abA11')); // 2
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
*/

/*
28.
const reverseString = str => {
  return str.split("").reverse().join("");
  
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
console.log(reverseString('')); // ''
console.log(reverseString('h')); // 'h'
*/

/*
29.
const maxProfit = prices =>{
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
*/

/*
30.
const removeDuplicates = nums => {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};


console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
console.log(removeDuplicates([])); // 0

*/

/*
31.
const findOdd = arr => {
  a=arr.length;
   for (let i = 0; i < a; i++) {
         
        let count = 0;
         
        for (let j = 0; j < a; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count % 2 != 0)
            return arr[i];
    }
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([10])); // 10
*/

/*
32.
const cakes = (recipe, available) => {
  let num_cakes = Infinity;
  for (let ingredient in recipe) {
    if (!available[ingredient] || recipe[ingredient] > available[ingredient])
      return 0;
      
    num_cakes = Math.min(
      num_cakes,
      Math.floor(available[ingredient] / recipe[ingredient])
    );
  }
  return num_cakes;
};

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available)); // 2

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available)); // 0
*/

/*
33.
const count = str => {
  return str.split('').reduce( (prev, curr) => {
    prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
    return prev;
  }, {});
};


console.log(count('')); // {}
console.log(count('aba')); // { a: 2, b: 1 }

*/

/*
34.
const convertToRoman = number =>
{
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map((value, index)=> {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}
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
*/

/*
35.
const accum = str => {
  return str
    .split('')
    .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
    .join('-');
};
console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'

*/