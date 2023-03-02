const prompt = require('prompt-sync')();

    let numArray = [];

    for (index = 1; index < 10; index++) {
        let num = Math.floor((Math.random() * (900)) + 99);
        numArray.push(num);
    }
    console.log("Array is " + numArray); // Store into an arrar
    numArray=numArray.sort();
    console.log("sort Array " + numArray);
    let firstMax = numArray[numArray.length-1];  
    let secondMax = numArray[numArray.length-2];//Find The 2nd largest and 2nd smallest
    let firstMin = numArray[0];
    let secondMin = numArray[1];
    console.log(firstMax);



