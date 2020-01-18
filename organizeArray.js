//Organize an array - Part 1

const unorganizedArr = [19, 202, 1, 22, 1, 27, 24, 33, 7, 7, 30 , 7, 20, 2, 1, 4, 6, 7, 20, 99];

const organizedEr = (arr) => {
arr.sort((a, b) => a - b);
console.log(arr);
}
/* sort() - items are compared as strings, which has items sorted as if they were strings of characters instead of numbers.
In short, most times, using the sort method without a callback method doesn’t quite work, because sort doesn’t sort
the way we expect. Instead, it needs to be explicitly told how to do so - with a callback function.
The callback function or, technically, comparison function receives two arguments (called a and b by convention)
and should return 1 if the first argument should preceed the second, -1 if the second argument should preceed the first
and 0 if they are equal. */

organizedEr(unorganizedArr);

// Make all the numbers with the same value be in their own array - Part 2}