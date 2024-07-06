// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");

// Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

// Tests using the lower case funcation
console.log("Lower case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality  
console.log("Equality test with numbers:", 26 === 26);

// Numerical tests involving inequality  
console.log("Inequality test with numbers:", (26 as number) != 35);

//greater than and less than, 
console.log("Greater than test: ", 10 > 5);

// less than tests
console.log("Less than test: ", 5 < 10);

//greater than or equal to,
console.log("Greater than and equal to test: ", 10 >= 10);

// and less than or equal to
console.log("Less than and Inequal to test: ", 5 <= 10);

// Tests using "and"  operator
console.log("And operator tests: ", 5===5 && 10 > 5);

// Tests using "or" operator
console.log("or operator tests: ", 5===5 || false);

//Test weather an item is in a array
const fruits :string[] = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));

//Test weather an item is not in a array
console.log('Test "Apple" is not in the array:', !fruits.includes('Apple'));