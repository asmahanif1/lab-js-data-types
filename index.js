/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log("Iteration 1.1 | Tongue Twister ",tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const formattedString = part1.slice(0,part1.length-1)+part1.slice(part1.length-1).toUpperCase()+part2.slice(0,part2.length-1)+part2.slice(part2.length-1).toUpperCase();


// Print the cameLtaiL-formatted string

console.log("Iteration 1.2 | Camel Tail ",formattedString);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = (15 * billTotal)/100;


// Print out the tipAmount


console.log("Iteration 2.1 | Calculate Tip ",tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomRooomNumber =Math.floor( Math.random()*10 + 1 );

// Print the generated random number

console.log("Iteration 2.2 | Generate Random Number ",randomRooomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;

console.log("expression1 should be FALSE ", expression1);
console.log("expression2 should be TRUE ", expression2);
console.log("expression3 should be FALSE ", expression3);
console.log("expression4 should be TRUE ", expression4);
console.log("expression5 should be TRUE ", expression5);
console.log("expression6 should be FALSE ", expression6);
console.log("expression7 should be TRUE ", expression7);