//Organize an array - Part 1

const unorganizedArr = [19, 202, 1, 22, 1, 27, 24, 33, 7, 7, 30 , 7, 20, 2, 1, 4, 6, 7, 20, 99];

const organizedEr = (arr) => {

    const sortedArr = arr.sort((a, b) => a - b);
    /* sort() - items are compared as strings, which has items sorted as if they were strings of characters instead of numbers.
    In short, most times, using the sort method without a callback method doesn’t quite work, because sort doesn’t sort
    the way we expect. Instead, it needs to be explicitly told how to do so - with a callback function.
    The callback function or, technically, comparison function receives two arguments (called a and b by convention)
    and should return 1 if the first argument should preceed the second, -1 if the second argument should preceed the first
    and 0 if they are equal. */

    // Make all the numbers with the same value be in their own array - Part 2
    const sameGrouper = (arr) => {
    
        const groupedArr = []; 
        let sameNumberArr = []; 
        
        arr.forEach((el, i, arr) => {
            debugger; //check out line by line in the console, how it is grouping the same values
            if (i === 0) { 
                sameNumberArr.push(el); //[1]
            }

            let num; 
            //our array:[1, 1, 1, 2, 4, 6, 7, 7, 7, 7, 19, 20, 20, 22, 24, 27, 30, 33, 99 ,202]
            //same num: [1, 1, 1]
            if (i < arr.length - 1) { // 0 < 19
                num = arr[i+1];       // num = arr[1] = 1
            } else {                
                num = undefined;  
            }                    

            if (num === sameNumberArr[0]) {  // || 1 === 1
                sameNumberArr.push(num);                               
            } else {                                
                if (sameNumberArr.length > 1) {    
                    groupedArr.push(sameNumberArr); 
                } else {                            
                    groupedArr.push(sameNumberArr[0]); 
                }

                sameNumberArr = [];        
                if (num !== undefined) {    
                    sameNumberArr.push(num); 
                }                            
            }                               
        });
    console.log(groupedArr);
    }
sameGrouper(sortedArr);
}

organizedEr(unorganizedArr);

