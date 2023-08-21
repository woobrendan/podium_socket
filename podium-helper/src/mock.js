var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()  //returns undefined because of function hoisting

///////

const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};

const copy = { ...user };

copy.location.city = 'Albany';
console.log('original: ', user.location); 
console.log('copy:', copy.location); 

//////

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
const fizzbuzz = () => {
  for (let i = 1; i < 30; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'fizz';
    }
    if (i % 5 === 0) {
      str += 'buzz';
    }
    console.log(str ? str : i)
  }
}


///////


// Make this work:

duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = (nums) => {
	const dub = nums;
  for (const num of nums) {
  	dub.push(num)
  }
  return nums.concat(nums)
  return [...nums, ...nums]
  return dub
}




//////

// What will be returned by each of these?
console.log("hello" || "world") 
console.log("foo" && "bar") 



///////

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12


// const queueTime = (customers, till) => {
// 	const arr = []
//   for(let i = 0; i < tills; i++) {
//   	arr.push(0)
//   }
//   for(let x = 0; x < customers.length; x++) {
//   	const minIndex = arr.indexOf(Math.min(...arr))
//     arr[minIndex] += customers[x]
//   }
//   return Math.max(...arr)
// }









